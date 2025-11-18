// import React, { useEffect, useState } from 'react'
// import  Nav from '../component/Nav'
// import { FaArrowLeftLong } from 'react-icons/fa6';
// import { useNavigate } from 'react-router-dom';
// import ai from "../assets/SearchAi.png"
// import { useSelector } from 'react-redux';
// function AllCourses() {
//     const navigate = useNavigate()
//     const {courseData} = useSelector(state=>state.course)
//     const [Category,setCategory] = useState([])
//     const [filterCourses,setFilterCourses] = useState([])

//     const toggleCategory = (e)=>{
//         if(Category.includes(e.target.value)){
//             setCategory(prev => prev.filter(c => c !== e.target.value ))
//         }
//         else {
//             setCategory(prev => [...prev,e.target.value])
//         }
//     }


//     let applyFilter = ()=>{
//         const courseCopy = courseData?.slice()
//         if(Category.length > 0 ){
//             courseCopy = courseCopy.filter(c => Category.includes(c.Category))
//         }
//         setFilterCourses(courseCopy)
//     }


//     useEffect(()=>{
//       setFilterCourses(courseData)
//     },[courseData])

//     useEffect(()=>{
//         applyFilter()
//     },[Category])





//   return (
//     <div className='flex min-h-screen bg-gray-50'>
//         <Nav/>


//       {/* sideBar */}

//       <aside className='w-[260px] h-screen overflow-y-auto bg-black fixed top-0 left-0 p-6 py-[130px] border-r border-gray-200 shadow-md transition-transform duration-300 z-5'>
         

//            <h2 className='text-xl font-bold items-center justify-center gap-2 text-gray-50 mb-6'><FaArrowLeftLong className='text-white' onClick={()=>navigate("/")}/>Filter by Category</h2>

//           <form action="" onSubmit={(e)=>e.preventDefault()} className='space-y-4 text-sm bg-gray-600 border-white text-[white] border p-[20px] rounded-2xl'>


//           <button className='px-[10px] py-[10px] bg-black text-white rounded-[10px] text-[15px] font-light flex items-center justify-center gap-2 cursor-pointer'>Search with Ai <img src={ai} alt="ai" className='w-[30px] h-[30px] rounded-full' /></button>


//             <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md' value={'App Development'} onChange={toggleCategory} /> App Development 

//              <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md'value={'AI/ML'} onChange={toggleCategory} /> AI/ML</label>


//              <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md'value={'Ai Tools'} onChange={toggleCategory} /> Ai Tools
//             </label>


//              <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md'value={'Data science'} onChange={toggleCategory} /> Data Science


//              <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md'value={'Data Analysis'} onChange={toggleCategory} /> Data Analysis


//              <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md'value={'Ethical Hacking'} onChange={toggleCategory} /> Ethical Hacking


//              <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md' value={'UI/UX Designing'} onChange={toggleCategory} /> UI/UX Designing</label>


//              <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md'value={'Web Development'} onChange={toggleCategory} /> Web Development

             
//               <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//             <input type="checkbox" className='accent-black w-4 h-4 rounded-md'value={'Others'} onChange={toggleCategory} /> Others
//           </form>


//       </aside>

//         {/* main area */}

//         <main className='w-full transition-all duration-300 py-[130px] md:pl-[300px] flex items-start justify-center md:justify-start flex-wrap gap-6 px-[10px]'>
          

//          {
//             filterCourses?.map((course , index)=>(
//                 <Card key={index} thumbnail={course.thumbnail} title={course.title} Category={course.Category} price={course.price} id={course.id} />
//             ))
//          }

//         </main>



//     </div>
//   )
// }

// export default AllCourses















// import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { toast } from "react-toastify";
// import ClipLoader from "react-spinners/ClipLoader";
// import { useDispatch, useSelector } from "react-redux";
// import { setCreatorCourseData } from "../redux/courseSlice";

// function CreateCourses() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { creatorCourseData } = useSelector((state) => state.course);

//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [thumbnail, setThumbnail] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setThumbnail(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleCreateCourse = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) return toast.error("Title is required!");
//     if (!category) return toast.error("Category is required!");
//     if (!thumbnail) return toast.error("Thumbnail is required!");

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("category", category);
//     formData.append("thumbnail", thumbnail);

//     try {
//       const { data } = await axios.post(`${serverUrl}/api/course/create`, formData, {
//         withCredentials: true,
//       });

//       toast.success("Course Created Successfully!");

//       // ✅ Redux me direct update:
//       if (data?.course) {
//         dispatch(setCreatorCourseData([...creatorCourseData, data.course]));
//       }

