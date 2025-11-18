// import React, { useEffect, useState } from 'react'
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedCourse } from '../redux/courseSlice';
// import { useEffect } from 'react';
// import img from "../assets/empty.jpg"
// import { FaStar } from 'react-icons/fa6';
// import { FaPlayCircle } from "react-icons/fa";
// import { FaLock } from 'react-icons/fa6';


// function ViewCourse() {
//     const navigate = useNavigate()
//     const {courseId} = useParams
//     const { courseData } = useSelector(state=>state.course)
//     const {selectedCourse} = useSelector(state=>state.course)
//     const dispatch = useDispatch()
//     const [SelectedLecture,setSelectedLecture] = useState(null)
//     const [creatorData,setCreatorData] = useState(null)
//     const [creatorCourses,setCreatorCourses] = useState(null)

//     const fetchCourseData = async () => {
//         courseData.map((course)=>{
//             if(course._id === courseId){
//               dispatch(setSelectedCourse(course))  
//               console.log(selectedCourse)

//               return null
//             }

//         })
//     }


//     useEffect(()=>{

//      const handleCreator = async () => {
//         if(selectedCourse?.creator){
//             try {
//                 const result = await axios.post(serverUrl + "/api/course/creator",{userId:selectedCourse?.creator},{withCredentials:true})
//                 console.log(result.data)
//                 setCreatorData(result.data)
            
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//      }
//        handleCreator()
//     },[selectedCourse])



//     useEffect(()=>{
//         fetchCourseData()
//     },[courseData,courseId])


//     useEffect(()=>{

//        if(creatorData?._id $$ courseData.length >0){
//         const creatorCourse = courseData.filter((course)=>course.creator === creatorData?._id && course._id !== courseId)
//        setCreatorCourses(creatorCourse)   
//     }
       

//     },[creatorData , courseData])



//   return (
//     <div className='min-h-screen bg-gray-50 p-6'>
       

//       <div className='max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 relative'>


//       {/* top section */}

//       <div className='flex flex-col md:flex-row gap-6'>

       
//        {/* thumbnail */}

//        <div className='w-full md:w-1/2'>

//        <FaArrowLeftLong className='text-[black] w-[22px] h-[22px] cursor-pointer'onClick={()=>navigate("/")}/>

//        {selectedCourse?.thumbnail ? <img src="" {selectedCourse?.thumbnail} alt='' className='rounded-xl w-full object-cover'  />: <img src="" {img} alt='' className='rounded-xl w-full object-cover' /> }


//        </div>

//        {/* course info */}

//         <div className='flex-1 space-y-2 mt-[20px]'>

//          <h2 className='text-2xl font-bold'>{selectedCourse?.title}</h2>
//          <p className='text-gray-600'>{selectedCourse?.subTitle}</p>

//          <div className='flex items-start flex-col justify-between'>

//          <div className='text-yellow-500 font-medium flex gap-2'>
//             <span className='flex items-center justify-start gap-1'><FaStar/>5</span>
//             <span className='text-gray-400'>(1,200 Reviews)</span>
//          </div>
          
          
//          <div>

//            <span className='text-xl font-semibold text-black'>₹{selectedCourse?.price}</span>{" "}
//            <span className='line-through text-sm text-gray-400'>₹599</span>
//          </div>

//          <ul className='text-sm text-gray-700 space-y-1 pt-2'>

//          <li>✅ 10+ hours of video content</li>
//          <li>✅ Lifetime access to course materials</li>


//          </ul>

//          <button className='bg-[black] text-white px-6 py-2 rounded hover:bg-gray-700 mt-3 cursor-pointer'>Enroll Now</button>



//          </div>

//          </div>

//           </div>
           
//            {/* next div */}

//           <div>
//             <h2 className='text-xl font-semibold mb-2'>What you'll Learn</h2>

//              <ul className='list-disc pl-6 text-gray-700 space-y-1'>
//                 <li>{selectedCourse?.category} from Beginning</li>
//              </ul>
//           </div>

//           <div>

//             <h2 className='text-xl font-semibold mb-2'>Who This Course is For</h2>
//             <p className='text-gray-700'>Beginners, aspiring developers, and professionals looking to upgrade skills.</p>

//           </div>

//            <div className='flex flex-col md:flex-row gap-6'>

//             <div className='bg-white w-full md:w-1/2 p-6 rounded-2xl shadow-lg border border-gray-200'>

//             <h2 className='text-xl font-bold mb-1 text-gray-800'>Course Curiculum</h2>

//             <p className='text-sm text-gray-500 mb-4'>{selectedCourse?.lectures} Lectures</p>


//             <div className='flex flex-col gap-3'>

//                 {selectedCourse?.lectures?.map((lecture, index)=>{

