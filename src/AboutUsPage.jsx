import React, { useState } from 'react'
import aboutimg from './img/19728.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import AboutCard from './Component/AboutCard';
import WhyWeCard from './Component/WhyWeCard';
import MissonCard from './Component/MissonCard';
import ApproachCard from './Component/ApproachCard'
import serviceImg from './img/serviceimg.png'
import companyName from './img/company_name.png'
const AboutUsPage = () => {
  const [active,setAcitve]=useState("About")
  return (
    <div className='flex flex-col justify-center bg-[#191136] p-[1.5rem] gap-[2.5rem] items-center w-[100vw] '>
        <div className='flex flex-col items-center text-white lg:flex-row p-[1rem] gap-[2.5rem] '>
          <div>
            <img src={aboutimg} alt="AboutUsimge" className='xl:w-[30rem] lg:w-[30rem]'/>  
          </div>
          <div className='xl:w-[30rem] lg:w-[28rem] flex flex-col items-start gap-[1.3rem] '>
            <button className='p-[0.3rem] px-[1.6rem] rounded-[8rem] border-none text-[#5B31EE] bg-white'>About Us</button>
            <p className='text-[2rem] font-bold'>Welcome to the Boot and Boost Bussiness Consultancy</p>
            <p>Ready to take your business to the next level? Contact Boot and Boost today to schedule a consultation with one of our expert consultants. Together, we'll chart a course for success and unlock the full potential of your business. Let's embark on this journey together and achieve greatness.</p>
            <button className='flex items-center justify-center gap-[0.4rem] p-[0.8rem] px-[1.2rem] bg-[#5B31EE] text-white rounded-[0.5rem] border border-[#5B31EE] hover:bg-[#110b23] ease-in duration-300  font-semibold'> Explore More <FaLongArrowAltRight /></button>
          </div>
        </div>
        <div className='flex flex-wrap xl:gap-[5rem] gap-[0.5rem]'>
                <button onClick={()=>setAcitve("About")}   className='bg-[#0C0E2B] text-white p-[1rem] px-[3.5rem] font-bold hover:border-b-2 border-[#5B31EE]'>ABOUT</button>
                <button onClick={()=>setAcitve("WhyWe")}  className='bg-[#0C0E2B] text-white p-[1rem] px-[3.5rem] font-bold hover:border-b-2 border-[#5b31ee] ease-in duration-500'>WHY WE CHOOSE US </button>
                <button onClick={()=>setAcitve("Mission")}  className='bg-[#0C0E2B] text-white p-[1rem] px-[3.5rem] font-bold hover:border-b-2 border-[#5b31ee] ease-in duration-500'>MISSION</button>
                <button onClick={()=>setAcitve("Approach")}  className='bg-[#0C0E2B] text-white p-[1rem] px-[3.5rem] font-bold hover:border-b-2 border-[#5b31ee] ease-in duration-500'>APPROACH</button>
        </div>
        <div>
                {active==="About" && <AboutCard/>}
                {active==="WhyWe" && <WhyWeCard/>}
                {active==="Mission" && <MissonCard/>}
                {active=="Approach" && <ApproachCard/>}
        </div>
       <div className='flex flex-col gap-[1rem] items-start'>
        <div>
         <p className='text-[2rem] text-center w-[20rem] text-white font-bold'>Our Best Services For Your Bussiness </p>
         </div>
      {/* <div className='flex flex-col lg:flex-row gap-[2rem] '>
         <div className='sm:w-[23rem] w-[20rem] shadow-sm shadow-red relative rounded-md h-[18rem] overflow-hidden'>
            <div className='absolute  bg-blue w-[3rem] h-[3rem] right-5 rounded-full'></div>
            <div className='absolute  bg-red w-[3rem] h-[3rem] animate-pulse left-[5rem] bottom-12 rounded-full'></div>
            <div className='absolute  bg-blue w-[3rem] h-[3rem] right-5 bottom-2 animate-pulse rounded-full'></div>
            <div className='absolute  bg-black w-[3rem] h-[3rem] right-5 rounded-full'></div>
            <div className='absolute  bg-blue w-[2rem] h-[2rem] animate-bounce rounded-full'></div>
            <div className='absolute  bg-red w-[2rem] animate-bounce h-[2rem] right-[5rem] top-16 rounded-full'></div>
            <div className='flex z-[100] h-full relative flex-col backdrop-blur-[35px]  p-4 rounded-md justify-around gap-2 flex-start bg-[#350c596c]'>
                <img src={serviceImg} alt="image" className='w-[15em]' />
                <h2 className='tracking-wide text-white text-[1.25rem]'>Bussiness Consultancy</h2>
                <p className=' text-white line-clamp-3 text-[0.9rem] overflow-ellipsis min-h-[4.1rem] font-[300]'>Consultancy We work fir it</p>
                <p className='p-[6px] w-fit px-4 text-white rounded bg-blue tracking-wide hover:bg-red transition-all duration-300'>Reach out</p>
            </div>
          </div>
          <div className='sm:w-[23rem] w-[20rem] shadow-sm shadow-red relative rounded-md h-[18rem] overflow-hidden'>
            <div className='absolute  bg-blue w-[3rem] h-[3rem] right-5 rounded-full'></div>
            <div className='absolute  bg-red w-[3rem] h-[3rem] animate-pulse left-[5rem] bottom-12 rounded-full'></div>
            <div className='absolute  bg-blue w-[3rem] h-[3rem] right-5 bottom-2 animate-pulse rounded-full'></div>
            <div className='absolute  bg-black w-[3rem] h-[3rem] right-5 rounded-full'></div>
            <div className='absolute  bg-blue w-[2rem] h-[2rem] animate-bounce rounded-full'></div>
            <div className='absolute  bg-red w-[2rem] animate-bounce h-[2rem] right-[5rem] top-16 rounded-full'></div>
            <div className='flex z-[100] h-full relative flex-col backdrop-blur-[35px] rounded-md justify-around gap-2 flex-start bg-[#350c596c]'>
                <img src={serviceImg} alt="image" className='w-[15rem]' />
                <h2 className='tracking-wide text-white text-[1.25rem]'>Bussiness Consultancy</h2>
                <p className=' text-white line-clamp-3 text-[0.9rem] overflow-ellipsis min-h-[4.1rem] font-[300]'>Consultancy We work fir it</p>
                <p className='p-[6px] w-fit px-4 text-white rounded bg-blue tracking-wide hover:bg-red transition-all duration-300'>Reach out</p>
            </div>
          </div>
          <div className='sm:w-[23rem] w-[20rem] shadow-sm shadow-red relative rounded-md h-[18rem] overflow-hidden'>
            <div className='absolute  bg-blue w-[3rem] h-[3rem] right-5 rounded-full'></div>
            <div className='absolute  bg-red w-[3rem] h-[3rem] animate-pulse left-[5rem] bottom-12 rounded-full'></div>
            <div className='absolute  bg-blue w-[3rem] h-[3rem] right-5 bottom-2 animate-pulse rounded-full'></div>
            <div className='absolute  bg-black w-[3rem] h-[3rem] right-5 rounded-full'></div>
            <div className='absolute  bg-blue w-[2rem] h-[2rem] animate-bounce rounded-full'></div>
            <div className='absolute  bg-red w-[2rem] animate-bounce h-[2rem] right-[5rem] top-16 rounded-full'></div>
            <div className='flex z-[100] h-full relative flex-col backdrop-blur-[35px] rounded-md justify-around gap-2 flex-start bg-[#350c596c] '>
                <img src={serviceImg} alt="image" className='w-[15rem]' />
                <h2 className='tracking-wide text-white text-[1.25rem]'>Bussiness Consultancy</h2>
                <p className=' text-white line-clamp-3 text-[0.9rem] overflow-ellipsis min-h-[4.1rem] font-[300]'>Consultancy We work fir it</p>
                <p className='p-[6px] w-fit px-4 text-white rounded bg-blue tracking-wide hover:bg-red transition-all duration-300'>Reach out</p>
            </div>
          </div>
     </div> */}
       </div>
       <div className='lg:p-[2rem] sm:items-center sm:justify-center flex flex-col gap-[2rem] '>
          <p className='font-bold text-white text-[1.5rem] xl:text-[2rem] w-[50rem] text-center'>Relied on marketers trusted by enginners and Beloved by Executives</p>
          <div className='flex flex-wrap gap-[2rem]  items-center justify-center'>
            <div className='flex flex-col   lg:flex-row lg:items-center lg:justify-center gap-[4rem]'>
               <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/>
               <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/>
               <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/>
               <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/>
               <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/> 
            </div>
            <div className='flex flex-col   lg:flex-row  gap-[4rem]'>
            <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/>
               <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/>
               <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/>
               <img src={companyName} alt="image" className='w-[5rem] sm:w-[10rem] lg:w-[8rem]'/> 
            </div>
          </div>
       </div>
    </div>
  )
}

export default AboutUsPage
