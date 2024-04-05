import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md"
const ContactUs = () => {
  return (
    <div className='bg-[#181138] flex flex-col items-center justify-center w-[100vw] pb-[2rem] gap-[2rem] '>
       <div className='xl:p-[1.8rem] flex flex-col lg:flex-row  justify-center w-fit  overflow-x-hidden items-center'>
          <div className='bg-[#5b31ee] xl:p-[2rem] text-white flex flex-col gap-[1.2rem] rounded-l-[0.5rem] lg:w-[45vw] md:w-[70vw] p-[2rem] w-[100vw] sm:w-[60vw]'>
           <h1 className='text-[2rem] font-semibold'>Contact Us</h1>
          <form className='flex flex-col gap-[2rem]'>
             <div className='flex flex-col justify-between gap-2 lg:flex-row '>
               <div className='flex flex-col gap-[0.3rem] xl:w-full   '>
                  <p>FULL NAME</p>
                  <input className='p-2 '  type="text" placeholder='Name' />
               </div>
                <div className='flex flex-col gap-[0.3rem] w-full '>
                    <p>EMAIL ADDRESS</p>
                    <input className='p-2 '  type="email" placeholder='Email' />
                </div>
            </div> 
            <div className='flex flex-col gap-[0.3rem]'>
                <p>SUBJECT</p>
                <input type="text" placeholder='Message' className='p-2' />
            </div>
            <div className='flex flex-col gap-[0.3rem]'>
                <p>MESSAGE</p>
                 <textarea name="Message"  placeholder='Message' className='h-[5rem] w-full resize-none p-2'></textarea>
            </div>
            <button className='p-[0.5rem] px-[2rem] text-white rounded-[0.5rem] bg-red-600 w-fit'>Send Message</button>
          </form>
          </div>
          <div className=''>
                   <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2080813490834!2d82.99154071088564!3d25.26358477757512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31809b29df93%3A0x5bad5e4c326778c8!2sKabir%20Colony%2C%20Banaras%20Hindu%20University%2C%20Varanasi%2C%20Uttar%20Pradesh%20221005!5e0!3m2!1sen!2sin!4v1710238360803!5m2!1sen!2sin"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                className='xl:w-[30rem] w-[100vw] h-[25rem]  xl:h-[32rem] sm:w-[60vw] md:w-[70vw] lg:w-[30rem] lg:h-[32rem]'
                />
        </div>
       </div>
      <div className='flex gap-[2rem] flex-col lg:flex-row'>
         <div className='w-[15rem] flex flex-col gap-[0.3rem] items-center'>
            <Link className='p-[0.8rem]  rounded-[5rem] bg-[#5B31EE]'><FaLocationDot className='text-[1.5rem] text-white'/></Link>
            <p className='text-center text-white'><span className='text-[1rem] font-extrabold tracking-[0.1rem]'>Address: </span>BHU CDC Building Varanasi 221002</p>
         </div>
         <div className='w-[15rem] flex flex-col gap-[0.3rem] items-center'>
            <Link className='p-[0.8rem] rounded-[5rem] bg-[#5B31EE]'><FaPhoneAlt className='text-[1.5rem] text-white'/></Link>
            <p className='text-center text-white'><span className='text-[1rem] font-extrabold tracking-[0.1rem]'>Phone: </span>+91 9034567834</p>
         </div>
         <div className='w-[15rem] flex flex-col gap-[0.3rem] items-center'>
            <Link className='p-[0.8rem] rounded-[5rem] bg-[#5B31EE]'><MdEmail className='text-[1.5rem] text-white'/></Link>
            <p className='text-center text-white'><span className='text-[1rem] font-extrabold tracking-[0.1rem]'>Email: </span>info@boot&boost.com</p>
         </div>
      </div>

    </div>
  )
}

export default ContactUs
