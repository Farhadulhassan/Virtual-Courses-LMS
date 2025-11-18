// import React, { useEffect, useState } from 'react'
// import {useSelector} from 'react-redux'




// function CardPage() {
//     const {courseData} = useSelector(state=>state.course)
//     const [PopularCourses,setPopularCourses] = useState([])

//     useEffect(()=>{
//       setPopularCourses(courseData?.slice(0,6));
//     },[courseData])




//   return (
//     <div className='relative flex items-center justify-center flex-col'>


//      <h1 className='md:text-[45px] text-[30px] font-semibold text-center mt-[30px] px-[20px]'>Our Popular Courses</h1>
//      <span className='lg:w-[50%] md:w-[80%] text-[15px] text-center mt-[30px] mb-[30px] px-[20px]'>Explore top-rated courses designed to boost your skills, enhance careers, and unlock opportunities in tech, AI, bussiness and beyond.</span>

//       <div className='w-[100%] flex items-center justify-center flex-wrap gap-[50px] lg:p-[30px] p-[10px] mb-[40px]'>

//       {
//         PopularCourses.map((course,index)=>(
//             <Card key={index} thumbnail={course.thumbnail} title={courseData.title} category={course.category} price={course.price} id={course._id} />
//         ))
//       }



//       </div>



//     </div>
//   )
// }

// export default CardPage







import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card'; // ⬅️ FIX 1: Card component import karna zaroori hai

function CardPage() {
    const { courseData } = useSelector(state => state.course);
    const [PopularCourses, setPopularCourses] = useState([]);

    useEffect(() => {
        // Ensure courseData is an array before slicing
        if (Array.isArray(courseData)) {
            setPopularCourses(courseData.slice(0, 6));
        }
    }, [courseData]);

    return (
        <div className='relative flex items-center justify-center flex-col'>
            
            <h1 className='md:text-[45px] text-[30px] font-semibold text-center mt-[30px] px-[20px]'>Our Popular Courses</h1>
            <span className='lg:w-[50%] md:w-[80%] text-[15px] text-center mt-[30px] mb-[30px] px-[20px]'>Explore top-rated courses designed to boost your skills, enhance careers, and unlock opportunities in tech, AI, bussiness and beyond.</span>

            <div className='w-[100%] flex items-center justify-center flex-wrap gap-[50px] lg:p-[30px] p-[10px] mb-[40px]'>
                
                {
                    PopularCourses.map((course, index) => (
                        <Card 
                            key={index} 
                            thumbnail={course.thumbnail} 
                            title={course.title} // ⬅️ FIX 2: title ko 'course' object se lena tha, 'courseData' se nahi
                            category={course.category} 
                            price={course.price} 
                            id={course._id} 
                        />
                    ))
                }

            </div>
        </div>
    );
}

export default CardPage;