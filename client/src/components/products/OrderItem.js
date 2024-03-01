import SelectQuantity from "components/common/SelectQuantity";
import React, { useEffect, useState } from "react";
import { formatMoney } from "ultils/helpers";
import { updateCart } from "store/user/userSlice";
import withBaseComponent from "hocs/withBaseComponent";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCurrent } from "store/user/asyncActions";
import Swal from "sweetalert2";
import path from "ultils/path";
import { apiUpdateCart } from "apis";

const OrderItem = ({
  dispatch,
  color,
  dfQuantity = 1,
  price,
  title,
  thumbnail,
  pid,
}) => {
  const { current } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(() => dfQuantity);
  const [individualPrice, setIndividualPrice] = useState();
  const [itemPrice, setItemPrice] = useState(() => price);
  console.log("Quantity", quantity);
  const handleQuantity = (number) => {
    if (+number >= 1) {
      setQuantity(number);
      setItemPrice(+individualPrice * +number);
    }
  };
  const handleChangeQuantity = (flag) => {
    if (flag === "minus" && quantity === 1) return;
    if (flag === "minus") {
      setQuantity((prev) => +prev - 1);
      setItemPrice(+individualPrice * (+quantity - 1));
    }
    if (flag === "plus") {
      setQuantity((prev) => +prev + 1);
      setItemPrice(+individualPrice * (+quantity + 1));
    }
  };

  useEffect(() => {
    setIndividualPrice(price / quantity);
  }, [pid]);
  useEffect(() => {
    console.log("update cart", { pid, quantity, color });
    dispatch(updateCart({ pid, quantity, color }));
  }, [quantity,price,pid]);
  // Set quantity

  const handleClickOptions = async (e, flag) => {
    console.log('called')
    e.stopPropagation();
    if (flag === "CART") {
      if (!current)
        return Swal.fire({
          title: "Almost...",
          text: "Please login first!",
          icon: "info",
          cancelButtonText: "Not now!",
          showCancelButton: true,
          confirmButtonText: "Go login page",
        }).then(async (rs) => {
          if (rs.isConfirmed)
            navigate({
              pathname: `/${path.LOGIN}`,
              search: createSearchParams({
                redirect: location.pathname,
              }).toString(),
            });
        });

      console.log("Quantity at update cart", quantity);
      console.log("price at update cart", price);
      const response = await apiUpdateCart({
        pid: pid,
        color: color,
        quantity,
        price: itemPrice,
        thumbnail: thumbnail,
        title: title,
      });
      if (response.success) {
        toast.success(response.mes);
        dispatch(getCurrent());
      } else toast.error(response.mes);
    }
  };
  return (
    <div className="w-main mx-auto border-b font-bold py-3 grid grid-cols-10">
      <span className="col-span-6 w-full text-center">
        <div className="flex gap-2 px-4 py-3">
          <img src={thumbnail} alt="thumb" className="w-28 h-28 object-cover" />
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm text-main">{title}</span>
            <span className="text-[10px] font-main">{color}</span>
          </div>
        </div>
      </span>
      <span className="col-span-1 w-full text-center">
        <div className="flex items-center h-full">
          <SelectQuantity
            quantity={quantity}
            handleQuantity={handleQuantity}
            handleChangeQuantity={handleChangeQuantity}
            handleClickOptions={handleClickOptions}
          />
        </div>
      </span>
      <span className="col-span-3 w-full h-full flex items-center justify-center text-center">
        <span className="text-lg">{formatMoney(price) + " VND"}</span>
      </span>
    </div>
  );
};

export default withBaseComponent(OrderItem);
