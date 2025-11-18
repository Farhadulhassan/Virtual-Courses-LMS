// // import React from 'react'

// // function Profile(){
// //   const {userData} = useSelector(state=>state.user)
// //   return (
// //     <div className='min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center'>
     
// //      <div className='bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative'>

// //      </div>



// //     </div>
// //   )
// // }

// // export default Profile


// import React from "react";
// import { useSelector } from "react-redux";
// import {useNavigate} from 'react-router-dom'
// import { FaArrowLeftLong } from 'react-icons';



// function Profile() {
//   const { userData } = useSelector((state) => state.user);
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
//       <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative">
//         <FaArrowLeftLong className='absolute top-[8%] left-[5%] w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate("/")} />
//         <div className="flex flex-col items-center text-center">
//           {userData?.user?.photoUrl ? (
//             <img
//               src={userData.user.photoUrl}
//               className="w-24 h-24 rounded-full object-cover border-4 border-black"
//               alt="Profile pic"
//             />
//           ) : (
//             <div className="w-24 h-24 text-white flex items-center justify-center text-[30px] border-2 bg-black border-white">
//               {userData?.user?.name?.charAt(0).toUpperCase()}
//             </div>
//           )}

//           <h2 className="text-2xl font-bold mt-4 text-gray-800">
//             {userData?.user?.name}
//           </h2>
//           <p className="text-sm text-gray-500">{userData?.user?.role}</p>
//         </div>

//         <div className="mt-6 space-y-4">
//           {/* email div */}
//           <div className="text-sm flex items-center justify-start gap-1">
//             <span className="font-semibold text-gray-700">Email:</span>
//             <span>{userData.email}</span>
//           </div>
//         </div>

//         <div className="mt-6 space-y-4">
//           {/* Bio div */}
//           <div className="text-sm flex items-center justify-start gap-1">
//             <span className="font-semibold text-gray-700">Bio:</span>
//             <span>{userData.description}</span>
//           </div>
//         </div>

//         <div className="mt-6 space-y-4">
//           {/* enroll courses div */}
//           <div className="text-sm flex items-center justify-start gap-1">
//             <span className="font-semibold text-gray-700">Enrolled Courses:</span>
//             <span>{userData.enrolledCourses.length}</span>
//           </div>
//         </div>
//         <div className="mt-6 flex justify-center gap-4">
//           <button className="px-5 py-2 rounded bg-[black] text-whit active:bg-[#4b4b4b] cursor-pointer transition">Edit Profile</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;


// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { FaArrowLeftLong } from "react-icons/fa"; // SAHI IMPORT

// // function Profile() {
// //   const { userData } = useSelector((state) => state.user);
// //   const navigate = useNavigate();

// //   return (
// //     <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
// //       <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative">
// //         <FaArrowLeftLong
// //           className="absolute top-[8%] left-[5%] w-[22px] h-[22px] cursor-pointer"
// //           onClick={() => navigate("/")}
// //         />
// //         <div className="flex flex-col items-center text-center">
// //           {userData?.user?.photoUrl ? (
// //             <img
// //               src={userData.user.photoUrl}
// //               className="w-24 h-24 rounded-full object-cover border-4 border-black"
// //               alt="Profile pic"
// //             />
// //           ) : (
// //             <div className="w-24 h-24 text-white flex items-center justify-center text-[30px] border-2 bg-black border-white">
// //               {userData?.user?.name?.charAt(0).toUpperCase()}
// //             </div>
// //           )}

// //           <h2 className="text-2xl font-bold mt-4 text-gray-800">
// //             {userData?.user?.name}
// //           </h2>
// //           <p className="text-sm text-gray-500">{userData?.user?.role}</p>
// //         </div>

// //         <div className="mt-6 space-y-4">
// //           {/* email div */}
// //           <div className="text-sm flex items-center justify-start gap-1">
// //             <span className="font-semibold text-gray-700">Email:</span>
// //             <span>{userData?.user?.email}</span>
// //           </div>
// //         </div>

// //         <div className="mt-6 space-y-4">
// //           {/* Bio div */}
// //           <div className="text-sm flex items-center justify-start gap-1">
// //             <span className="font-semibold text-gray-700">Bio:</span>
// //             <span>{userData?.user?.description}</span>
// //           </div>
// //         </div>

// //         <div className="mt-6 space-y-4">
// //           {/* enroll courses div */}
// //           <div className="text-sm flex items-center justify-start gap-1">
// //             <span className="font-semibold text-gray-700">Enrolled Courses:</span>
// //             <span>{userData?.user?.enrolledCourses?.length || 0}</span>
// //           </div>
// //         </div>

// //         <div className="mt-6 flex justify-center gap-4">
// //           <button className="px-5 py-2 rounded bg-black text-white active:bg-[#4b4b4b] cursor-pointer transition">
// //             Edit Profile
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Profile;


// // // src/pages/Profile.jsx
// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { FaArrowLeftLong } from "react-icons/fa";

// // function Profile() {
// //   const { userData } = useSelector((state) => state.user) || {};
// //   const navigate = useNavigate();

// //   if (!userData?.user) {
// //     return (
// //       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //         <p className="text-lg">Loading...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
// //       <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative">
// //         <FaArrowLeftLong
// //           className="absolute top-[8%] left-[5%] w-[22px] h-[22px] cursor-pointer"
// //           onClick={() => navigate("/")}
// //         />
// //         <div className="flex flex-col items-center text-center">
// //           {userData.user.photoUrl ? (
// //             <img
// //               src={userData.user.photoUrl}
// //               className="w-24 h-24 rounded-full object-cover border-4 border-black"
// //               alt="Profile pic"
// //             />
// //           ) : (
// //             <div className="w-24 h-24 text-white flex items-center justify-center text-[30px] border-2 bg-black border-white">
// //               {userData.user.name?.charAt(0).toUpperCase() || "U"}
// //             </div>
// //           )}

// //           <h2 className="text-2xl font-bold mt-4 text-gray-800">
// //             {userData.user.name}
// //           </h2>
// //           <p className="text-sm text-gray-500">{userData.user.role}</p>
// //         </div>

// //         <div className="mt-6 space-y-4">
// //           <div className="text-sm flex items-center justify-start gap-1">
// //             <span className="font-semibold text-gray-700">Email:</span>
// //             <span>{userData.user.email}</span>
// //           </div>
// //         </div>

// //         <div className="mt-6 space-y-4">
// //           <div className="text-sm flex items-center justify-start gap-1">
// //             <span className="font-semibold text-gray-700">Bio:</span>
// //             <span>{userData.user.description || "No bio added."}</span>
// //           </div>
// //         </div>

// //         <div className="mt-6 space-y-4">
// //           <div className="text-sm flex items-center justify-start gap-1">
// //             <span className="font-semibold text-gray-700">Enrolled Courses:</span>
// //             <span>{userData.user.enrolledCourses?.length || 0}</span>
// //           </div>
// //         </div>

// //         <div className="mt-6 flex justify-center gap-4">
// //           <button className="px-5 py-2 rounded bg-black text-white active:bg-[#4b4b4b] cursor-pointer transition">
// //             Edit Profile
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Profile;



// src/pages/Profile.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import EditProfile from "./EditProfile";

function Profile() {
  const { userData } = useSelector((state) => state.user) || {};
  const navigate = useNavigate();

  if (!userData?.user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative">
        {/* 🔙 Back Button */}
        <FaArrowLeftLong
          className="absolute top-[8%] left-[5%] w-[22px] h-[22px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* 🧑‍💼 Profile Section */}
        <div className="flex flex-col items-center text-center">
          {userData.user.photoUrl ? (
            <div className="relative w-28 h-28 rounded-full border-[5px] border-white shadow-md overflow-hidden">
              <img
                src={userData.user.photoUrl}
                alt="Profile pic"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ) : (
            <div className="w-28 h-28 text-white flex items-center justify-center text-[32px] bg-black rounded-full border-[5px] border-white shadow-md">
              {userData.user.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}

          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            {userData.user.name}
          </h2>
          <p className="text-sm text-gray-500">{userData.user.role}</p>
        </div>

        {/* 📄 Info Section */}
        <div className="mt-6 space-y-4">
          <div className="text-sm flex items-center justify-start gap-1">
            <span className="font-semibold text-gray-700">Email:</span>
            <span>{userData.user.email}</span>
          </div>

          <div className="text-sm flex items-center justify-start gap-1">
            <span className="font-semibold text-gray-700">Bio:</span>
            <span>{userData.user.description || "No bio added."}</span>
          </div>

          <div className="text-sm flex items-center justify-start gap-1">
            <span className="font-semibold text-gray-700">
              Enrolled Courses:
            </span>
            <span>{userData.user.enrolledCourses?.length || 0}</span>
          </div>
        </div>

        {/* ✏️ Edit Button */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-5 py-2 rounded bg-black text-white active:bg-[#4b4b4b] cursor-pointer transition" onClick={()=>navigate("/editprofile")}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