//                     <button key={index} 
//                     disabled={lecture.isPreviewFree}
//                     onClick={()=>{
//                         if(lecture.isPreviewFree){
//                             setSelectedLecture(lecture)
//                         }
//                     }}
                    
                    
//                     className= {`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 text-left ${lecture.isPreviewFree?"hover:bg-gray-100 cursor-pointer bg-gray-300": "cursor-not-allowed opacity-60 border-gray-200"} ${setSelectedLecture?.lectureTitle === lecture?.lectureTitle ? "bg-gray-100 border-gray-400": "" }`}>
//                         <span className='text-lg text-gray-700'>
//                             {lecture.isPreviewFree ? <FaPlayCircle/> : <FaLock/> }
//                         </span>
//                         <span className='text-sm font-medium text-gray-800'>{lecture?.lectureTitle}</span>
//                         </button>

//                 })}

//             </div>

//             </div>

//             <div className='bg-white w-full md:w-3/5 p-6 rounded-2xl shadow-lg border border-gray-200'>

//             <div className='aspect-video w-full rounded-lg overflow-hidden mb-4 bg-black flex items-center justify-center'>

//                 {SelectedLecture?.videoUrl ? <video className='w-full h-full object-center' src={selectedCourse?.videoUrl} controls/> :
                
//                   <span className='text-white text-sm'>
//                     Select a preview lecture to watch
//                   </span>

//                 }

//             </div>

//             </div>

//            </div>


//                <div className='mt-8 border pt-6'>

//                 <h2 className='text-xl font-semibold mb-2'>Write a Reviews</h2>

//                 <div className='mb-4'>

//                     <div className='flex gap-1 mb-2'>

//                         {
//                             [1,2,3,4,5].map((star)=>(
//                                 <FaStar key={star}
//                                 className='fill-gray-300'/>
//                             ))
//                         }

//                     </div>

//                     <textarea className='w-full border border-gray-300 rounded-lg p-2' placeholder='Write your review here...' rows={3}>
                    
//                     </textarea>

//                     <button className='bg-black text-white mt-3 px-4 rounded hover:bg-gray-800'>
//                       Submit Review
//                     </button>

//                 </div>

//                </div>


//                {/* for creator info */}

//                <div className='flex items-center gap-4 pt-4 border-t'>


//                   {creatorData?.photoUrl? <img src={creatorData?.photoUrl} alt="" className='w-16 h-16 rounded-full object-cover border-1 border-gray-200'/>: <img src={img} alt=""className=' border-1 border-gray-200 w-16 h-16 rounded-full object-cover' />}

//                   <div>
//                     <h2 className='text-lg font-semibold'>{CreatorCourseData?.name}</h2>
//                     <p className='md:text-sm text-gray-600 text-[10px]'>{creatorData?.description}</p>
//                     <p className='md:text-sm text-gray-600 text-[10px]'>{creatorData?.email}</p>
//                   </div>

//                </div>

//                <div>
//                 <p className='text-xl font-semibold mb-2'>
//                     Other Published Courses by the Educator
//                 </p>
//                </div>

//                <div className='w-full transition-all duration-300 py-[20px] flex items-start justify-center lg:justify-start flex-wrap gap-6 lg:px-[80px]'>

//                 {
//                     creatorCourse?.map((course,index)=>(

//                         <Card key={index} thumbnail={course.thumbnail} id={course._id} price={course.price} title={course.title} category={course.category} />
//                     ))
//                 }

//                </div>



//       </div>



//     </div>
//   )
// }

// export default ViewCourse




// Above code written by farhad




// import React, { useEffect, useState } from 'react';
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedCourse } from '../redux/courseSlice';
// import axios from "axios";
// import img from "../assets/empty.jpg";
// // import { FaStar, FaPlayCircle, FaLock } from "react-icons/fa6";
// import { FaStar, FaPlayCircle, FaLock } from "react-icons/fa";


// function ViewCourse() {

//     const navigate = useNavigate();
//     const { courseId } = useParams();   // ❌ FIXED (was missing parentheses)
//     const dispatch = useDispatch();

//     const { courseData, selectedCourse } = useSelector(state => state.course);

//     const [SelectedLecture, setSelectedLecture] = useState(null);
//     const [creatorData, setCreatorData] = useState(null);
//     const [creatorCourses, setCreatorCourses] = useState([]);

//     const serverUrl = import.meta.env.VITE_SERVER_URL;  // ❌ FIXED (was missing)

//     // ---- FETCH SELECTED COURSE ----
//     const fetchCourseData = async () => {
//         courseData?.map((course) => {
//             if (course._id === courseId) {
//                 dispatch(setSelectedCourse(course));
//                 return null;
//             }
//         });
//     };

//     useEffect(() => {
//         fetchCourseData();
//     }, [courseData, courseId]);

