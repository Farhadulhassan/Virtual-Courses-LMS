// // src/component/Nav.jsx
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { setUserData } from "../redux/userSlice";
// import { toast } from "react-toastify";
// import { IoPersonCircle } from "react-icons/io5";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { GiSplitCross } from "react-icons/gi";
// import logo from "../assets/logo.jpg"; // .jpg add kiya

// const Nav = () => {
//   const { userData } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [showProfile, setShowProfile] = useState(false);
//   const [showHam, setShowHam] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true });
//       dispatch(setUserData(null));
//       toast.success("Logout Successfully!");
//       setShowProfile(false);
//       setShowHam(false);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Logout failed");
//     }
//   };

//   return (
//     <div>
//       {/* Main Nav */}
//       <div className="w-full h-[70px] fixed top-0 px-5 py-2 flex items-center justify-between bg-black/30 backdrop-blur-sm z-10 text-white">
        
//         {/* Logo */}
//         <div className="lg:w-[20%] w-[40%] lg:pl-[50px]">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-[60px] h-[60px] rounded-md border-2 border-white object-cover"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center justify-center gap-6 text-sm font-medium">
//           <span className="hover:text-gray-300 cursor-pointer" onClick={() => navigate("/")}>
//             Home
//           </span>
//           <span className="hover:text-gray-300 cursor-pointer">Courses</span>
//           <span className="hover:text-gray-300 cursor-pointer">Contact</span>

//           {/* User Profile Icon */}
//           {!userData ? (
//             <IoPersonCircle
//               className="w-10 h-10 fill-white cursor-pointer"
//               onClick={() => setShowProfile((prev) => !prev)}
//             />
//           ) : (
//             <div
//               className="w-10 h-10 rounded-full bg-black text-white border-2 border-white flex items-center justify-center cursor-pointer text-lg font-bold"
//               onClick={() => setShowProfile((prev) => !prev)}
//             >
//               {userData?.name?.charAt(0).toUpperCase()}
//             </div>
//           )}

//           {/* Educator Dashboard */}
//           {userData?.role === "educator" && (
//             <span className="px-5 py-2 bg-white text-black rounded-lg cursor-pointer hover:bg-gray-200">
//               Dashboard
//             </span>
//           )}

//           {/* Login / Logout */}
//           {!userData ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-2 bg-black text-white border-2 border-white rounded-xl text-lg font-light hover:bg-white hover:text-black transition"
//             >
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="px-6 py-2 bg-red-600 text-white rounded-xl text-lg font-light hover:bg-red-700 transition"
//             >
//               Logout
//             </button>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <RxHamburgerMenu
//           className="w-8 h-8 fill-white lg:hidden cursor-pointer"
//           onClick={() => setShowHam(true)}
//         />
//       </div>

//       {/* Profile Dropdown (Desktop) */}
//       {showProfile && (
//         <div className="absolute top-[75px] right-[60px] bg-white text-black rounded-b-md shadow-lg p-4 flex flex-col gap-3 z-20">
//           <span className="px-8 py-2 bg-black text-white rounded-xl hover:bg-gray-700 cursor-pointer text-center">
//             My Profile
//           </span>
//           <span className="px-8 py-2 bg-black text-white rounded-xl hover:bg-gray-700 cursor-pointer text-center">
//             My Courses
//           </span>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-black/90 flex flex-col items-center justify-center gap-6 z-50 transition-transform duration-500 lg:hidden ${
//           showHam ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <GiSplitCross
//           className="w-10 h-10 fill-white absolute top-6 right-6 cursor-pointer"
//           onClick={() => setShowHam(false)}
//         />

//         {/* Mobile Profile Icon */}
//         {!userData ? (
//           <IoPersonCircle className="w-16 h-16 fill-white" />
//         ) : (
//           <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold">
//             {userData?.name?.charAt(0).toUpperCase()}
//           </div>
//         )}

//         {/* Educator Links */}
//         {userData?.role === "educator" && (
//           <>
//             <div className="w-[200px] h-[60px] bg-white text-black rounded-xl flex items-center justify-center text-lg cursor-pointer hover:bg-gray-200">
//               My Profile
//             </div>
//             <div className="w-[200px] h-[60px] bg-white text-black rounded-xl flex items-center justify-center text-lg cursor-pointer hover:bg-gray-200">
//               My Courses
//             </div>
//             <div className="w-[200px] h-[60px] bg-white text-black rounded-xl flex items-center justify-center text-lg cursor-pointer hover:bg-gray-200">
//               Dashboard
//             </div>
//           </>
//         )}

//         {/* Login / Logout */}
//         {!userData ? (
//           <button
//             onClick={() => {
//               navigate("/login");
//               setShowHam(false);
//             }}
//             className="w-[200px] h-[60px] bg-white text-black rounded-xl text-lg font-light"
//           >
//             Login
//           </button>
//         ) : (
//           <button
//             onClick={handleLogout}
//             className="w-[200px] h-[60px] bg-red-600 text-white rounded-xl text-lg font-light"
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Nav;






