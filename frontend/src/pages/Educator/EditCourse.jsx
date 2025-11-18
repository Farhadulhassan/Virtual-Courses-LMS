// import React, { useEffect, useRef, useState } from 'react'
// import { FaArrowLeft } from "react-icons/fa6";
// import {useNavigate, useParams} from 'react-router-dom';
// import img from "../../assets/empty.jpg";
// import { FaEdit } from "react-icons/fa";

// function EditCourse() {
//   const navigate = useNavigate()
//   const {courseId} = useParams()
//   const thumb = useRef()
//   const [isPublished , setIsPublished] = useState(false)
//   const [selectCourse,setSelectCourse] = useState(null)
  
//   const [title,setTitle] = useState("")
//   const [subtitle,setSubTitle] = useState("")
//   const [description,setDescription] = useState("")
//   const [category,setCategory] = useState("")
//   const [level,setLevel] = useState("")
//   const [price,setPrice] = useState("")
//   const [frontendImage,setFrontendImage] = useState(img)
//   const [backendImage,setBackendImage] = useState(null)
//   const [loading , setLoading] = useState(false)

//   const handleThumbnail = (e) =>{
//     const file = e.target.files[0]
//     setBackendImage(file)
//     setFrontendImage(URL.createObjectURL(file))
//   }


//   const getCourseById = async () => {
//     try {
//       const result = await axios.get(serverUrl + `/api/course/getcourse/${courseId} , {withCredentials:true}`)
//       setSelectCourse(result.data)
//       console.log(result.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(()=>{
//     setLoading(true)
//     if(selectCourse)
//     {
//       setTitle(selectCourse.title || "")
//       setSubTitle(selectCourse.subtitle || "")
//       setDescription(selectCourse.description || "")
//       setCategory(selectCourse.category || "")
//       setLevel(selectCourse.level || "")
//       setPrice(selectCourse.price || "")
//       setFrontendImage(selectCourse.thumbnail || img)
//       setIsPublished(selectCourse?.isPublished)
//     }



//   },[selectCourse])
  
//   useEffect(()=>{
//     getCourseById()
//   },[])


//   const handleEditCourse = async () => {
//     const formData = new FormData()
//     formData.append("title" , title)
//     formData.append("subTitle" , subtitle)
//     formData.append("description" , description )
//     formData.append("category" , category)
//     formData.append("level" , level)
//     formData.append("price" , price)
//     formData.append("thumbnail" , backendImage)
//     formData.append("isPublished" , isPublished)

//     try {
//       const result = await axios.post(serverUrl + `/api/course/editcourse/${courseId}`, formData, {witCredentials:true})
//       console.log(result.data)
//       setLoading(false)
//       navigate("/courses")
//       toast.success("Course Updated")
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//       toast.error(error.response.data.message)
//     }
//   }
  
//   return (
//     <div className='max-w-5xl mx-auto p-6 mt-10 bg-white rounded-b-lg shadow-md'>


//      {/* // top bar */}
//      <div className='flex items-center justify-center gap-[20px] md:justify-between flex-col md:flex-row mb-6 relative'>
       
//        <FaArrowLeft className='top-[-205] md:top-[20%] absolute left[0] md:left[2%] w-[22px] h-[22px] cursor-pointer' onClick={()=navigate("/courses")}/>

//         <h2 className='text-2xl font-semibold md:pl-[60px]'>Add Detail Information regarding the Course</h2>

//         <div className='space-x-2 space-y-2'>
//           <button className='bg-black text-white px-4 py-2 rounded-md'>Go to Lecture page</button>
//         </div>




//      </div>


//      {/* form details */}
//      <div className='bg-gray-50 p-6 rounded-md'>

//       <h2 className='text-lg font-medium mb-4'>Basic Course Information</h2>