//     // // ---- FETCH CREATOR ----
//     // useEffect(() => {
//     //     const handleCreator = async () => {
//     //         if (!selectedCourse?.creator) return;

//     //         try {
//     //             const result = await axios.post(
//     //                 serverUrl + "/api/course/creator",
//     //                 { userId: selectedCourse.creator },
//     //                 { withCredentials: true }
//     //             );

//     //             setCreatorData(result.data);

//     //         } catch (error) {
//     //             console.log(error);
//     //         }
//     //     };

//     //     handleCreator();
//     // }, [selectedCourse]);


    
//     // ---- FETCH CREATOR ----
// useEffect(() => {
//     const handleCreator = async () => {
//         if (!selectedCourse?.creator) return;

//         try {
//             const result = await axios.get(
//                 `${serverUrl}/api/course/creator/${selectedCourse.creator}`,
//                 { withCredentials: true }
//             );

//             setCreatorData(result.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     handleCreator();
// }, [selectedCourse]);


//     // ---- CREATOR COURSES ----
//     useEffect(() => {
//         if (creatorData?._id && courseData.length > 0) {

//             const creatorCourseList = courseData.filter(
//                 (course) =>
//                     course.creator === creatorData._id &&
//                     course._id !== courseId
//             );

//             setCreatorCourses(creatorCourseList);
//         }

//     }, [creatorData, courseData]);


//     return (
//         <div className='min-h-screen bg-gray-50 p-6'>
//             <div className='max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 relative'>

//                 {/* top section */}
//                 <div className='flex flex-col md:flex-row gap-6'>

//                     {/* thumbnail */}
//                     <div className='w-full md:w-1/2'>
//                         <FaArrowLeftLong
//                             className='text-[black] w-[22px] h-[22px] cursor-pointer'
//                             onClick={() => navigate("/")}
//                         />

//                         <img
//                             src={selectedCourse?.thumbnail || img}    // ❌ FIXED
//                             alt=""
//                             className='rounded-xl w-full object-cover'
//                         />
//                     </div>

//                     {/* course info */}
//                     <div className='flex-1 space-y-2 mt-[20px]'>

//                         <h2 className='text-2xl font-bold'>
//                             {selectedCourse?.title}
//                         </h2>

//                         <p className='text-gray-600'>
//                             {selectedCourse?.subTitle}
//                         </p>

//                         <div className='flex items-start flex-col justify-between'>

//                             <div className='text-yellow-500 font-medium flex gap-2'>
//                                 <span className='flex items-center gap-1'>
//                                     <FaStar /> 5
//                                 </span>
//                                 <span className='text-gray-400'>
//                                     (1,200 Reviews)
//                                 </span>
//                             </div>

//                             <div>
//                                 <span className='text-xl font-semibold text-black'>
//                                     ₹{selectedCourse?.price}
//                                 </span>{" "}
//                                 <span className='line-through text-sm text-gray-400'>
//                                     ₹599
//                                 </span>
//                             </div>

//                             <ul className='text-sm text-gray-700 space-y-1 pt-2'>
//                                 <li>✅ 10+ hours of video content</li>
//                                 <li>✅ Lifetime access to course materials</li>
//                             </ul>

//                             <button className='bg-[black] text-white px-6 py-2 rounded hover:bg-gray-700 mt-3 cursor-pointer'>
//                                 Enroll Now
//                             </button>

//                         </div>

//                     </div>
//                 </div>

//                 {/* next div */}
//                 <div>
//                     <h2 className='text-xl font-semibold mb-2'>What you'll Learn</h2>
//                     <ul className='list-disc pl-6 text-gray-700 space-y-1'>
//                         <li>{selectedCourse?.category} from Beginning</li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h2 className='text-xl font-semibold mb-2'>Who This Course is For</h2>
//                     <p className='text-gray-700'>
//                         Beginners, aspiring developers, and professionals looking to upgrade skills.
//                     </p>
//                 </div>

//                 {/* lectures section */}
//                 <div className='flex flex-col md:flex-row gap-6'>

//                     {/* left: lecture list */}
//                     <div className='bg-white w-full md:w-1/2 p-6 rounded-2xl shadow-lg border border-gray-200'>
//                         <h2 className='text-xl font-bold mb-1 text-gray-800'>
//                             Course Curriculum
//                         </h2>

//                         <p className='text-sm text-gray-500 mb-4'>
//                             {selectedCourse?.lectures?.length} Lectures
//                         </p>

//                         <div className='flex flex-col gap-3'>

