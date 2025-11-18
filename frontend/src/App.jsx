// // src/App.jsx
// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Signup from "./pages/SignUp";
// import Login from "./pages/Login";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useGetCurrentUser from "./customhooks/usegetCurrentUser";
// import { useSelector } from "react-redux";
// import Profile from "./pages/Profile";
// import ForgetPassword from "./pages/ForgetPassword"; // ← FILE NAME SAME
// import EditProfile from "./pages/EditProfile";
// import Dashboard from "./pages/Educator/Dashboard";
// import Courses from "./pages/Educator/Courses";

// // SERVER URL
// export const serverUrl = "http://localhost:8000";

// function App() {
//   const { userData } = useSelector((state) => state.user);
//   useGetCurrentUser();

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={!userData ? <Signup /> : <Navigate to="/" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/signup" />} />
//         <Route path="/editprofile" element={userData ? <EditProfile /> : <Navigate to="/signup" />} />
//         <Route path="/dashboard" element={userData ?.role === "educator" ? <Dashboard /> : <Navigate to="/signup" />} />
//         <Route path="/courses" element={userData ?.role === "educator" ? <Courses /> : <Navigate to="/signup" />} />
        

//         {/* ← PATH LOWERCASE + COMPONENT NAME SAME */}
//         <Route path="/forgetpassword" element={<ForgetPassword/>} />

//       </Routes>
//     </>
//   );
// }

// export default App;




// // src/App.jsx
// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Signup from "./pages/SignUp";
// import Login from "./pages/Login";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useGetCurrentUser from "./customhooks/usegetCurrentUser";
// import { useSelector } from "react-redux";
// import Profile from "./pages/Profile";
// import ForgetPassword from "./pages/ForgetPassword";
// import EditProfile from "./pages/EditProfile";
// import Dashboard from "./pages/Educator/Dashboard";
// import Courses from "./pages/Educator/Courses";
// import CreateCourses from "./pages/Educator/CreateCourses"; // YE IMPORT
// import getCreatorCourse from "./customhooks/getCreatorCourse";

// export const serverUrl = "http://localhost:8000";

// function App() {
//   const { userData } = useSelector((state) => state.user);
//   useGetCurrentUser();
//   getCreatorCourse()

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={!userData ? <Signup /> : <Navigate to="/" />} />
//         <Route path="/login" element={!userData ? <Login /> : <Navigate to="/" />} />
//         <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/login" />} />
//         <Route path="/editprofile" element={userData ? <EditProfile /> : <Navigate to="/login" />} />
//         <Route path="/forgetpassword" element={<ForgetPassword />} />

//         {/* EDUCATOR ROUTES */}
//         <Route
//           path="/dashboard"
//           element={userData?.user?.role === "educator" ? <Dashboard /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/courses"
//           element={userData?.user?.role === "educator" ? <Courses /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/educator/create-course"
//           element={userData?.user?.role === "educator" ? <CreateCourses /> : <Navigate to="/" />}
//         />

//         <Route
//          path="/educator/editcourse/:courseId"
//          element={userData?.user?.role === "educator" ? <EditCourse /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;




// // src/App.jsx
// import React, { use } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Signup from "./pages/SignUp";
// import Login from "./pages/Login";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useGetCurrentUser from "./customhooks/usegetCurrentUser";
// import { useSelector } from "react-redux";
// import Profile from "./pages/Profile";
// import ForgetPassword from "./pages/ForgetPassword";
// import EditProfile from "./pages/EditProfile";
// import Dashboard from "./pages/Educator/Dashboard";
// import Courses from "./pages/Educator/Courses";
// import CreateCourses from "./pages/Educator/CreateCourses";
// import EditCourse from "./pages/Educator/EditCourse"; // ← IMPORT
// import useGetCreatorCourse from "./customhooks/getCreatorCourse";
// import getPublishedCourse from "./customhooks/getPublishedCourse";

// export const serverUrl = "http://localhost:8000";

// function App() {
//   const { userData } = useSelector((state) => state.user);
//   useGetCurrentUser(); // ← HOOK CALL SAHI
//   getPublishedCourse()
//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={!userData ? <Signup /> : <Navigate to="/" />} />
//         <Route path="/login" element={!userData ? <Login /> : <Navigate to="/" />} />
//         <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/login" />} />
//         <Route path="/editprofile" element={userData ? <EditProfile /> : <Navigate to="/login" />} />
//         <Route path="/forgetpassword" element={<ForgetPassword />} />

//         {/* EDUCATOR ROUTES */}
//         <Route
//           path="/dashboard"
//           element={userData?.user?.role === "educator" ? <Dashboard /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/courses"
//           element={userData?.user?.role === "educator" ? <Courses /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/educator/create-course"
//           element={userData?.user?.role === "educator" ? <CreateCourses /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/educator/editcourse/:courseId"
//           element={userData?.user?.role === "educator" ? <EditCourse /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;














// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Signup from "./pages/SignUp";
// import Login from "./pages/Login";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useGetCurrentUser from "./customhooks/usegetCurrentUser";
// import { useSelector } from "react-redux";
// import Profile from "./pages/Profile";
// import ForgetPassword from "./pages/ForgetPassword";
// import EditProfile from "./pages/EditProfile";
// import Dashboard from "./pages/Educator/Dashboard";
// import Courses from "./pages/Educator/Courses";
// import CreateCourses from "./pages/Educator/CreateCourses";
// import EditCourse from "./pages/Educator/EditCourse";
// import useGetCreatorCourse from "./customhooks/getCreatorCourse";
// import useGetPublishedCourse from "./customhooks/getPublishedCourse";
// import AllCourses from "./pages/AllCourses";

// export const serverUrl = "http://localhost:8000";

// function App() {
//   const { userData } = useSelector((state) => state.user);

//   // CUSTOM HOOK CALLS — sahi jagah per
//   useGetCurrentUser();
//   useGetCreatorCourse();
//   useGetPublishedCourse();

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={!userData ? <Signup /> : <Navigate to="/" />} />
//         <Route path="/login" element={!userData ? <Login /> : <Navigate to="/" />} />
//         <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/login" />} />
//         <Route path="/editprofile" element={userData ? <EditProfile /> : <Navigate to="/login" />} />
//         <Route path="/forgetpassword" element={<ForgetPassword />} />

//         {/* EDUCATOR ROUTES */}
//         <Route
//           path="/dashboard"
//           element={userData?.user?.role === "educator" ? <Dashboard /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/courses"
//           element={userData?.user?.role === "educator" ? <Courses /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/educator/create-course"
//           element={userData?.user?.role === "educator" ? <CreateCourses /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/educator/editcourse/:courseId"
//           element={userData?.user?.role === "educator" ? <EditCourse /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/educator/allcourses/:courseId"
//           element={userData?.user?.role === "educator" ? <AllCourses /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;
















import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGetCurrentUser from "./customhooks/usegetCurrentUser";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Educator/Dashboard";
import Courses from "./pages/Educator/Courses";
import CreateCourses from "./pages/Educator/CreateCourses";
import EditCourse from "./pages/Educator/EditCourse";
import useGetCreatorCourse from "./customhooks/getCreatorCourse";
import useGetPublishedCourse from "./customhooks/getPublishedCourse";
import AllCourses from "./pages/AllCourses"; // AllCourses component imported
import CreateLecture from "./pages/Educator/CreateLecture";
import EditLecture from "./pages/Educator/EditLecture";
import ViewCourse from "./pages/ViewCourse";
import ScrollToTop from "./component/ScrollToTop";
// import PaymentDetails from "./pages/PaymentDetails";
// import PendingPayments from "./pages/Educator/PendingPayments";

export const serverUrl = "http://localhost:8000";

function App() {
  const { userData } = useSelector((state) => state.user);

  // CUSTOM HOOK CALLS
  useGetCurrentUser();
  useGetCreatorCourse();
  useGetPublishedCourse();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
       
       <ScrollToTop/>
      <Routes>
        {/* PUBLIC/USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={!userData ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!userData ? <Login /> : <Navigate to="/" />} />
        
        {/* 🚀 FIX: ALL COURSES PAGE (Public Route) */}
        <Route path="/allcourses" element={<AllCourses />} />

        <Route path="/forgetpassword" element={<ForgetPassword />} />
        
        {/* AUTHENTICATED USER ROUTES */}
        <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/editprofile" element={userData ? <EditProfile /> : <Navigate to="/login" />} />

        {/* EDUCATOR ROUTES (Role Protected) */}
        <Route
          path="/dashboard"
          element={userData?.user?.role === "educator" ? <Dashboard /> : <Navigate to="/signup" />}
        />
        <Route
          path="/courses"
          element={userData?.user?.role === "educator" ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route
          path="/educator/create-course"
          element={userData?.user?.role === "educator" ? <CreateCourses /> : <Navigate to="/signup" />}
        />
        <Route
          path="/educator/editcourse/:courseId"
          element={userData?.user?.role === "educator" ? <EditCourse /> : <Navigate to="/signup" />}
        />
         <Route
          path='/createlecture/:courseId'
          element={userData?.user?.role === "educator" ? <CreateLecture /> : <Navigate to="/signup" />} // ⬅️ CORRECTED LINE: Added .user
        />

       {/* <Route
          path='/editlecture/:courseId'
          element={userData?.user?.role === "educator" ? <EditLecture /> : <Navigate to="/signup" />} // ⬅️ CORRECTED LINE: Added .user
        /> */}

        // SAHI — YE DAALO
        <Route 
           path="/educator/editlecture/:lectureId" 
           element={userData?.user?.role === "educator" ? <EditLecture /> : <Navigate to="/signup" />}
         />

         <Route
          path='/viewcourse/:courseId'
          element={userData?.user?.role === "educator" ? <ViewCourse /> : <Navigate to="/signup" />} // ⬅️ CORRECTED LINE: Added .user
        />

         // App.jsx ya Routes file mein
          {/* <Route path="/payment/:courseId" element={<PaymentDetails />} />

          <Route path="/educator/pending-payments" element={<PendingPayments />} /> */}
        
         
      </Routes>
    </>
  );
}

export default App;