//       navigate("/courses");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to create course");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
//       <div className="max-w-xl w-[600px] mx-auto p-6 bg-white shadow-md rounded-b-md mt-10 relative">
//         <FaArrowLeft
//           className="top-[8%] absolute left-[5%] w-[22px] h-[22px] cursor-pointer text-gray-700 hover:text-black"
//           onClick={() => navigate("/courses")}
//         />
//         <h2 className="text-2xl font-semibold mb-6 text-center">Create Course</h2>

//         <form className="space-y-5" onSubmit={handleCreateCourse}>
//           {/* Thumbnail */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Thumbnail
//             </label>
//             <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
//               {preview ? (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="w-full h-40 object-cover rounded-md mb-2"
//                 />
//               ) : (
//                 <p className="text-gray-500">Click to upload thumbnail</p>
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImage}
//                 className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white"
//                 required
//               />
//             </div>
//           </div>

//           {/* Title */}
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//               Course Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               placeholder="Enter your Course title"
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label htmlFor="cat" className="block text-sm font-medium text-gray-700 mb-1">
//               Course Category
//             </label>
//             <select
//               id="cat"
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             >
//               <option value="">Select Category</option>
//               <option value="App Development">App Development</option>
//               <option value="AI/ML">AI/ML</option>
//               <option value="AI Tools">AI Tools</option> {/* FIX: Changed 'AI Tools' to 'AI Tools' (was correct, ensuring consistency) */}
//               <option value="Data Science">Data Science</option> {/* FIX: Changed 'Data science' to 'Data Science' (Capital S) */}
//               <option value="Data Analysis">Data Analysis</option>
//               <option value="Ethical Hacking">Ethical Hacking</option>
//               <option value="UI/UX Designing">UI/UX Designing</option> {/* FIX: Spelling corrected from 'Desgining' to 'Designing' */}
//               <option value="Web Development">Web Development</option>
//               <option value="Others">Others</option>
//             </select>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[black] text-[white] py-2 px-4 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
//           >
//             {loading ? <ClipLoader size={30} color="white" /> : "Create"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateCourses;













// import React, { useEffect, useState } from 'react'
// import Nav from '../component/Nav'; 
// import Card from '../component/Card'; 

// import { FaArrowLeftLong } from 'react-icons/fa6';
// import { useNavigate } from 'react-router-dom';
// import ai from "../assets/SearchAi.png"
// import { useSelector } from 'react-redux';

// function AllCourses() {
//     const navigate = useNavigate()
//     const {courseData} = useSelector(state=>state.course)
//     const [Category,setCategory] = useState([])
//     const [filterCourses,setFilterCourses] = useState([])
//     const [isSidebarVisible,setSidebarVisible] = useSelector(false)


//     const toggleCategory = (e)=>{
//         if(Category.includes(e.target.value)){
//             setCategory(prev => prev.filter(c => c !== e.target.value ))
//         }
//         else {
//             setCategory(prev => [...prev,e.target.value])
//         }
//     }


//     const applyFilter = () => { 
//         let courseCopy = courseData; 
//         
//         if (Category.length > 0 && Array.isArray(courseData)) {
//             // Filtering logic uses lowercase 'category'
//             courseCopy = courseData.filter(c => 
//                 Category.includes(c.category) 
//             )
//         }
//         setFilterCourses(courseCopy || []); 
//     }


//     useEffect(()=>{
//       setFilterCourses(courseData || [])
//     },[courseData])

//     useEffect(()=>{
//         applyFilter()
//     },[Category])


//   return (
//     <div className='flex min-h-screen bg-gray-50'>
//         <Nav/>

//     <button className='fixed top-20 left-4 z-50 bg-white text-black px-3 py-1 rounded md:hidden border-2 border-black'onClick={()=>setSidebarVisible(prev=>!prev)}>
//      {isSidebarVisible ? 'hide' : 'show'} Filter
//     </button>


//       {/* sideBar */}

//       <aside className={`w-[260px] h-screen overflow-y-auto bg-black fixed top-0 left-0 p-6 py-[130px] border-r border-gray-200 shadow-md transition-transform duration-300 z-5 ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"} md:block md:translate-x-0`}>
//          

//            <h2 className='text-xl font-bold items-center justify-center gap-2 text-gray-50 mb-6'>
//                 {/* 🎯 FIX: Navigation back to Home Page ("/") */}
//                 <FaArrowLeftLong className='text-white' onClick={()=>navigate("/")}/> 
//                 Filter by Category
//             </h2>