//                             {selectedCourse?.lectures?.map((lecture, index) => (
//                                 <button
//                                     key={index}
//                                     disabled={!lecture.isPreviewFree}
//                                     onClick={() => {
//                                         if (lecture.isPreviewFree) setSelectedLecture(lecture);
//                                     }}
//                                     className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 text-left 
//                                         ${lecture.isPreviewFree ? "hover:bg-gray-100 cursor-pointer bg-gray-300" : "cursor-not-allowed opacity-60"} 
//                                         ${SelectedLecture?.lectureTitle === lecture.lectureTitle ? "bg-gray-100 border-gray-400" : ""}`}
//                                 >
//                                     <span className='text-lg text-gray-700'>
//                                         {lecture.isPreviewFree ? <FaPlayCircle /> : <FaLock />}
//                                     </span>

//                                     <span className='text-sm font-medium text-gray-800'>
//                                         {lecture.lectureTitle}
//                                     </span>
//                                 </button>
//                             ))}

//                         </div>
//                     </div>

//                     {/* right: video player */}
//                     <div className='bg-white w-full md:w-3/5 p-6 rounded-2xl shadow-lg border border-gray-200'>
//                         <div className='aspect-video w-full rounded-lg overflow-hidden mb-4 bg-black flex items-center justify-center'>

//                             {SelectedLecture?.videoUrl ? (
//                                 <video
//                                     className='w-full h-full object-center'
//                                     src={SelectedLecture.videoUrl}
//                                     controls
//                                 />
//                             ) : (
//                                 <span className='text-white text-sm'>
//                                     Select a preview lecture to watch
//                                 </span>
//                             )}

//                         </div>
//                     </div>

//                 </div>

//                 creator info
//                 <div className='flex items-center gap-4 pt-4 border-t'>
//                     <img
//                         src={creatorData?.photoUrl || img}
//                         alt=""
//                         className='w-16 h-16 rounded-full object-cover border-1 border-gray-200'
//                     />

//                     <div>
//                         <h2 className='text-lg font-semibold'>
//                             {creatorData?.name}
//                         </h2>
//                         <p className='md:text-sm text-gray-600 text-[10px]'>
//                             {creatorData?.description}
//                         </p>
//                         <p className='md:text-sm text-gray-600 text-[10px]'>
//                             {creatorData?.email}
//                         </p>
//                     </div>
//                 </div>

//                 <div>
//                     <p className='text-xl font-semibold mb-2'>
//                         Other Published Courses by the Educator
//                     </p>
//                 </div>

//                 <div className='w-full py-[20px] flex items-start justify-center lg:justify-start flex-wrap gap-6 lg:px-[80px]'>

//                     {creatorCourses?.map((course, index) => (
//                         <Card
//                             key={index}
//                             thumbnail={course.thumbnail}
//                             id={course._id}
//                             price={course.price}
//                             title={course.title}
//                             category={course.category}
//                         />
//                     ))}

//                 </div>

//             </div>
//         </div>
//     );
// }

// export default ViewCourse;





// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// // import { FaArrowLeftLong, FaStar, FaPlayCircle, FaLock } from 'react-icons/fa';
// import { FaStar, FaPlayCircle, FaLock } from "react-icons/fa";
// import img from "../assets/empty.jpg";
// import Card from "../component/Card";

// function ViewCourse() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const { courseData } = useSelector(state => state.course);

//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [creatorData, setCreatorData] = useState(null);
//   const [creatorCourses, setCreatorCourses] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   useEffect(() => {
//     if (courseData.length > 0) {
//       const course = courseData.find(c => c._id === courseId);
//       if (course) {
//         setSelectedCourse(course);
//         if (course.creator) setCreatorData(course.creator);
//       }
//     }
//   }, [courseData, courseId]);

//   useEffect(() => {
//     if (selectedCourse?.creator?._id && courseData.length > 0) {
//       const others = courseData.filter(c => 
//         c.creator?._id?.toString() === selectedCourse.creator._id.toString() && 
//         c._id !== courseId
//       );
//       setCreatorCourses(others);
//     }
//   }, [selectedCourse, courseData, courseId]);

//   if (!selectedCourse) return <div className="text-center py-20 text-2xl">Loading...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">

//         <button onClick={() => navigate(-1)} className="mb-6">
//           {/* <FaArrowLeftLong className="text-2xl" /> */}
//         </button>

//         <div className="grid md:grid-cols-2 gap-10">
//           <img src={selectedCourse.thumbnail || img} alt="" className="rounded-xl w-full h-96 object-cover" />
//           <div>
//             <h1 className="text-4xl font-bold mb-4">{selectedCourse.title}</h1>
//             <p className="text-2xl font-bold mb-6">₹{selectedCourse.price}</p>
//             <button className="bg-black text-white px-8 py-4 rounded-lg text-lg">Enroll Now</button>
//           </div>
//         </div>

