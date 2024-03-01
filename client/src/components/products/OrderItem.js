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
  product,
}) => {
  const { current } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(dfQuantity);
  const [itemPrice, setItemPrice] = useState(price); // Initialize with a default value

  useEffect(() => {
    dispatch(updateCart({ pid, quantity, color }));
  }, [quantity, pid, color, dispatch]);

  useEffect(() => {
    const updateCartDetails = async () => {
      if (!current) {
        await Swal.fire({
          title: "Almost...",
          text: "Please login first!",
          icon: "info",
          cancelButtonText: "Not now!",
          showCancelButton: true,
          confirmButtonText: "Go login page",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate({
              pathname: `/${path.LOGIN}`,
              search: createSearchParams({
                redirect: location.pathname,
              }).toString(),
            });
          }
        });
        return;
      }

      const response = await apiUpdateCart({
        pid,
        color,
        quantity,
        price: product.price * quantity,
        thumbnail,
        title,
      });

      if (response.success) {
        toast.success(response.message);
        dispatch(getCurrent());
      } else {
        toast.error(response.message);
      }
    };

    // Ensure to call updateCartDetails only when itemPrice is correctly calculated
    if (itemPrice !== NaN && itemPrice !== null) updateCartDetails();
  }, [
    itemPrice,
    pid,
    color,
    quantity,
    thumbnail,
    title,
    dispatch,
    navigate,
    location,
  ]);

  const handleQuantity = (newQuantity) => {
    if (+newQuantity >= 1) {
      setQuantity(+newQuantity);
    }
  };

  const handleChangeQuantity = (flag) => {
    setQuantity((prev) => {
      const nextQuantity = flag === "minus" ? Math.max(1, prev - 1) : prev + 1;
      return nextQuantity;
    });
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