//           <form action="" onSubmit={(e)=>e.preventDefault()} className='space-y-4 text-sm bg-gray-600 border-white text-[white] border p-[20px] rounded-2xl'>


//           <button className='px-[10px] py-[10px] bg-black text-white rounded-[10px] text-[15px] font-light flex items-center justify-center gap-2 cursor-pointer'>Search with Ai <img src={ai} alt="ai" className='w-[30px] h-[30px] rounded-full' /></button>


//             {/* Categories (Values are synchronized with CreateCourses.jsx) */}
//             <div className='space-y-4'>
//                 <label htmlFor="appDev" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="appDev" className='accent-black w-4 h-4 rounded-md' value={'App Development'} onChange={toggleCategory} /> App Development
//                 </label>

//                 <label htmlFor="aiMl" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="aiMl" className='accent-black w-4 h-4 rounded-md' value={'AI/ML'} onChange={toggleCategory} /> AI/ML
//                 </label>

//                 <label htmlFor="aiTools" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="aiTools" className='accent-black w-4 h-4 rounded-md' value={'AI Tools'} onChange={toggleCategory} /> AI Tools
//                 </label>

//                 <label htmlFor="dataScience" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="dataScience" className='accent-black w-4 h-4 rounded-md' value={'Data Science'} onChange={toggleCategory} /> Data Science
//                 </label>

//                 <label htmlFor="dataAnalysis" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="dataAnalysis" className='accent-black w-4 h-4 rounded-md' value={'Data Analysis'} onChange={toggleCategory} /> Data Analysis
//                 </label>

//                 <label htmlFor="ethicalHacking" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="ethicalHacking" className='accent-black w-4 h-4 rounded-md' value={'Ethical Hacking'} onChange={toggleCategory} /> Ethical Hacking
//                 </label>

//                 <label htmlFor="uiUx" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="uiUx" className='accent-black w-4 h-4 rounded-md' value={'UI/UX Designing'} onChange={toggleCategory} /> UI/UX Designing
//                 </label>

//                 <label htmlFor="webDev" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="webDev" className='accent-black w-4 h-4 rounded-md' value={'Web Development'} onChange={toggleCategory} /> Web Development
//                 </label>

//                 <label htmlFor="others" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
//                     <input type="checkbox" id="others" className='accent-black w-4 h-4 rounded-md' value={'Others'} onChange={toggleCategory} /> Others
//                 </label>
//             </div>
//           </form>


//       </aside>

//         {/* main area */}

//         <main className='w-full transition-all duration-300 py-[130px] md:pl-[300px] flex items-start justify-center md:justify-start flex-wrap gap-6 px-[10px]'>
//           

//          {
//             filterCourses?.map((course , index)=>(
//                 <Card 
//                     key={index} 
//                     thumbnail={course.thumbnail} 
//                     title={course.title} 
//                     category={course.category} 
//                     price={course.price} 
//                     id={course._id} 
//                 />
//             ))
//          }

//         </main>



//     </div>
//   )
// }

// export default AllCourses















import React, { useEffect, useState } from 'react'
import Nav from '../component/Nav'; 
import Card from '../component/Card'; 

// ✅ FIX: FaTimes ko FaXmark se replace kiya gaya hai, kyunki yeh Font Awesome 6 (fa6) ka naya naam hai
import { FaArrowLeftLong, FaXmark } from 'react-icons/fa6'; 
import { useNavigate } from 'react-router-dom';
import ai from "../assets/SearchAi.png"
import { useSelector } from 'react-redux';