//         {/* Creator */}
//         <div className="flex items-center gap-6 py-8 border-t mt-8">
//           <img src={creatorData?.photoUrl || img} alt="" className="w-20 h-20 rounded-full object-cover" />
//           <div>
//             <h2 className="text-2xl font-bold">{creatorData?.name || "Educator"}</h2>
//             <p className="text-gray-600">{creatorData?.email}</p>
//             <p className="text-gray-500">{creatorData?.description || "Passionate teacher"}</p>
//           </div>
//         </div>

//         {/* Other Courses */}
//         {creatorCourses.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-2xl font-bold mb-6">Other Courses by {creatorData?.name}</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {creatorCourses.map(c => (
//                 <Card key={c._id} id={c._id} title={c.title} thumbnail={c.thumbnail} price={c.price} category={c.category} />
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default ViewCourse;



// Above coode is half completed by 






// import React, { useEffect, useState } from 'react';
// import { FaArrowLeftLong } from 'react-icons/fa6'; 
// import { FaStar, FaPlayCircle, FaLock } from "react-icons/fa";
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import img from "../assets/empty.jpg";
// import Card from "../component/Card";  // ya jo path hai tumhara

// function ViewCourse() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const { courseData } = useSelector(state => state.course);

//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [creatorData, setCreatorData] = useState(null);
//   const [creatorCourses, setCreatorCourses] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   // Find selected course + set creator data
//   useEffect(() => {
//     if (courseData.length > 0 && courseId) {
//       const course = courseData.find(c => c._id === courseId);
//       if (course) {
//         setSelectedCourse(course);
//         if (course.creator) {
//           setCreatorData(course.creator);
//         }
//       }
//     }
//   }, [courseData, courseId]);

//   // Other courses by same creator
//   useEffect(() => {
//     if (selectedCourse?.creator?._id && courseData.length > 0) {
//       const others = courseData.filter(c =>
//         c.creator?._id?.toString() === selectedCourse.creator._id.toString() &&
//         c._id !== courseId
//       );
//       setCreatorCourses(others);
//     }
//   }, [selectedCourse, courseData, courseId]);

//   if (!selectedCourse) {
//     return <div className="min-h-screen flex items-center justify-center text-2xl">Loading course...</div>;
//   }

//   return (
//     <div className='min-h-screen bg-gray-50 p-6'>
//       <div className='max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 relative'>

//         {/* Top Section - Back + Thumbnail + Info */}
//         <div className='flex flex-col md:flex-row gap-6'>
//           <div className='w-full md:w-1/2'>
//             <FaArrowLeftLong
//               className='text-black w-6 h-6 cursor-pointer mb-4'
//               onClick={() => navigate("/")}
//             />
//             <img
//               src={selectedCourse.thumbnail || img}
//               alt={selectedCourse.title}
//               className='rounded-xl w-full object-cover h-80'
//             />
//           </div>

//           <div className='flex-1 space-y-4 mt-6'>
//             <h2 className='text-3xl font-bold'>{selectedCourse.title}</h2>
//             <p className='text-gray-600 text-lg'>{selectedCourse.subTitle}</p>

//             <div className='flex items-center gap-3 text-yellow-500'>
//               <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//               <span className='text-gray-600 ml-2'>(1,200 Reviews)</span>
//             </div>

//             <div className='text-3xl font-bold'>₹{selectedCourse.price || "Free"}</div>

//             <button className='bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition'>
//               Enroll Now
//             </button>

//             <ul className='mt-6 space-y-2 text-gray-700'>
//               <li>10+ hours of video content</li>
//               <li>Lifetime access</li>
//               <li>Certificate on completion</li>
//             </ul>
//           </div>
//         </div>

        

//         {/* Lectures Section */}
//         <div className='grid md:grid-cols-2 gap-8 mt-10'>
//           <div className='bg-gray-50 rounded-xl p-6 border'>
//             <h2 className='text-2xl font-bold mb-4'>Course Curriculum</h2>
//             <p className='text-gray-600 mb-4'>{selectedCourse.lectures?.length || 0} Lectures</p>
//             <div className='space-y-3'>
//               {selectedCourse.lectures?.length > 0 ? (
//                 selectedCourse.lectures.map((lecture, i) => (
//                   <div
//                     key={i}
//                     onClick={() => lecture.isPreviewFree && setSelectedLecture(lecture)}
//                     className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition 
//                       ${lecture.isPreviewFree ? 'hover:bg-white' : 'opacity-60 cursor-not-allowed'}`}
//                   >
//                     {lecture.isPreviewFree ? <FaPlayCircle className='text-2xl text-green-600' /> : <FaLock className='text-2xl text-gray-500' />}
//                     <span className='font-medium'>{lecture.lectureTitle || `Lecture ${i + 1}`}</span>
//                   </div>
//                 ))
//               ) : (
//                 <p className='text-gray-500'>No lectures added yet.</p>
//               )}
//             </div>
//           </div>