//        <div>
//        {!isPublished ? <button className='bg-gray-100 text-gray-600 px-4 py-2 rounded-md border-1' onClick={()=>setIsPublished(prev=>!prev)}>Click to Publish</button>: <button className='bg-gray-100 text-gray-600 px-4 py-2 rounded-md border-1'>Click to UnPublish</button>}
//         <button className='bg-red-600 text-w px-4 py-2 rounded-md' onClick={()=>setIsPublished(prev=>!prev)}>Remove Course</button>
//        </div>

//        <form className='space-y-6' onSubmit={(e)=>e.preventDefault}>

//         <div> 
//         <label htmlFor="title" className='block text-sm font-medium text-gray-700 mb-1'>Title</label>

//         <input type="text" id='title' className='w-full border px-4 py-2 rounded-md' placeholder='Course Title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
//         </div>
       
          
//         <div>
//         <label htmlFor="subtitle" className='block text-sm font-medium text-gray-700 mb-1'>Subtitle</label>

//         <input type="text" id='subtitle' className='w-full border px-4 py-2 rounded-md' placeholder='Course Subtitle' onChange={(e)=>setSubTitle(e.target.value)} value={subtitle}/>
//         </div>

//         <div>
//         <label htmlFor="des" className='block text-sm font-medium text-gray-700 mb-1'>Description</label>

//         <textarea type="text" id='des' className='w-full border px-4 py-2 rounded-md h-24 resize-none' placeholder='Course Description' onChange={(e)=>setDescription(e.target.value)} value={description}/></textarea>
//         </div>

//         <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
//           {/* for category */}
//           <div className='flex-1'>
//             <label htmlFor="" className='block txet-sm font-medium text-gray-700 mb-1'>Course Category</label>

//             <select name="" id="" className='w-full border px-4 py-2 rounded-md bg-white' onChange={(e)=>setCategory(e.target.value)} value={category}>

              
//               <option value="">Select Category</option>
//               <option value="App Development">App Development</option>
//               <option value="AI/ML">AI/ML</option>
//               <option value="Data Science">Data Science</option>
//               <option value="Ethical Hacking">Ethical Hacking</option>
//               <option value="UI UX Designing">UI UX Designing</option>
//               <option value="Web Development">Web Development</option>
//               <option value="Data Analytics">Data Analytics</option>
//               <option value="AI Tools">AI Tools</option>
//               <option value="Others">Others</option>
              
//             </select>
             
//           </div>

//           {/* for Level */}
//           <div className='flex-1'>
//             <label htmlFor="" className='block txet-sm font-medium text-gray-700 mb-1'>Course Level</label>

//             <select name="" id="" className='w-full border px-4 py-2 rounded-md bg-white' onChange={(e)=>setLevel(e.target.value)} value={level}>

              
//               <option value="">Select Level</option>
//               <option value="Bignner">Bignner</option>
//               <option value="Intermediate">Intermediate</option>
//               <option value="Advance">Advance</option>
              
              
//             </select>
             
//           </div>
//           {/* for price */}
//            <div className='flex-1'>
//             <label htmlFor="price" className='block txet-sm font-medium text-gray-700 mb-1'>Course Price (INR)</label>
//             <input type="number" id="price" className='w-full border px-4 py-2 rounded-md' placeholder='₹' onChange={(e)=>setPrice(e.target.value)} value={price}/>
     
//           </div>

//         </div>
//          <div>
//             <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1'>Course Thumbnail</label>
//             <input type="file" hidden ref={thumb} accept='image/*' onChange={handleThumbnail} />
//           </div>

//         <div className='relative w-[300px] h-[170px]'>
//              <img src={frontendImage} alt="" className='w-[100%] h-[100%] border-1 border-black rounded-[5px]' onClick={()=>thumb.current.Click} />
//              <FaEdit className='w-[20px] h-[20px] absolute top-2 right-2'onClick={()=>thumb.current.Click}/>
//           </div>

//           <div className='flex items-center justify-start gap-[15px]'>
//             <button className='bg-[#e9e8e8] hover:bg-red-200 text-black border-1 border-black cursor-pointer px-2 rounded-md' onClick={()=>navigate("/courses")}>Cancel</button>
//             <button className='bg-black text-white px-7 py-2 rounded-md hover:bg-gray-500 cursor-pointer'onClick={handleEditCourse}>{loading ? <ClipLoader size={30} color="white"/>:"Save"}</button>
//           </div>



