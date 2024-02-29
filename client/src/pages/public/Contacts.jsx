import React  from 'react'
import { Breadcrumb } from 'components'
import { MdOutlineWhereToVote } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import {MdOutlineEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
const Contacts = () => {
    const styleMap = {
        height : '450px',
        border: '0',
        loading:"lazy",
        referrerpolicy:"no-referrer-when-downgrade",



    }
    return (
        <div className="w-full ">
            <div className="h-[81px] flex justify-center items-center bg-gray-100">
                <div className="w-main">
                    <h3 className="font-semibold uppercase">Contacts US</h3>
                         <Breadcrumb /> 
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4461.724107198783!2d105.78775157235046!3d20.99840899478563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acba7ddb0f43%3A0xe7d7c05f85f830a!2zNDggUC4gVOG7kSBI4buvdSwgVHJ1bmcgVsSDbiwgVOG7qyBMacOqbSwgSMOgIE7hu5lpIDEwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1701337166975!5m2!1svi!2s" 
           className='w-main m-auto mt-5 h-128 mb-5 ' style={styleMap}></iframe>
            <div className="w-main m-auto text-sm flex ">
                <div class="w-2/4">
                     <p>
                        Contact us for further information or assistance. We're here to listen and answer any questions you may have. Feel free to send a message directly or utilize the contact information provided below. Thank you!</p>
                
                     <div className='flex mt-3' >
                          <span className='mr-2'><MdOutlineWhereToVote size={15} /></span>
                          <p className='flex'>Address: 48 TO HUU , TRUNG VAN , NAM TU LIEM , HA NOI</p>
                     </div>
                     <div className='flex mt-3'>
                        <span className='mr-2'><FaDoorOpen size={15} /> </span>
                        <p> Opening hours :</p> 
                    
                     </div>
                     <div className='mb-10'>
                       <p>Mon-Fri : 11.00 - 20.00</p>
                       <p>at: 10.00 - 20.00</p>
                       <p> Sun: 19.00 - 20.00</p>
                    </div>
                 
                </div>
                   <div className='justify-end w-2/4'>
                      <div className='flex justify-end'>
                         <span className=' mr-2 ' ><MdOutlineEmail size={17}/></span>
                         <p >Email: ducanhsupport@digital.com </p>
                      </div>
                
                      <div className='flex justify-end mt-3'> 
                         <span className=' mr-2'  > <MdPhone size={16} /> </span>
                         <p>Phone : (+03)45678910</p>
                      </div>
                   <div  >
                      <p className='flex justify-end mt-3 mb-3'>Other : </p>

                   <div className='flex  justify-end  cursor-pointer'>
                     <span className='mr-5'><FaFacebook size={30} /></span>
                     <span className='mr-5' ><SiZalo size={30} /></span>
                     <span className='mr-5' ><AiOutlineInstagram size={30} /></span>
                     <span className='mr-5' ><RxTwitterLogo size={30} /></span>
                     <span className='mr-5' ><FaTelegramPlane size={30}/></span>

                   </div>
                </div>
                   </div>
             </div>
            
        </div>

           
           
          

        
    )
}

export default Contacts