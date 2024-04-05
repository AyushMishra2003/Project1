import React from 'react'
import { ReactDOM } from 'react'
import { Route,Routes} from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ReviewData from './Hook/ReviewData';
import ReviewCard from './Component/ReviewCard';
import Home from './Home';
import ContactUs from './ContactUs';
import AboutUsPage from './AboutUsPage';
const App = () => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplaySpeed:3000,
//     autoplay:true,
//     centerMode:true,
//     pauseOnDotsHover:true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1075,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           centerMode:true,
//           // dots: true
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           // dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite:true
//           // initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite:true
//         }
//       },
// ]
// };



//   return (
//        <div className=' bg-[#170F2F] flex flex-col xl:flex-row items-center xl:gap-[10rem] justify-center p-[2rem] h-[100vh] w-[100vw] lg:p-[4rem] '>
//        <div className='flex flex-col  xl:w-[22rem] text-white xl:gap-[1.5rem] w-[30rem]'>
//           <button className='px-[1.8rem] p-[0.2rem] rounded-[10rem] text-[#5B31EE] bg-white w-fit'>Course List</button>
//           <p className='text-[2rem] xl:text-[2.5rem] font-bold'>What They Say About us</p>
//           <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aspernatur vel sapiente quasi repellat! Nobis cupiditate fa </p>
//           <button className='flex p-[0.8rem] px-[1rem] gap-[0.5rem] bg-[#F2277E] items-center justify-center w-fit hover:bg-[#170f2f] border border-[#F2277E] ease-in duration-500'><p>Explore More</p> <FaLongArrowAltRight />   </button>
//        </div>
//        <div>
//         <div className=''>

//         <Slider {...settings} className='flex lg:flex-row   items-center justify-center w-[20rem]   xl:w-[40rem] lg:w-[70rem]'>
//           {ReviewData.map((val,ind)=><ReviewCard image={val.image} content={val.content} username={val.username} userProffesion={val.userProffesion}  />)}
//         </Slider>
//         </div>
//        </div>
//     </div>
// //   )
//    <Routes>
//     <Route path='/' element={<Home/>}/>
//    </Routes>

   return(
    <div className='overflow-x-hidden '>
      <Routes>
        <Route path='/Project1' element={<ContactUs/>}/>
        <Route path='/Project1/contact' element={<AboutUsPage/>}/>
      </Routes>
    </div>
   )
}
export default App