//        </form>

//      </div>





//     </div>
//   )
// }

// export default EditCourse




// src/pages/Educator/EditCourse.jsx
// import React, { useEffect, useRef, useState } from 'react';
// import { FaArrowLeft, FaPen } from "react-icons/fa6";
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { serverUrl } from "../../App";
// import img from "../../assets/empty.jpg";
// import { toast } from "react-toastify";
// import ClipLoader from "react-spinners/ClipLoader";
// const [loading1,setLoading1] = useState(false)




// function EditCourse() {
//   const navigate = useNavigate();
//   const { courseId } = useParams();
//   const thumb = useRef();
//   const [isPublished, setIsPublished] = useState(false);
//   const [selectCourse, setSelectCourse] = useState(null);

//   const [title, setTitle] = useState("");
//   const [subtitle, setSubTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [level, setLevel] = useState("");
//   const [price, setPrice] = useState("");
//   const [frontendImage, setFrontendImage] = useState(img);
//   const [backendImage, setBackendImage] = useState(null);
//   const [loading, setLoading] = useState(true); // ← TRUE RAKHO

//   const handleThumbnail = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setBackendImage(file);
//       setFrontendImage(URL.createObjectObjectURL(file));
//     }
//   };

//   const getCourseById = async () => {
//     if (!courseId || !serverUrl) {
//       toast.error("Invalid configuration");
//       setLoading(false);
//       return;
//     }

//     try {
//       const result = await axios.get(`${serverUrl}/api/course/getcourse/${courseId}`, {
//         withCredentials: true
//       });
//       console.log("API Response:", result.data);
//       setSelectCourse(result.data);
//     } catch (error) {
//       console.error("API Error:", error);
//       toast.error("Failed to load course");
//       setSelectCourse(null); // ← YE DAALO
//     } finally {
//       setLoading(false); // ← YE DAALO
//     }
//   };

//   useEffect(() => {
//     getCourseById();
//   }, [courseId]);

//   useEffect(() => {
//     if (selectCourse) {
//       setTitle(selectCourse.title || "");
//       setSubTitle(selectCourse.subTitle || selectCourse.subtitle || "");
//       setDescription(selectCourse.description || "");
//       setCategory(selectCourse.category || "");
//       setLevel(selectCourse.level || "");
//       setPrice(selectCourse.price || "");
//       setFrontendImage(selectCourse.thumbnail || img);
//       setIsPublished(selectCourse.isPublished || false);
//     }
//   }, [selectCourse]);

//   const handleEditCourse = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("subTitle", subtitle);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("level", level);
//     formData.append("price", price);
//     if (backendImage) formData.append("thumbnail", backendImage);
//     formData.append("isPublished", isPublished);

//     try {
//       await axios.put(`${serverUrl}/api/course/editcourse/${courseId}`, formData, {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       toast.success("Course Updated Successfully!");
//       navigate("/courses");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gray-100">
//         <ClipLoader size={50} color="#000" />
//       </div>
//     );
//   }

//   if (!selectCourse) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gray-100">
//         <p className="text-red-600">Course not found</p>
//       </div>
//     );
//   }


//  const handleRemoveCourse = async () => {
//   try {
//     setLoading1(true)
//     const result = await axios.delete(serverUrl+`/api/course/remove${courseId},{withCredentials:true}`)
//     console.log(result.data)
//     setLoading(false)
//     toast.success("Course Removed")
//     navigate("/courses")
//   } catch (error) {
//     console.log(error)
//     setLoading(false)
//     toast.error(error.response.data.message)
//   }
//  }