//           <div className='bg-black rounded-xl p-6'>
//             {selectedLecture?.videoUrl ? (
//               <video controls className='w-full rounded-lg' src={selectedLecture.videoUrl} />
//             ) : (
//               <div className='h-96 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400'>
//                 Select a free preview lecture to watch
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Creator Info */}
//         <div className='flex items-center gap-6 pt-8 border-t'>
//           <img
//             src={creatorData?.photoUrl || img}
//             alt={creatorData?.name}
//             className='w-20 h-20 rounded-full object-cover border-4 border-gray-200'
//           />
//           <div>
//             <h2 className='text-2xl font-bold'>{creatorData?.name || "Educator"}</h2>
//             <p className='text-gray-600'>{creatorData?.description || "Passionate Instructor"}</p>
//             <p className='text-sm text-gray-500'>{creatorData?.email}</p>
//           </div>
//         </div>

//         {/* Other Courses by Creator */}
//         {creatorCourses.length > 0 && (
//           <div className='mt-12'>
//             <h2 className='text-2xl font-bold mb-6'>
//               Other Published Courses by {creatorData?.name || "the Educator"}
//             </h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//               {creatorCourses.map(course => (
//                 <Card
//                   key={course._id}
//                   id={course._id}
//                   title={course.title}
//                   thumbnail={course.thumbnail}
//                   price={course.price}
//                   category={course.category}
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default ViewCourse;



// Above code is 100% perfect









// This code is 100% complete and perfect



// import React, { useEffect, useState } from 'react';
// import { FaArrowLeftLong, FaGripVertical } from 'react-icons/fa6';
// import { FaStar, FaPlayCircle, FaLock } from "react-icons/fa";
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import img from "../assets/empty.jpg";
// import Card from "../component/Card";

// function ViewCourse() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const { courseData } = useSelector(state => state.course);

//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [creatorData, setCreatorData] = useState(null);
//   const [creatorCourses, setCreatorCourses] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   useEffect(() => {
//     if (courseData.length > 0 && courseId) {
//       const course = courseData.find(c => c._id === courseId);
//       if (course) {
//         setSelectedCourse(course);
//         if (course.creator) setCreatorData(course.creator);
//       }
//     }
//   }, [courseData, courseId]);

//   useEffect(() => {
//     if (selectedCourse?.creator?._id && courseData.length > 0) {
//       const others = courseData.filter(c =>
//         c.creator?._id?.toString() === selectedCourse.creator._id.toString() &&
//         c._id !== courseId
//       );
//       setCreatorCourses(others);
//     }
//   }, [selectedCourse, courseData, courseId]);

//   if (!selectedCourse) {
//     return <div className="min-h-screen flex items-center justify-center text-2xl">Loading course...</div>;
//   }

//   return (
//     <div className='min-h-screen bg-gray-50 p-6'>
//       <div className='max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 relative'>

//         {/* Top Section - Thumbnail + Course Info */}
//         <div className='flex flex-col md:flex-row gap-6'>
//           <div className='w-full md:w-1/2'>
//             <FaArrowLeftLong
//               className='text-[black] w-[22px] h-[22px] cursor-pointer'
//               onClick={() => navigate("/")}
//             />
//             <img
//               src={selectedCourse.thumbnail || img}
//               alt=""
//               className='rounded-xl w-full object-cover'
//             />
//           </div>

//           <div className='flex-1 space-y-2 mt-[20px]'>
//             <h2 className='text-2xl font-bold'>{selectedCourse.title}</h2>
//             <p className='text-gray-600'>{selectedCourse.subTitle}</p>

//             <div className='flex items-start flex-col justify-between'>
//               <div className='text-yellow-500 font-medium flex gap-2'>
//                 <span className='flex items-center gap-1'>
//                   <FaStar /> 5
//                 </span>
//                 <span className='text-gray-400'>(1,200 Reviews)</span>
//               </div>

//               <div>
//                 <span className='text-xl font-semibold text-black'>
//                   ₹{selectedCourse.price || "Free"}
//                 </span>{" "}
//                 <span className='line-through text-sm text-gray-400'>₹599</span>
//               </div>

//               <ul className='text-sm text-gray-700 space-y-1 pt-2'>
//                 <li>10+ hours of video content</li>
//                 <li>Lifetime access to course materials</li>
//               </ul>

//               <button className='bg-[black] text-white px-6 py-2 rounded hover:bg-gray-700 mt-3 cursor-pointer'>
//                 Enroll Now
//               </button>
//             </div>
//           </div>
//         </div>

        

