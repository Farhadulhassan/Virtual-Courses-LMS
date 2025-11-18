// src/component/Logos.jsx
import React from 'react';
import { MdCastForEducation } from "react-icons/md";     // SAHI
import { SiOpenaccess } from "react-icons/si";         // SAHI
import { FaSackDollar } from "react-icons/fa6";        // SAHI
import { BiSupport } from "react-icons/bi";            // SAHI
import { FaUsers } from "react-icons/fa";              // SAHI

const Logos = () => {
  return (
    <div className='w-[100vw] min-h-[90px] flex items-center justify-center flex-wrap gap-4 md:gap-[50px] px-4'>

      {/* 1st div */}
      <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer'>
        <MdCastForEducation className='w-[35px] h-[35px]' style={{ fill: '#03394b' }} />
        <span className='text-[#03394b] font-medium'>20k+ Online Courses</span>
      </div>

      {/* 2nd div */}
      <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer'>
        <SiOpenaccess className='w-[35px] h-[35px]' style={{ fill: '#03394b' }} />
        <span className='text-[#03394b] font-medium'>Lifetime Access</span>
      </div>

      {/* 3rd div */}
      <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer'>
        <FaSackDollar className='w-[35px] h-[35px]' style={{ fill: '#03394b' }} />
        <span className='text-[#03394b] font-medium'>Value for money</span>
      </div>

      {/* 4th div */}
      <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer'>
        <BiSupport className='w-[35px] h-[35px]' style={{ fill: '#03394b' }} />
        <span className='text-[#03394b] font-medium'>Lifetime Support</span>
      </div>

      {/* 5th div */}
      <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer'>
        <FaUsers className='w-[35px] h-[35px]' style={{ fill: '#03394b' }} />
        <span className='text-[#03394b] font-medium'>Community Support</span>
      </div>

    </div>
  );
}

export default Logos;