//   return (
//     <div className='max-w-5xl mx-auto p-6 mt-10 bg-white rounded-b-lg shadow-md'>
//       {/* Top Bar */}
//       <div className='flex items-center justify-center gap-[20px] md:justify-between flex-col md:flex-row mb-6 relative'>
//         <FaArrowLeft
//           className='top-[-50px] md:top-[20px] left-0 md:left-[20px] absolute w-[22px] h-[22px] cursor-pointer text-gray-700 hover:text-black'
//           onClick={() => navigate("/courses")}
//         />
//         <h2 className='text-2xl font-semibold md:pl-[60px]'>Add Detail Information regarding the Course</h2>
//         <button className='bg-black text-white px-4 py-2 rounded-md'>Go to Lecture page</button>
//       </div>

//       {/* Form */}
//       <div className='bg-gray-50 p-6 rounded-md'>
//         <h2 className='text-lg font-medium mb-4'>Basic Course Information</h2>

//         <div className='flex gap-3 mb-4'>
//           <button
//             className={`px-4 py-2 rounded-md border ${isPublished ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}
//             onClick={() => setIsPublished(prev => !prev)}
//           >
//             {isPublished ? "Click to Unpublish" : "Click to Publish"}
//           </button>
//           <button className='bg-red-600 text-white px-4 py-2 rounded-md'onClick={{handleRemoveCourse}}>Remove Course</button>
//         </div>

//         <form className='space-y-6' onSubmit={handleEditCourse}>
//           {/* Title */}
//           <div>
//             <label htmlFor="title" className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
//             <input
//               type="text"
//               id='title'
//               className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
//               placeholder='Course Title'
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           {/* Subtitle */}
//           <div>
//             <label htmlFor="subtitle" className='block text-sm font-medium text-gray-700 mb-1'>Subtitle</label>
//             <input
//               type="text"
//               id='subtitle'
//               className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
//               placeholder='Course Subtitle'
//               value={subtitle}
//               onChange={(e) => setSubTitle(e.target.value)}
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label htmlFor="des" className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
//             <textarea
//               id='des'
//               className='w-full border px-4 py-2 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black'
//               placeholder='Course Description'
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           {/* Category, Level, Price */}
//           <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
//             <div className='flex-1'>
//               <label className='block text-sm font-medium text-gray-700 mb-1'>Course Category</label>
//               <select
//                 className='w-full border px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black'
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">Select Category</option>
//                 <option value="App Development">App Development</option>
//                 <option value="AI/ML">AI/ML</option>
//                 <option value="Data Science">Data Science</option>
//                 <option value="Ethical Hacking">Ethical Hacking</option>
//                 <option value="UI UX Designing">UI UX Designing</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="Data Analytics">Data Analytics</option>
//                 <option value="AI Tools">AI Tools</option>
//                 <option value="Others">Others</option>
//               </select>
//             </div>

//             <div className='flex-1'>
//               <label className='block text-sm font-medium text-gray-700 mb-1'>Course Level</label>
//               <select
//                 className='w-full border px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black'
//                 value={level}
//                 onChange={(e) => setLevel(e.target.value)}
//               >
//                 <option value="">Select Level</option>
//                 <option value="Beginner">Beginner</option>
//                 <option value="Intermediate">Intermediate</option>
//                 <option value="Advanced">Advanced</option>
//               </select>
//             </div>

//             <div className='flex-1'>
//               <label htmlFor="price" className='block text-sm font-medium text-gray-700 mb-1'>Course Price (INR)</label>
//               <input
//                 type="number"
//                 id="price"
//                 className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
//                 placeholder='Rs.'
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Thumbnail */}
//           <div>
//             <label className='block text-sm font-medium text-gray-700 mb-1'>Course Thumbnail</label>
//             <input type="file" hidden ref={thumb} accept='image/*' onChange={handleThumbnail} />
//           </div>

//           <div className='relative w-[300px] h-[170px] cursor-pointer' onClick={() => thumb.current?.click()}>
//             <img src={frontendImage} alt="Thumbnail" className='w-full h-full border border-black rounded-[5px] object-cover' />
//             <FaPen className='w-[20px] h-[20px] absolute top-2 right-2 text-white bg-black p-1 rounded' />
//           </div>

