// // src/pages/Educator/CreateCourses.jsx
// import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { serverUrl } from "../../App";
// import { toast } from "react-toastify";

// function CreateCourses() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     level: "Beginner",
//     price: "",
//     description: "",
//   });
//   const [thumbnail, setThumbnail] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setThumbnail(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!thumbnail) return toast.error("Thumbnail is required!");

//     setLoading(true);
//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("category", formData.category);
//     data.append("level", formData.level);
//     data.append("price", formData.price);
//     data.append("description", formData.description);
//     data.append("thumbnail", thumbnail);

//     try {
//       await axios.post(`${serverUrl}/api/course/create`, data, {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       toast.success("Course created successfully!");
//       navigate("/courses");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to create course");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-8">
//           <FaArrowLeft
//             className="w-6 h-6 cursor-pointer text-gray-700 hover:text-black"
//             onClick={() => navigate("/courses")}
//           />
//           <h1 className="text-3xl font-bold">Create New Course</h1>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-6">
//           {/* Thumbnail Upload */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Course Thumbnail</label>
//             <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
//               {preview ? (
//                 <img src={preview} alt="Preview" className="w-full h-56 object-cover rounded-lg mb-4" />
//               ) : (
//                 <p className="text-gray-500 mb-4">Click to upload thumbnail</p>
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImage}
//                 className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
//                 required
//               />
//             </div>
//           </div>

//           {/* Title & Category */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">Course Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                 placeholder="e.g. Complete React JS Course"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                 placeholder="e.g. Web Development"
//                 required
//               />
//             </div>
//           </div>

//           {/* Level & Price */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">Level</label>
//               <select
//                 name="level"
//                 value={formData.level}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//               >
//                 <option>Beginner</option>
//                 <option>Intermediate</option>
//                 <option>Advanced</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">Price (₹)</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                 placeholder="499"
//                 required
//               />
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="5"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//               placeholder="Write a brief description about your course..."
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? "Creating Course..." : "Create Course"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateCourses;



// Above code is perfect by Grok


// import React, { useState } from 'react'
// import { FaArrowLeft } from "react-icons/fa6";
// import {useNavigate} from 'react-router-dom'
// function CreateCourses() {
//   const navigate = useNavigate()
//   const [title , setTitle] = useState("")
//   const [category,setCategory] = useState("")
//   const [loading,setLoading] = useState(false)

//   const handleCreateCourse = async () => {
//     setLoading(true)
//     try {
//       const result = await axios.post(serverUrl + "/api/course/create"{title , category} , {withCredentials:true})
//       console.log(result.data)
//       navigate("/courses")
//       setLoading(false)
//       toast.success("Course Created")
//     } catch (error) {
//       console.log(error)
//       toast.error(error.response.data.message)
      
//     }
//   }

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10'>

//      <div className='max-w-xl w-[600px] mx-auto p-6 bg-white shadow-md rounded-b-md mt-10 relative'>
//          <FaArrowLeft className='top-[8%] absolute left-[5%] w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate("/courses")}/>
//          <h2 className='text-2xl font-semibold mb-6 text-center'>Create Course</h2>
//          <form className='space-y-5' onSubmit={(e)=>e.preventDefault}>
//           <div>
//             <label htmlFor="title" className='block text-sm font-medium text-gray-700 mb-1'>Course Title</label>
//             <input type="text" id='title' placeholder='Enter your Course title' className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]' onChange={(e)=>setTitle(e.target.value)} value={title} />
//           </div>

//           <div>
//             <label htmlFor="cat" className='block text-sm font-medium text-gray-700 mb-1'>Course Category</label>
//              <select id="cat"  className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]' onChange={(e)=>setCategory(e.target.value)} >
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
//              </select>
//           </div>
//           <button className='w-full bg-[black] text-[white] py-2 px-4 rounded-md active:bg-[#3a3a3a] transition disabled={loading}' onClick={handleCreateCourse}>{loading? <ClipLoader size={30} color='white' />:"Create"}</button>

//          </form>
//      </div>


//     </div>
//   )
// }

// export default CreateCourses




// // src/pages/Educator/CreateCourses.jsx
// import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { serverUrl } from "../../App";
// import { toast } from "react-toastify";
// import ClipLoader from "react-spinners/ClipLoader";

