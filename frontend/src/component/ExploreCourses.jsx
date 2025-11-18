// import React from 'react'
// import { Siviaplay } from "react-icons/si";
// import {TbDeviceDesktopAnalytics } from "react-icons/tb";
// import { LiaUikit } from "react-icons";



// export const ExploreCourses = () => {
//   return (
//     <div className='w-[100vw] min-h-[50vh] lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center gap-4 px-[30px]'>

//     {/* left/top div */}
//     <div className='w-[100%] lg:w[350px] lg:-h[100%] flex flex-col items-center justify-center gap-1 md:px-[40px] px-[20px]'>

//      <span className='text-[35px] font-semibold'>Explore</span>
//      <span className='text-[35px] font-semibold'>Our Courses</span>
//      <p className='text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi iste delectus, molestiae ea repellendus tenetur magni reiciendis. Alias accusamus cumque dolorum consequatur! Blanditiis nesciunt autem, iure exercitationem omnis obcaecati!</p>
//      <button className='px-[20px] py-[10px] border-2 bg-[black] border-white text-white rounded-[10px] text-[18px] font-light flex gap-2 mt-[40px]'>Explore Courses</button>
//      <SiViaplay
//                    className="w-[30px] h-[30px]"
//                    style={{ fill: "currentColor" }}   // YE SAHI HAI
//                  />


//     </div>


//     {/* Right/bottom div */}
//     <div className='w-[720px] max-w-[90%] lg:h-[300px] md:min-h-[300px] flex items-center justify-center lg:gap-[60px] gap-[50px] flex-wrap mb-[50px] lg:-[0px]'>

//       <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
        
//         <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '>
//           <TbDeviceDesktopAnalytics  className='w-[60px] h-[60px] text-[#6d6c6c]' />
//          </div>
//          web Development
//          </div>



//          <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
        
//         <div className='w-[100px] h-[90px] bg-[#d9fbe0] rounded-lg flex items-center justify-center '>
//           <LiaUikit  className='w-[60px] h-[60px] text-[#6d6c6c]' />
//          </div>
//          UI/UX Designing
//          </div>

//          <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
        
//         <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '>
//           <TbDeviceDesktopAnalytics  className='w-[60px] h-[60px] text-[#6d6c6c]' />
//          </div>
//          web Development
//          </div>

//          <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
        
//         <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '>
//           <TbDeviceDesktopAnalytics  className='w-[60px] h-[60px] text-[#6d6c6c]' />
//          </div>
//          web Development
//          </div>

//          <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
        
//         <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '>
//           <TbDeviceDesktopAnalytics  className='w-[60px] h-[60px] text-[#6d6c6c]' />
//          </div>
//          web Development
//          </div>

//          <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
        
//         <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '>
//           <TbDeviceDesktopAnalytics  className='w-[60px] h-[60px] text-[#6d6c6c]' />
//          </div>
//          web Development
//          </div>

//          <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
        
//         <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '>
//           <TbDeviceDesktopAnalytics  className='w-[60px] h-[60px] text-[#6d6c6c]' />
//          </div>
//          web Development
//          </div>

//          <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
        
//         <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '>
//           <TbDeviceDesktopAnalytics  className='w-[60px] h-[60px] text-[#6d6c6c]' />
//          </div>
//          web Development
//          </div>



//     </div>

   
//     </div>
//   )
// }


import React from "react";
import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { FaLock, FaRobot, FaChartLine, FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const ExploreCourses = () => {
  const courses = [
    { icon: <TbDeviceDesktopAnalytics />, title: "Web Development", color: "#f2d9f9" },
    { icon: <LiaUikit />, title: "UI/UX Designing", color: "#d9fbe0" },
    { icon: <TbDeviceDesktopAnalytics />, title: "App Development", color: "#fbd9d9" },
    { icon: <FaLock />, title: "Ethical Hacking", color: "#ecd9fb" },
    { icon: <FaRobot />, title: "AI/ML", color: "#d9f5fb" },
    { icon: <FaChartLine />, title: "Data Science", color: "#fbeed9" },
    { icon: <TbDeviceDesktopAnalytics />, title: "Data Analytics", color: "#fbd9fb" },
    { icon: <FaTools />, title: "AI Tools", color: "#e2fbd9" },
  ];
    const navigate = useNavigate()
  return (
    <div className="w-[100vw] min-h-[60vh] flex flex-col lg:flex-row items-center justify-center gap-8 px-[30px] py-[50px]">

      {/* Left Section */}
      <div className="w-full lg:w-[35%] flex flex-col items-start justify-center gap-3 md:px-[40px] px-[20px]">
        <h2 className="text-[35px] font-semibold leading-tight">
          Explore <br /> Our Courses
        </h2>

        <p className="text-[16px] text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel iure
          explicabo laboriosam accusantium expedita laudantium facere magnam.
        </p>

        <button className="mt-[30px] flex items-center gap-2 px-[20px] py-[10px] bg-black text-white text-[16px] rounded-[8px] hover:bg-gray-800 transition-all duration-300 cursor-pointer"onClick={()=>navigate("/allcourses")}>
          Explore Courses
          <SiViaplay className="w-[20px] h-[20px]" />
        </button>
      </div>

      {/* Right Section (Grid) */}
      <div className="w-full lg:w-[60%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] justify-items-center">
        {courses.map((item, index) => (
          <div
            key={index}
            className="w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center items-center"
          >
            <div
              className="w-[90px] h-[90px] rounded-xl flex items-center justify-center"
              style={{ backgroundColor: item.color }}
            >
              <div className="text-[#6d6c6c] text-[40px]">{item.icon}</div>
            </div>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