//           {/* Buttons */}
//           <div className='flex items-center justify-start gap-[15px] mt-6'>
//             <button type="button" className='bg-[#e9e8e8] hover:bg-red-200 text-black border border-black px-4 py-2 rounded-md' onClick={() => navigate("/courses")}>
//               Cancel
//             </button>
//             <button type="submit" disabled={loading} className='bg-black text-white px-7 py-2 rounded-md hover:bg-gray-700 disabled:opacity-50'>
//               {loading ? <ClipLoader size={25} color="white" /> : "Save"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditCourse;

















// // src/pages/Educator/EditCourse.jsx

// import React, { useEffect, useRef, useState } from 'react';
// import { FaArrowLeft, FaPen } from "react-icons/fa6";
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { serverUrl } from "../../App";
// import img from "../../assets/empty.jpg";
// import { toast } from "react-toastify";
// import ClipLoader from "react-spinners/ClipLoader";

// function EditCourse() {

//   const navigate = useNavigate();
//   const { courseId } = useParams();
//   const thumb = useRef();

//   const [isPublished, setIsPublished] = useState(false);
//   const [selectCourse, setSelectCourse] = useState(null);

//   const [title, setTitle] = useState("");
//   const [subtitle, setSubTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [level, setLevel] = useState("");
//   const [price, setPrice] = useState("");

//   const [frontendImage, setFrontendImage] = useState(img);
//   const [backendImage, setBackendImage] = useState(null);

//   const [loading, setLoading] = useState(true);
//   const [loading1, setLoading1] = useState(false); // DELETE BUTTON LOADING

//   // Handle Thumbnail
//   const handleThumbnail = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setBackendImage(file);
//       setFrontendImage(URL.createObjectURL(file));
//     }
//   };

//   // Fetch Course Details
//   const getCourseById = async () => {
//     try {
//       const result = await axios.get(`${serverUrl}/api/course/getcourse/${courseId}`, {
//         withCredentials: true
//       });

//       setSelectCourse(result.data);
//     } catch (error) {
//       toast.error("Failed to load course");
//       setSelectCourse(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCourseById();
//   }, [courseId]);


//   // Set fields when course data arrives
//   useEffect(() => {
//     if (selectCourse) {
//       setTitle(selectCourse.title || "");
//       setSubTitle(selectCourse.subTitle || selectCourse.subtitle || "");
//       setDescription(selectCourse.description || "");
//       setCategory(selectCourse.category || "");
//       setLevel(selectCourse.level || "");
//       setPrice(selectCourse.price || "");
//       setFrontendImage(selectCourse.thumbnail || img);
//       setIsPublished(selectCourse.isPublished || false);
//     }
//   }, [selectCourse]);


//   // Save Edited Course
//   const handleEditCourse = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("subTitle", subtitle);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("level", level);
//     formData.append("price", price);

//     if (backendImage) {
//       formData.append("thumbnail", backendImage);
//     }

//     formData.append("isPublished", isPublished);

//     try {
//       await axios.put(`${serverUrl}/api/course/editcourse/${courseId}`, formData, {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       toast.success("Course Updated Successfully!");
//       navigate("/courses");

//     } catch (error) {
//       toast.error(error.response?.data?.message || "Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };


//   // 🗑 DELETE COURSE
//   const handleRemoveCourse = async () => {
//     try {
//       setLoading1(true);

//       const result = await axios.delete(
//         `${serverUrl}/api/course/remove/${courseId}`,
//         { withCredentials: true }
//       );

//       console.log(result.data);
//       toast.success("Course Removed Successfully");
//       navigate("/courses");

//     } catch (error) {
//       toast.error(error.response?.data?.message || "Delete failed");
//     } finally {
//       setLoading1(false);
//     }
//   };


//   // Loader while fetching
//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gray-100">
//         <ClipLoader size={50} />
//       </div>
//     );
//   }

//   if (!selectCourse) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gray-100">
//         <p className="text-red-600">Course not found</p>
//       </div>
//     );
//   }


