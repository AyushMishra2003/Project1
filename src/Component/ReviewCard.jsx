import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const ReviewCard = ({image,content,username,userProffesion}) => {
  return (
    <div className='text-white  w-[23rem] flex flex-col gap-[1.4rem] justify-center p-[1rem] relative xl:w-fit'>
      <div className='p-[1.7rem] bg-[#0C0E2B] xl:w-[20rem] py-[3.5rem] shadow-[3px_7px_3px_#59438f]'>
        <p className='text-[1.1rem] font-normal'>{content}</p>
      </div>
      <div className='flex flex-row  items-center xl:gap-[4rem]'>
        <img src={image} alt="" />
        <div>
            <p className='text-[1.2rem] font-bold'>{username}</p>
            <p className='font-light'>{userProffesion}</p>
        </div>
      </div>
      <p className='bg-[#5F2DED] w-fit p-[1rem] absolute top-[0rem] left-[-1rem]'><FaQuoteLeft className='text-[2rem]' /></p>
    </div>
  )
}

export default ReviewCard