//         {/* Lectures Section */}
//         <div className='flex flex-col md:flex-row gap-6 mt-8'>
//           {/* Left: Lecture List */}
//           <div className='bg-white w-full md:w-1/2 p-6 rounded-2xl shadow-lg border border-gray-200'>
//             <h2 className='text-xl font-bold mb-1 text-gray-800'>Course Curriculum</h2>
//             <p className='text-sm text-gray-500 mb-4'>
//               {selectedCourse?.lectures?.length || 0} Lectures
//             </p>

//             <div className='flex flex-col gap-3'>
//               {selectedCourse?.lectures?.length > 0 ? (
//                 selectedCourse.lectures.map((lecture, index) => (
//                   <button
//                     key={index}
//                     disabled={!lecture.isPreviewFree}
//                     onClick={() => lecture.isPreviewFree && setSelectedLecture(lecture)}
//                     className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 text-left 
//                       ${lecture.isPreviewFree 
//                         ? "hover:bg-gray-100 cursor-pointer bg-gray-50" 
//                         : "cursor-not-allowed opacity-60 bg-gray-100"
//                       } 
//                       ${selectedLecture?.lectureTitle === lecture.lectureTitle ? "bg-gray-200 border-gray-400" : ""}`}
//                   >
//                     <span className='text-lg text-gray-700'>
//                       {lecture.isPreviewFree ? <FaPlayCircle /> : <FaLock />}
//                     </span>
//                     <span className='text-sm font-medium text-gray-800'>
//                       {lecture.lectureTitle || `Lecture ${index + 1}`}
//                     </span>
//                   </button>
//                 ))
//               ) : (
//                 <p className='text-gray-500'>No lectures added yet.</p>
//               )}
//             </div>
//           </div>

//           {/* Right: Video Player */}
//           <div className='bg-white w-full md:w-3/5 p-6 rounded-2xl shadow-lg border border-gray-200'>
//             <div className='aspect-video w-full rounded-lg overflow-hidden mb-4 bg-black flex items-center justify-center'>
//               {selectedLecture?.videoUrl ? (
//                 <video
//                   className='w-full h-full object-center'
//                   src={selectedLecture.videoUrl}
//                   controls
//                 />
//               ) : (
//                 <span className='text-white text-sm'>
//                   Select a preview lecture to watch
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>


//         {/* Creator Info */}
//         <div className='flex items-center gap-4 pt-4 border-t'>
//           <img
//             src={creatorData?.photoUrl || img}
//             alt=""
//             className='w-16 h-16 rounded-full object-cover border-1 border-gray-200'
//           />
//           <div>
//             <h2 className='text-lg font-semibold'>{creatorData?.name || "Educator"}</h2>
//             <p className='md:text-sm text-gray-600 text-[10px]'>
//               {creatorData?.description || "Passionate Instructor"}
//             </p>
//             <p className='md:text-sm text-gray-600 text-[10px]'>
//               {creatorData?.email}
//             </p>
//           </div>
//         </div>

//         {/* Other Courses by Creator */}
//         <div>
//           <p className='text-xl font-semibold mb-2'>
//             Other Published Courses by the Educator
//           </p>
//         </div>

//         <div className='w-full py-[20px] flex items-start justify-center lg:justify-start flex-wrap gap-6 lg:px-[80px]'>
//           {creatorCourses.length > 0 ? (
//             creatorCourses.map((course) => (
//               <Card
//                 key={course._id}
//                 thumbnail={course.thumbnail}
//                 id={course._id}
//                 price={course.price}
//                 title={course.title}
//                 category={course.category}
//               />
//             ))
//           ) : (
//             <p className='text-gray-500'>No other courses yet.</p>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ViewCourse;


// Above code is also perfect but littlebit mistakes



import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaStar, FaPlayCircle, FaLock } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import img from "../assets/empty.jpg";
import Card from "../component/Card";