//   // MAIN UI
//   return (
//     <div className='max-w-5xl mx-auto p-6 mt-10 bg-white rounded-b-lg shadow-md'>

//       {/* TOP BAR */}
//       <div className='flex items-center justify-center gap-4 md:justify-between flex-col md:flex-row mb-6 relative'>
//         <FaArrowLeft
//           className='top-[-50px] md:top-[20px] left-0 md:left-[20px] absolute w-[22px] h-[22px] cursor-pointer text-gray-700 hover:text-black'
//           onClick={() => navigate("/courses")}
//         />
//         <h2 className='text-2xl font-semibold md:pl-[60px]'>Edit Course Information</h2>
//         <button className='bg-black text-white px-4 py-2 rounded-md'>
//           Go to Lecture page
//         </button>
//       </div>


//       {/* FORM START */}
//       <div className='bg-gray-50 p-6 rounded-md'>
//         <h2 className='text-lg font-medium mb-4'>Basic Course Information</h2>

//         {/* PUBLISH + DELETE BUTTONS */}
//         <div className='flex gap-3 mb-4'>
//           <button
//             className={`px-4 py-2 rounded-md border ${isPublished ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}
//             onClick={() => setIsPublished(prev => !prev)}
//           >
//             {isPublished ? "Click to Unpublish" : "Click to Publish"}
//           </button>

//           <button
//             className='bg-red-600 text-white px-4 py-2 rounded-md'
//             onClick={handleRemoveCourse}
//           >
//             {loading1 ? "Removing..." : "Remove Course"}
//           </button>
//         </div>


//         <form className='space-y-6' onSubmit={handleEditCourse}>

//           {/* TITLE */}
//           <div>
//             <label className='block text-sm font-medium mb-1'>Title</label>
//             <input
//               type="text"
//               className='w-full border px-4 py-2 rounded-md'
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           {/* SUBTITLE */}
//           <div>
//             <label className='block text-sm font-medium mb-1'>Subtitle</label>
//             <input
//               type="text"
//               className='w-full border px-4 py-2 rounded-md'
//               value={subtitle}
//               onChange={(e) => setSubTitle(e.target.value)}
//             />
//           </div>

//           {/* DESCRIPTION */}
//           <div>
//             <label className='block text-sm font-medium mb-1'>Description</label>
//             <textarea
//               className='w-full border px-4 py-2 rounded-md h-24'
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           {/* CATEGORY LEVEL PRICE */}
//           <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
//             <div className='flex-1'>
//               <label className='block text-sm font-medium mb-1'>Category</label>
//               <select
//                 className='w-full border px-4 py-2 rounded-md bg-white'
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">Select Category</option>
//                 <option value="App Development">App Development</option>
//                 <option value="AI/ML">AI/ML</option>
//                 <option value="Data Science">Data Science</option>
//                 <option value="Ethical Hacking">Ethical Hacking</option>
//                 <option value="UI UX Designing">UI UX Designing</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="Data Analytics">Data Analytics</option>
//                 <option value="AI Tools">AI Tools</option>
//                 <option value="Others">Others</option>
//               </select>
//             </div>

//             <div className='flex-1'>
//               <label className='block text-sm font-medium mb-1'>Level</label>
//               <select
//                 className='w-full border px-4 py-2 rounded-md'
//                 value={level}
//                 onChange={(e) => setLevel(e.target.value)}
//               >
//                 <option value="">Select Level</option>
//                 <option value="Beginner">Beginner</option>
//                 <option value="Intermediate">Intermediate</option>
//                 <option value="Advanced">Advanced</option>
//               </select>
//             </div>

//             <div className='flex-1'>
//               <label className='block text-sm font-medium mb-1'>Price (INR)</label>
//               <input
//                 type="number"
//                 className='w-full border px-4 py-2 rounded-md'
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* THUMBNAIL */}
//           <div>
//             <label className='block text-sm font-medium mb-1'>Course Thumbnail</label>
//             <input type="file" hidden ref={thumb} accept="image/*" onChange={handleThumbnail} />
//           </div>