// src/component/Nav.jsx
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { IoPersonCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import { toast } from "react-toastify";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSplitCross } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showHam, setShowHam] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true });
      dispatch(setUserData(null));
      toast.success("Logout Successfully");
      setShow(false);
      setShowHam(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  // helper for first letter
  const getFirstLetter = () => {
    return userData?.user?.name?.charAt(0).toUpperCase() || "?";
  };

  return (
    <div>
      {/* Main Navbar */}
      <div className="w-full h-[70px] fixed top-0 px-5 py-2 flex items-center justify-between bg-[#00000047] backdrop-blur-sm z-10 text-white">
        {/* Logo */}
        <div className="lg:w-[20%] w-[40%] lg:pl-[50px]">
          <img
            src={logo}
            alt="logo"
            className="w-[60px] h-[60px] rounded-md border-2 border-white object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-6 text-sm font-medium">
          {/* Profile Icon */}
          {!userData ? (
            <IoPersonCircle
              className="w-12 h-12 fill-white cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            />
          ) : (
            <div
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white cursor-pointer bg-gray-800 flex items-center justify-center"
              onClick={() => setShow((prev) => !prev)}
            >
              {userData?.user?.photoUrl ? (
                <img
                  src={userData.user.photoUrl}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white text-xl font-bold">
                  {getFirstLetter()}
                </span>
              )}
            </div>
          )}

          {/* DASHBOARD BUTTON */}
          {userData?.user?.role === "educator" && (
            <div
              className="px-[20px] py-[10px] lg:text-white cursor-pointer hover:bg-white hover:text-black transition rounded-md"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </div>
          )}

          {/* LOGIN / LOGOUT */}
          {!userData ? (
            <span
              className="px-[20px] py-[10px] border-2 border-white text-white rounded-[10px] text-[18px] font-light cursor-pointer bg-[#000000d5] hover:bg-white hover:text-black transition"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          ) : (
            <span
              className="px-[20px] py-[10px] rounded-[10px] shadow-sm shadow-black text-[18px] cursor-pointer bg-red-600 hover:bg-red-700 transition text-white"
              onClick={handleLogout}
            >
              Logout
            </span>
          )}
        </div>

        {/* Hamburger */}
        <RxHamburgerMenu
          className="w-10 h-10 lg:hidden fill-white cursor-pointer"
          onClick={() => setShowHam(true)}
        />
      </div>

      {/* Desktop Dropdown */}
      {show && (
        <div className="absolute top-[75px] right-[60px] bg-white text-black rounded-b-md shadow-lg p-4 flex flex-col gap-3 z-20">
          <span
            className="px-8 py-2 bg-black text-white rounded-xl hover:bg-gray-700 cursor-pointer text-center"
            onClick={() => navigate("/Profile")}
          >
            My Profile
          </span>
          <span className="px-8 py-2 bg-black text-white rounded-xl hover:bg-gray-700 cursor-pointer text-center">
            My Courses
          </span>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#000000d6] flex flex-col items-center justify-center gap-5 z-50 transition-transform duration-500 lg:hidden ${
          showHam ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <GiSplitCross
          className="w-10 h-10 fill-white absolute top-6 right-6 cursor-pointer"
          onClick={() => setShowHam(false)}
        />

        {/* Mobile Profile */}
        {!userData ? (
          <IoPersonCircle className="w-16 h-16 fill-white" />
        ) : (
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white bg-gray-800 flex items-center justify-center">
            {userData?.user?.photoUrl ? (
              <img
                src={userData.user.photoUrl}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white text-2xl font-bold">
                {getFirstLetter()}
              </span>
            )}
          </div>
        )}

        {/* Mobile Buttons */}
        {userData?.user?.role === "educator" && (
          <>
            <div
              className="w-[200px] h-[65px] text-white bg-black flex items-center justify-center rounded-[10px] text-[18px] font-light cursor-pointer hover:bg-gray-800"
              onClick={() => navigate("/Profile")}
            >
              My Profile
            </div>
            <div className="w-[200px] h-[65px] text-white bg-black flex items-center justify-center rounded-[10px] text-[18px] font-light cursor-pointer hover:bg-gray-800">
              My Courses
            </div>
            <div
              className="w-[200px] h-[65px] text-white bg-black flex items-center justify-center rounded-[10px] text-[18px] font-light cursor-pointer hover:bg-gray-800"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </div>
          </>
        )}

        {/* LOGIN / LOGOUT Mobile */}
        {!userData ? (
          <span
            className="w-[200px] h-[65px] text-white bg-black flex items-center justify-center rounded-[10px] text-[18px] font-light cursor-pointer hover:bg-gray-800"
            onClick={() => {
              navigate("/login");
              setShowHam(false);
            }}
          >
            Login
          </span>
        ) : (
          <span
            className="w-[200px] h-[65px] text-white bg-black flex items-center justify-center rounded-[10px] text-[18px] font-light cursor-pointer hover:bg-red-800"
            onClick={handleLogout}
          >
            Logout
          </span>

          
        )}
      </div>
    </div>
  );
};

export default Nav;