function AllCourses() {
    const navigate = useNavigate()
    const {courseData} = useSelector(state=>state.course)
    const [Category,setCategory] = useState([])
    const [filterCourses,setFilterCourses] = useState([])
    // Local state for sidebar visibility
    const [isSidebarVisible,setSidebarVisible] = useState(false)


    const toggleCategory = (e)=>{
        if(Category.includes(e.target.value)){
            setCategory(prev => prev.filter(c => c !== e.target.value ))
        }
        else {
            setCategory(prev => [...prev,e.target.value])
        }
    }


    const applyFilter = () => { 
        let courseCopy = courseData; 
        
        if (Category.length > 0 && Array.isArray(courseData)) {
            // Filtering logic uses lowercase 'category'
            courseCopy = courseData.filter(c => 
                Category.includes(c.category) 
            )
        }
        setFilterCourses(courseCopy || []); 
        // Filter apply hone ke baad mobile par sidebar ko chhupa dein
        if (window.innerWidth < 768) { // md breakpoint (768px) se chote devices ke liye
          setSidebarVisible(false);
        }
    }


    useEffect(()=>{
      setFilterCourses(courseData || [])
    },[courseData])

    useEffect(()=>{
        applyFilter()
    },[Category])


  return (
    <div className='flex min-h-screen bg-gray-50'>
        <Nav/>
        
    {/* Filter Toggle Button (Mobile Only) */}
    <button 
      className='fixed top-20 left-4 z-40 bg-black text-white px-4 py-2 rounded-lg md:hidden shadow-lg hover:bg-gray-700 transition'
      onClick={()=>setSidebarVisible(prev=>!prev)}
    >
     {isSidebarVisible ? 'Hide' : 'Show'} Filter
    </button>


      {/* sideBar */}
      <aside 
        className={`w-[260px] h-screen overflow-y-auto bg-black fixed top-0 left-0 p-6 py-[130px] border-r border-gray-200 shadow-md transition-transform duration-300 transform z-50
        ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:block`}
      >
          
         {/* Cross Button / Close Button (Mobile Only, when sidebar is visible) */}
          {isSidebarVisible && (
            <button 
              className='absolute top-20 right-4 p-2 md:hidden text-white hover:text-red-500 transition'
              onClick={() => setSidebarVisible(false)}
            >
              <FaXmark className='w-6 h-6'/> {/* ✅ FIX: FaTimes ki jagah FaXmark use hua */}
            </button>
          )}

           <h2 className='text-xl font-bold items-center justify-start gap-2 text-gray-50 mb-6 flex'>
                {/* Navigation back to Home Page ("/") */}
                <FaArrowLeftLong className='text-white mr-3 cursor-pointer' onClick={()=>navigate("/")}/> 
                Filter by Category
            </h2>

          <form action="" onSubmit={(e)=>e.preventDefault()} className='space-y-4 text-sm bg-gray-900 border-white text-[white] border border-opacity-20 p-[20px] rounded-2xl'>


          <button className='px-[10px] py-[10px] bg-black text-white rounded-[10px] text-[15px] font-light flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-700 transition'>
            Search with Ai 
            <img src={ai} alt="ai" className='w-[30px] h-[30px] rounded-full' />
          </button>


            {/* Categories (Values are synchronized with CreateCourses.jsx) */}
            <div className='space-y-4'>
                <label htmlFor="appDev" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="appDev" className='accent-white w-4 h-4 rounded-md' value={'App Development'} onChange={toggleCategory} /> App Development
                </label>

                <label htmlFor="aiMl" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="aiMl" className='accent-white w-4 h-4 rounded-md' value={'AI/ML'} onChange={toggleCategory} /> AI/ML
                </label>

                <label htmlFor="aiTools" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="aiTools" className='accent-white w-4 h-4 rounded-md' value={'AI Tools'} onChange={toggleCategory} /> AI Tools
                </label>

                <label htmlFor="dataScience" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="dataScience" className='accent-white w-4 h-4 rounded-md' value={'Data Science'} onChange={toggleCategory} /> Data Science
                </label>

                <label htmlFor="dataAnalysis" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="dataAnalysis" className='accent-white w-4 h-4 rounded-md' value={'Data Analysis'} onChange={toggleCategory} /> Data Analysis
                </label>

                <label htmlFor="ethicalHacking" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="ethicalHacking" className='accent-white w-4 h-4 rounded-md' value={'Ethical Hacking'} onChange={toggleCategory} /> Ethical Hacking
                </label>

                <label htmlFor="uiUx" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="uiUx" className='accent-white w-4 h-4 rounded-md' value={'UI/UX Designing'} onChange={toggleCategory} /> UI/UX Designing
                </label>

                <label htmlFor="webDev" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="webDev" className='accent-white w-4 h-4 rounded-md' value={'Web Development'} onChange={toggleCategory} /> Web Development
                </label>

                <label htmlFor="others" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
                    <input type="checkbox" id="others" className='accent-white w-4 h-4 rounded-md' value={'Others'} onChange={toggleCategory} /> Others
                </label>
            </div>
          </form>


      </aside>

        {/* main area */}

        <main className='w-full transition-all duration-300 py-[130px] px-4 md:pl-[300px] flex items-start justify-center md:justify-start flex-wrap gap-6'>
          

         {
            filterCourses?.map((course , index)=>(
                <Card 
                    key={index} 
                    thumbnail={course.thumbnail} 
                    title={course.title} 
                    category={course.category} 
                    price={course.price} 
                    id={course._id} 
                />
            ))
         }
         {filterCourses?.length === 0 && (
            <p className='text-xl text-gray-500 w-full text-center'>No courses found matching your criteria.</p>
          )}

        </main>
    </div>
  )
}

export default AllCourses