//           <div className='relative w-[300px] h-[170px] cursor-pointer' onClick={() => thumb.current?.click()}>
//             <img src={frontendImage} className='w-full h-full border rounded object-cover' />
//             <FaPen className='absolute top-2 right-2 text-white bg-black p-1 rounded' />
//           </div>

//           {/* BUTTONS */}
//           <div className='flex gap-4 mt-6'>
//             <button
//               type="button"
//               className='bg-gray-200 px-4 py-2 rounded-md'
//               onClick={() => navigate("/courses")}
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className='bg-black text-white px-7 py-2 rounded-md'
//             >
//               {loading ? <ClipLoader size={25} color="white" /> : "Save"}
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditCourse;









// src/pages/Educator/EditCourse.jsx (Final Code)

import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaPen } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from "../../App";
import img from "../../assets/empty.jpg";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux"; // ⬅️ NEW IMPORT
import { updateCreatorCourse, removeCreatorCourse } from "../../redux/courseSlice"; // ⬅️ NEW IMPORT

function EditCourse() {

  const navigate = useNavigate();
  const { courseId } = useParams();
  const thumb = useRef();
  // ⬅️ Redux Dispatch Hook
  const dispatch = useDispatch(); 

  const [isPublished, setIsPublished] = useState(false);
  const [selectCourse, setSelectCourse] = useState(null);

  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");

  const [frontendImage, setFrontendImage] = useState(img);
  const [backendImage, setBackendImage] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(false); // DELETE BUTTON LOADING

  // Handle Thumbnail
  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackendImage(file);
      setFrontendImage(URL.createObjectURL(file));
    }
  };

  // Fetch Course Details
  const getCourseById = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/course/getcourse/${courseId}`, {
        withCredentials: true
      });

      setSelectCourse(result.data);
    } catch (error) {
      toast.error("Failed to load course");
      setSelectCourse(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourseById();
  }, [courseId]);


  // Set fields when course data arrives
  useEffect(() => {
    if (selectCourse) {
      setTitle(selectCourse.title || "");
      setSubTitle(selectCourse.subTitle || selectCourse.subtitle || "");
      setDescription(selectCourse.description || "");
      setCategory(selectCourse.category || "");
      setLevel(selectCourse.level || "");
      setPrice(selectCourse.price || "");
      setFrontendImage(selectCourse.thumbnail || img);
      setIsPublished(selectCourse.isPublished || false);
    }
  }, [selectCourse]);


  // Save Edited Course
  const handleEditCourse = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subTitle", subtitle);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("level", level);
    formData.append("price", price);

    if (backendImage) {
      formData.append("thumbnail", backendImage);
    }

    formData.append("isPublished", isPublished);

    try {
      // API Call
      const res = await axios.put(`${serverUrl}/api/course/editcourse/${courseId}`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      });
      
      // ✅ FIX 1: Redux state update for Edit
      // Assuming API returns the updated course object in res.data or res.data.course
      dispatch(updateCreatorCourse(res.data.course || res.data)); 

      toast.success("Course Updated Successfully!");
      navigate("/courses");

    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };


  // 🗑 DELETE COURSE
  const handleRemoveCourse = async () => {
    try {
      setLoading1(true);

      // API Call
      await axios.delete(
        `${serverUrl}/api/course/remove/${courseId}`,
        { withCredentials: true }
      );
      
      // ✅ FIX 2: Redux state update for Remove
      dispatch(removeCreatorCourse(courseId));

      toast.success("Course Removed Successfully");
      navigate("/courses");

    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    } finally {
      setLoading1(false);
    }
  };


  // Loader while fetching
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <ClipLoader size={50} />
      </div>
    );
  }

  if (!selectCourse) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-red-600">Course not found</p>
      </div>
    );
  }


  // MAIN UI (No Changes Here - Your Original Design is Maintained)
  return (
    <div className='max-w-5xl mx-auto p-6 mt-10 bg-white rounded-b-lg shadow-md'>

      {/* TOP BAR */}
      <div className='flex items-center justify-center gap-4 md:justify-between flex-col md:flex-row mb-6 relative'>
        <FaArrowLeft
          className='top-[-50px] md:top-[20px] left-0 md:left-[20px] absolute w-[22px] h-[22px] cursor-pointer text-gray-700 hover:text-black'
          onClick={() => navigate("/courses")}
        />
        <h2 className='text-2xl font-semibold md:pl-[60px]'>Edit Course Information</h2>
        <button className='bg-black text-white px-4 py-2 rounded-md cursor-pointer'onClick={() => navigate(`/createlecture/${courseId}`)}>
          Go to Lecture page
        </button>
      </div>


      {/* FORM START */}
      <div className='bg-gray-50 p-6 rounded-md'>
        <h2 className='text-lg font-medium mb-4'>Basic Course Information</h2>

        {/* PUBLISH + DELETE BUTTONS */}
        <div className='flex gap-3 mb-4'>
          <button
            className={`px-4 py-2 rounded-md border ${isPublished ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setIsPublished(prev => !prev)}
          >
            {isPublished ? "Click to Unpublish" : "Click to Publish"}
          </button>

          <button
            className='bg-red-600 text-white px-4 py-2 rounded-md'
            onClick={handleRemoveCourse}
          >
            {loading1 ? "Removing..." : "Remove Course"}
          </button>
        </div>


        <form className='space-y-6' onSubmit={handleEditCourse}>

          {/* TITLE */}
          <div>
            <label className='block text-sm font-medium mb-1'>Title</label>
            <input
              type="text"
              className='w-full border px-4 py-2 rounded-md'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* SUBTITLE */}
          <div>
            <label className='block text-sm font-medium mb-1'>Subtitle</label>
            <input
              type="text"
              className='w-full border px-4 py-2 rounded-md'
              value={subtitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className='block text-sm font-medium mb-1'>Description</label>
            <textarea
              className='w-full border px-4 py-2 rounded-md h-24'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* CATEGORY LEVEL PRICE */}
          <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
            <div className='flex-1'>
              <label className='block text-sm font-medium mb-1'>Category</label>
              <select
                className='w-full border px-4 py-2 rounded-md bg-white'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
              <option value="App Development">App Development</option>
              <option value="AI/ML">AI/ML</option>
              <option value="AI Tools">AI Tools</option>
              <option value="Data Science">Data Science</option>
              <option value="Data Analysis">Data Analysis</option>
              <option value="Ethical Hacking">Ethical Hacking</option>
              <option value="UI/UX Designing">UI/UX Desgining</option>
              <option value="Web Development">Web Development</option>
              <option value="Others">Others</option>
              </select>
            </div>

            <div className='flex-1'>
              <label className='block text-sm font-medium mb-1'>Level</label>
              <select
                className='w-full border px-4 py-2 rounded-md'
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className='flex-1'>
              <label className='block text-sm font-medium mb-1'>Price (INR)</label>
              <input
                type="number"
                className='w-full border px-4 py-2 rounded-md'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          {/* THUMBNAIL */}
          <div>
            <label className='block text-sm font-medium mb-1'>Course Thumbnail</label>
            <input type="file" hidden ref={thumb} accept="image/*" onChange={handleThumbnail} />
          </div>

          <div className='relative w-[300px] h-[170px] cursor-pointer' onClick={() => thumb.current?.click()}>
            <img src={frontendImage} className='w-full h-full border rounded object-cover' />
            <FaPen className='absolute top-2 right-2 text-white bg-black p-1 rounded' />
          </div>

          {/* BUTTONS */}
          <div className='flex gap-4 mt-6'>
            <button
              type="button"
              className='bg-gray-200 px-4 py-2 rounded-md'
              onClick={() => navigate("/courses")}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className='bg-black text-white px-7 py-2 rounded-md'
            >
              {loading ? <ClipLoader size={25} color="white" /> : "Save"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditCourse;