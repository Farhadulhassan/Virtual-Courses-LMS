// src/pages/Educator/Dashboard.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6"; // SAHI ICON

function Dashboard() {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Back Arrow — RESPONSIVE & CLEAN */}
      <FaArrowLeft
        className="absolute top-20 left-6 lg:top-24 lg:left-10 w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition z-10"
        onClick={() => navigate("/")}
      />

      {/* Main Content */}
      <div className="w-full px-6 py-10 bg-gray-50 space-y-10">
        {/* Profile Section */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image / Initial */}
          <div className="w-28 h-28 rounded-full bg-gray-300 border-4 border-black shadow-md flex items-center justify-center overflow-hidden">
            {userData?.user?.photoUrl ? (
              <img
                src={userData.user.photoUrl}
                alt="Educator"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl font-bold text-white">
                {userData?.user?.name?.charAt(0).toUpperCase() || "?"}
              </span>
            )}
          </div>

          {/* Text & Button */}
          <div className="text-center md:text-left space-y-1 flex-1">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {userData?.user?.name || "Educator"}
            </h1>
            <h1 className="text-xl font-semibold">Total Earning: $0</h1>
            <p className="text-gray-600 text-sm">
              {userData?.user?.description || "Start creating courses for your students"}
            </p>

            {/* Create Course Button */}
            <button
              className="px-[20px] py-[10px] mt-4 border-2 bg-black border-black text-white rounded-[10px] text-[15px] font-light cursor-pointer hover:bg-gray-800 transition"
              onClick={() => navigate("/courses")}
            >
              Create Courses
            </button>

            
          </div>
        </div>

        {/* Graph Section — KHALI WAISA HI HAI */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
          {/* YAHAN GRAPH AAYEGA — ABHI KHALI HAI */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;






// // src/pages/Educator/Dashboard.jsx
// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";

// function Dashboard() {
//   const { userData } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   return (
//     <div className="flex min-h-screen bg-gray-100 relative">
//       {/* Back Arrow */}
//       <FaArrowLeft
//         className="absolute top-20 left-6 lg:top-24 lg:left-10 w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition z-10"
//         onClick={() => navigate("/")}
//       />

//       {/* Main Content */}
//       <div className="w-full px-6 py-10 bg-gray-50 space-y-10">
//         {/* Profile Section */}
//         <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
//           {/* Profile Image / Initial */}
//           <div className="w-28 h-28 rounded-full bg-gray-300 border-4 border-black shadow-md flex items-center justify-center overflow-hidden">
//             {userData?.user?.photoUrl ? (
//               <img
//                 src={userData.user.photoUrl}
//                 alt="Educator"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <span className="text-4xl font-bold text-white">
//                 {userData?.user?.name?.charAt(0).toUpperCase() || "?"}
//               </span>
//             )}
//           </div>

//           {/* Text & Buttons */}
//           <div className="text-center md:text-left space-y-4 flex-1">
//             <h1 className="text-3xl font-bold text-gray-800">
//               Welcome, {userData?.user?.name || "Educator"}
//             </h1>
//             <h2 className="text-xl font-semibold text-green-600">Total Earning: $0</h2>
//             <p className="text-gray-600">
//               {userData?.user?.description || "Start creating courses and earn from your knowledge"}
//             </p>

//             {/* Buttons Row */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-6">
//               {/* Create Course Button */}
//               <button
//                 onClick={() => navigate("/courses")}
//                 className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition shadow-md"
//               >
//                 Create New Course
//               </button>

//               {/* PENDING PAYMENTS BUTTON — YE HI ADD KIYA HAI */}
//               <button
//                 onClick={() => navigate("/educator/pending-payments")}
//                 className="px-8 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition shadow-md flex items-center gap-2"
//               >
//                 Pending Payments
//                 <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
//                   New
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Graph / Stats Section (Future mein yahan chart aayega) */}
//         <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 text-center text-gray-500">
//           <p className="text-lg">Course analytics and earnings graph will appear here soon...</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;