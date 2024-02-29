import React from 'react'
import { Breadcrumb } from 'components'
import ourServices from 'assets/our_services.png'
import pic from 'assets/pic.png'
import pic1 from 'assets/pic1.png'
import pic2 from 'assets/pic2.png'

const Services = () => {
   
    return (
        <div className="w-full ">
            <div className="h-[81px] flex justify-center items-center bg-gray-100">
              <div className="w-main">
                 <h3 className="font-semibold uppercase">OUR SERVICES</h3>
                    <Breadcrumb /> 
               </div>
            </div>
            <div className="w-main  p-4 flex  mt-3 m-auto">
                <img className=' cursor-pointer' src =  {ourServices} alt = 'our_services'  />
                <p className='ml-10 text-center text-sm w-2/4'>
                Our electronics e-commerce website is a reliable destination for tech enthusiasts and electronic gadget lovers alike. With a diverse inventory of products from leading brands in the market, we are committed to offering customers a wide selection and high-quality options.

The user-friendly interface of our website makes it easy for customers to search and browse through products conveniently. Each product is presented with detailed information, including high-quality images, comprehensive descriptions, and user reviews, allowing customers to have a clear and accurate overview of the product before making a purchase decision.

We not only provide quality products at competitive prices but also ensure the best customer service experience. Our flexible return policies and 24/7 customer support help guarantee absolute satisfaction for every transaction.

Enjoy the convenience and safety of online shopping on our website, where technology and utility are perfectly combined.
                </p>
            </div>
            <div className="w-main  p-4 flex  mt-8 m-auto" >
                 <h1 className='m-auto text-2xl semibold '>We Offer Best Services</h1>
            </div>
            <div className="w-main  p-4 flex  mt-8 m-auto cursor-pointer" >
            <div class="grid grid-rows-2 grid-flow-col gap-4">
                <div>
                    <img src={pic} alt = "pic" className='m-auto mb-5'/>
                    <p className='text-center mb-1 text-xl'>Customizable Page</p>
                    <p className='text-center text-xs'>Fusce arcu molestie eget libero consectetur congue consectetur in bibendum litora</p>
                </div>
                <div>
                    <img src={pic2} alt = "pic1" className='m-auto mb-5'/>
                    <p className='text-center mb-1 text-xl'>Revolution Slider</p>
                    <p className='text-center text-xs'>Fusce arcu molestie eget libero consectetur congue consectetur in bibendum litora</p>
                </div>
                <div>
                    <img src={pic2} alt = "pic1" className='m-auto mb-5' />
                    <p className='text-center mb-1 text-xl'>Revolution Slider</p>
                    <p className='text-center text-xs'>Fusce arcu molestie eget libero consectetur congue consectetur in bibendum litora</p>
                </div>
                <div>
                    <img src={pic1} alt = "pic2" className='m-auto mb-5'/>
                    <p className='text-center mb-1 text-xl'>Drag & Drop Page</p>
                    <p className='text-center text-xs'>Fusce arcu molestie eget libero consectetur congue consectetur in bibendum litora</p>
                </div>
                <div>
                    <img src={pic1} alt = "pic1" className='m-auto mb-5'/>
                    <p className='text-center mb-1 text-xl'>Drag & Drop Page</p>
                    <p className='text-center text-xs'>Fusce arcu molestie eget libero consectetur congue consectetur in bibendum litora</p>
                </div>
                <div>
                    <img src={pic} alt = "pic" className='m-auto mb-5'/>
                    <p className='text-center mb-1 text-xl' >Customizable Page</p>
                    <p className='text-center text-xs'>Fusce arcu molestie eget libero consectetur congue consectetur in bibendum litora</p>
                </div>


            </div>
            </div>
        </div>
    )
}

export default Services