// function CreateCourses() {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [thumbnail, setThumbnail] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setThumbnail(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleCreateCourse = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) return toast.error("Title is required!");
//     if (!category) return toast.error("Category is required!");
//     if (!thumbnail) return toast.error("Thumbnail is required!");

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("category", category);
//     formData.append("thumbnail", thumbnail);

//     try {
//       await axios.post(`${serverUrl}/api/course/create`, formData, {
//         withCredentials: true,
//       });
//       toast.success("Course Created Successfully!");
//       navigate("/courses");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to create course");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
//       <div className="max-w-xl w-[600px] mx-auto p-6 bg-white shadow-md rounded-b-md mt-10 relative">
//         <FaArrowLeft
//           className="top-[8%] absolute left-[5%] w-[22px] h-[22px] cursor-pointer text-gray-700 hover:text-black"
//           onClick={() => navigate("/courses")}
//         />
//         <h2 className="text-2xl font-semibold mb-6 text-center">Create Course</h2>

//         <form className="space-y-5" onSubmit={handleCreateCourse}>
//           {/* Thumbnail */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail</label>
//             <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
//               {preview ? (
//                 <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded-md mb-2" />
//               ) : (
//                 <p className="text-gray-500">Click to upload thumbnail</p>
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImage}
//                 className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white"
//                 required
//               />
//             </div>
//           </div>

//           {/* Title */}
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//               Course Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               placeholder="Enter your Course title"
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label htmlFor="cat" className="block text-sm font-medium text-gray-700 mb-1">
//               Course Category
//             </label>
//             <select
//               id="cat"
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             >
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

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[black] text-[white] py-2 px-4 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
//           >
//             {loading ? <ClipLoader size={30} color="white" /> : "Create"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateCourses;





// src/pages/Educator/CreateCourses.jsx
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../App";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
// import { useDispatch, useSelector } from "react-redux";
// import { setCreatorCourseData } from "../../redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCreatorCourseData, setCourseData } from "../../redux/courseSlice"; // setCourseData add kiya

function CreateCourses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { creatorCourseData } = useSelector((state) => state.course);
  const { creatorCourseData, courseData } = useSelector((state) => state.course); // courseData add kiya

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    if (!title.trim()) return toast.error("Title is required!");
    if (!category) return toast.error("Category is required!");
    if (!thumbnail) return toast.error("Thumbnail is required!");

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail);

    try {
      const { data } = await axios.post(`${serverUrl}/api/course/create`, formData, {
        withCredentials: true,
      });

      // toast.success("Course Created Successfully!");

      // // ✅ Redux me direct update:
      // if (data?.course) {
      //   dispatch(setCreatorCourseData([...creatorCourseData, data.course]));
      // }

      // navigate("/courses");



      toast.success("Course Created Successfully!");

      if (data?.course) {
        // 1. Creator's list update
        dispatch(setCreatorCourseData([...creatorCourseData, data.course]));
        
        // 2. Home Page ki list (courseData) ko bhi update kiya
        dispatch(setCourseData([...courseData, data.course])); 
      }

      navigate("/courses");



    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="max-w-xl w-[600px] mx-auto p-6 bg-white shadow-md rounded-b-md mt-10 relative">
        <FaArrowLeft
          className="top-[8%] absolute left-[5%] w-[22px] h-[22px] cursor-pointer text-gray-700 hover:text-black"
          onClick={() => navigate("/courses")}
        />
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Course</h2>

        <form className="space-y-5" onSubmit={handleCreateCourse}>
          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thumbnail
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
              ) : (
                <p className="text-gray-500">Click to upload thumbnail</p>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white"
                required
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Course Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your Course title"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="cat" className="block text-sm font-medium text-gray-700 mb-1">
              Course Category
            </label>
            <select
              id="cat"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="App Development">App Development</option>
              <option value="AI/ML">AI/ML</option>
              <option value="AI Tools">AI Tools</option>
              <option value="Data Science">Data Science</option>
              <option value="Data Analysis">Data Analysis</option>
              <option value="Ethical Hacking">Ethical Hacking</option>
              <option value="UI/UX Desgining">UI/UX Desgining</option>
              <option value="Web Development">Web Development</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[black] text-[white] py-2 px-4 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? <ClipLoader size={30} color="white" /> : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCourses;
