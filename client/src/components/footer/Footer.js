import React, { memo } from 'react'
import icons from 'ultils/icons'


const { MdEmail } = icons
const Footer = () => {
    return (
        <div className='w-full '>
            <div className='h-[103px] w-full bg-main flex items-center justify-center'>
                <div className='w-main flex items-center justify-between'>
                    <div className='flex flex-col flex-1'>
                        <span className='text-[20px] text-gray-100'>SIGN UP TO NEWSLETTER</span>
                        <small className='text-[13px] text-gray-300'>Subscribe now and receive weekly newsletter</small>
                    </div>
                    <div className='flex-1 flex items-center'>
                        <input
                            className='p-4 pr-0 rounded-l-full w-full bg-[#F04646] outline-none text-gray-100 placeholder:text-sm placeholder:text-gray-200 placeholder:italic placeholder:opacity-50'
                            type="text"
                            placeholder='Email address'
                        />
                        <div className='h-[56px] w-[56px] bg-[#F04646] rounded-r-full flex items-center justify-center text-white'>
                            <MdEmail size={18} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[407px] w-full bg-gray-900 flex items-center justify-center text-white text-[13px]'>
                <div className='w-main flex'>
                    <div className='flex-2 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px] cursor-pointer'>ABOUT US</h3>
                        <span>
                            <span>Address: </span>
                            <span className='opacity-70 cursor-pointer'>48 TO HUU , TRUNG VAN , NAM TU LIEM , HA NOI</span>
                        </span>
                        <span>
                            <span>Phone: </span>
                            <span className='opacity-70 cursor-pointer'>(+03)45678910</span>
                        </span>
                        <span>
                            <span>Mail: </span>
                            <span className='opacity-70 cursor-pointer'>ducanhsupport@digital.com</span>
                        </span>

                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px] cursor-pointer' >INFORMATION</h3>
                        <span className='cursor-pointer'>Typography
                        </span>
                        <span className='cursor-pointer'>Gallery</span>
                        <span  className='cursor-pointer'>Store Location</span>
                        <span className='cursor-pointer'>Today's Deals</span>
                        <span className='cursor-pointer'> Contacts</span>

                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>WHO WE ARE</h3>
                        <span className='cursor-pointer'>Help</span>
                        <span className='cursor-pointer'>Free Shipping</span>
                        <span className='cursor-pointer'>FAQs</span>
                        <span className='cursor-pointer'>Return & Exchange</span>
                        <span className='cursor-pointer'>Testimonials</span>

                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px] cursor-pointer'>#DIGITALWORLDSTORE</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)