function ViewCourse() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { courseData } = useSelector(state => state.course);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [creatorData, setCreatorData] = useState(null);
  const [creatorCourses, setCreatorCourses] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState(null);

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  // YE WALA CHHOTA SA USEEFFECT ADD KIYA HAI — BAS YE HI NAYA HAI
  // Ye latest data laayega bina kisi dispatch ke (error nahi aayega)
  useEffect(() => {
    const getLatestCourse = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/course/getpublished`);
        const freshCourses = res.data;
        const currentCourse = freshCourses.find(c => c._id === courseId);
        if (currentCourse) {
          setSelectedCourse(currentCourse);
          if (currentCourse.creator && typeof currentCourse.creator === 'object') {
            setCreatorData(currentCourse.creator);
          }
        }
      } catch (err) {
        console.log("Refresh failed, using old data");
      }
    };
    getLatestCourse();
  }, [courseId, serverUrl]);

  // Other courses by same creator (Redux se nahi, fresh data se)
  useEffect(() => {
    const getCreatorCourses = async () => {
      if (!creatorData?._id) return;
      try {
        const res = await axios.get(`${serverUrl}/api/course/getpublished`);
        const all = res.data;
        const others = all.filter(c => 
          c.creator?._id?.toString() === creatorData._id.toString() && 
          c._id !== courseId
        );
        setCreatorCourses(others);
      } catch (err) { }
    };
    getCreatorCourses();
  }, [creatorData, courseId, serverUrl]);

  if (!selectedCourse) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Loading...</div>;
  }

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 relative'>

        {/* Top Section */}
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='w-full md:w-1/2'>
            <FaArrowLeftLong
              className='text-[black] w-[22px] h-[22px] cursor-pointer'
              onClick={() => navigate("/")}
            />
            <img src={selectedCourse.thumbnail || img} alt="" className='rounded-xl w-full object-cover' />
          </div>

          <div className='flex-1 space-y-2 mt-[20px]'>
            <h2 className='text-2xl font-bold'>{selectedCourse.title}</h2>
            <p className='text-gray-600'>{selectedCourse.subTitle}</p>

            <div className='flex items-start flex-col justify-between'>
              <div className='text-yellow-500 font-medium flex gap-2'>
                <span className='flex items-center gap-1'><FaStar /> 5</span>
                <span className='text-gray-400'>(1,200 Reviews)</span>
              </div>

              <div>
                <span className='text-xl font-semibold text-black'>₹{selectedCourse.price || "Free"}</span>{" "}
                <span className='line-through text-sm text-gray-400'>₹599</span>
              </div>

              <ul className='text-sm text-gray-700 space-y-1 pt-2'>
                <li>10+ hours of video content</li>
                <li>Lifetime access to course materials</li>
              </ul>

              <button className='bg-[black] text-white px-6 py-2 rounded hover:bg-gray-700 mt-3 cursor-pointer'>
                Enroll Now
              </button>

              {/* <button 
                onClick={() => {
                  navigate(`/payment/${selectedCourse._id}`, { 
                  state: { course: selectedCourse },
                  replace: false  // important
                  });
                   }}
                  className='bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition'
                   >Enroll Now
                      </button> */}

            </div>
          </div>
        </div>

        

        {/* Lectures + Video */}
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='bg-white w-full md:w-1/2 p-6 rounded-2xl shadow-lg border border-gray-200'>
            <h2 className='text-xl font-bold mb-1 text-gray-800'>Course Curriculum</h2>
            <p className='text-sm text-gray-500 mb-4'>{selectedCourse.lectures?.length || 0} Lectures</p>
            <div className='flex flex-col gap-3'>
              {selectedCourse.lectures?.map((lecture, i) => (
                <button
                  key={lecture._id || i}
                  onClick={() => lecture.isPreviewFree && setSelectedLecture(lecture)}
                  disabled={!lecture.isPreviewFree}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all text-left 
                    ${lecture.isPreviewFree ? "hover:bg-gray-100 cursor-pointer bg-gray-50" : "opacity-60 cursor-not-allowed"}
                    ${selectedLecture?._id === lecture._id ? "bg-gray-200" : ""}`}
                >
                  {lecture.isPreviewFree ? <FaPlayCircle /> : <FaLock />}
                  <span className='text-sm font-medium text-gray-800'>
                    {lecture.lectureTitle || `Lecture ${i + 1}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className='bg-white w-full md:w-3/5 p-6 rounded-2xl shadow-lg border border-gray-200'>
            <div className='aspect-video w-full rounded-lg overflow-hidden bg-black flex items-center justify-center'>
              {selectedLecture?.videoUrl ? (
                <video className='w-full h-full' src={selectedLecture.videoUrl} controls />
              ) : (
                <span className='text-white text-sm'>Select a preview lecture to watch</span>
              )}
            </div>
          </div>
        </div>

        {/* Creator Info */}
        <div className='flex items-center gap-4 pt-4 border-t'>
          <img src={creatorData?.photoUrl || img} alt="" className='w-16 h-16 rounded-full object-cover border-1 border-gray-200' />
          <div>
            <h2 className='text-lg font-semibold'>{creatorData?.name || "Educator"}</h2>
            <p className='md:text-sm text-gray-600 text-[10px]'>{creatorData?.description || "Passionate Instructor"}</p>
            <p className='md:text-sm text-gray-600 text-[10px]'>{creatorData?.email}</p>
          </div>
        </div>

        {/* Other Courses */}
        <div>
          <p className='text-xl font-semibold mb-2'>Other Published Courses by the Educator</p>
        </div>
        <div className='w-full py-[20px] flex items-start justify-center lg:justify-start flex-wrap gap-6 lg:px-[80px]'>
          {creatorCourses.map(course => (
            <Card key={course._id} thumbnail={course.thumbnail} id={course._id} price={course.price} title={course.title} category={course.category} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default ViewCourse;