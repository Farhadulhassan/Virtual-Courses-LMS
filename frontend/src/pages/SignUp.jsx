// // import React, { useState } from "react";
// // import logo from "../assets/logo.jpg";
// // import google from "../assets/google.jpg";
// // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import axios from "axios";
// // import { serverUrl } from "../App";
// // import { useNavigate, Link } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import { ClipLoader } from "react-spinners";
// // import {useDispatch} from "react-redux";
// // import { setUserData } from "../redux/userSlice";

// // function Signup() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("student");
// //   const [loading, setLoading] = useState(false);
// //   const dispatch = useDispatch()

// //   const navigate = useNavigate();

// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       const result = await axios.post(
// //         `${serverUrl}/api/auth/signup`,
// //         { name, password, email, role },
// //         { withCredentials: true }
// //       );

// //       // console.log(result.data);
// //       dispatch(setUserData(result.data))
// //       setLoading(false);
// //       toast.success("Signup Successfully!");
// //       navigate("/");
// //     } catch (error) {
// //       console.log(error);
// //       setLoading(false);
// //       toast.error(error.response?.data?.message || "Signup Failed");
// //     }
// //   };

// //   return (
// //     <div className="bg-[#dcdcdc] w-screen h-screen flex items-center justify-center">
// //       <form
// //         className="bg-white w-[700px] h-[560px] shadow-2xl rounded-3xl flex overflow-hidden"
// //         onSubmit={handleSignup}
// //       >
// //         {/* LEFT SIDE */}
// //         <div className="w-[50%] h-full flex flex-col justify-center px-10 py-6">
// //           <h1 className="text-[28px] font-bold text-gray-900 mb-1 text-center">
// //             Let’s get Started
// //           </h1>
// //           <p className="text-gray-500 text-sm mb-6 text-center">
// //             Create your account
// //           </p>

// //           {/* Name */}
// //           <div className="mb-3">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="Your name"
// //               onChange={(e) => setName(e.target.value)}
// //               value={name}
// //               className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
// //             />
// //           </div>

// //           {/* Email */}
// //           <div className="mb-3">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               placeholder="Your email"
// //               onChange={(e) => setEmail(e.target.value)}
// //               value={email}
// //               className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
// //             />
// //           </div>

// //           {/* Password */}
// //           <div className="mb-3 relative">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Password
// //             </label>
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               placeholder="********"
// //               onChange={(e) => setPassword(e.target.value)}
// //               value={password}
// //               className="w-full border border-gray-300 rounded-md py-1.5 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
// //             />
// //             <span
// //               className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? <FaEyeSlash /> : <FaEye />}
// //             </span>
// //           </div>

// //           {/* Role Buttons */}
// //           <div className="flex gap-4 mb-5">
// //             <button
// //               type="button"
// //               className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all ${
// //                 role === "student" ? "bg-black text-white" : ""
// //               }`}
// //               onClick={() => setRole("student")}
// //             >
// //               Student
// //             </button>
// //             <button
// //               type="button"
// //               className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all ${
// //                 role === "educator" ? "bg-black text-white" : ""
// //               }`}
// //               onClick={() => setRole("educator")}
// //             >
// //               Educator
// //             </button>
// //           </div>

// //           {/* Signup Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-black text-white py-2 rounded-md text-[15px] font-semibold hover:bg-gray-900 transition flex items-center justify-center"
// //             disabled={loading}
// //           >
// //             {loading ? <ClipLoader size={25} color="white" /> : "Sign Up"}
// //           </button>

// //           {/* Divider */}
// //           <div className="flex items-center my-4">
// //             <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
// //             <span className="px-3 text-gray-500 text-sm">Or continue with</span>
// //             <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
// //           </div>

// //           {/* Google Button */}
// //           <button
// //             type="button"
// //             className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2"
// //           >
// //             <img src={google} alt="google" className="w-5 h-5" />
// //             <span className="text-gray-700 font-medium">Google</span>
// //           </button>

// //           {/* 🔗 Login link */}
// //           <p className="text-sm text-gray-500 mt-5 text-center">
// //             Already have an account?{" "}
// //             <Link to="/login" className="text-black font-semibold hover:underline">
// //               Login
// //             </Link>
// //           </p>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="w-[50%] h-full bg-black text-white flex flex-col items-center justify-center">
// //           <img
// //             src={logo}
// //             alt="logo"
// //             className="w-[120px] h-[120px] object-contain mb-3"
// //           />
// //           <h2 className="text-[22px] font-semibold tracking-wide">
// //             VIRTUAL COURSES
// //           </h2>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Signup;



// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import google from "../assets/google.jpg";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice";
// import {signInwithPopup} from "firebase/auth"
// import {auth, provider, Provider} from '../../utils/firebase'


// function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const result = await axios.post(
//         `${serverUrl}/api/auth/signup`,
//         { name, password, email, role },
//         { withCredentials: true }
//       );

//       dispatch(setUserData(result.data));
//       setLoading(false);
//       toast.success("Signup Successfully!");
//       navigate("/");
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.response?.data?.message || "Signup Failed");
//     }
//   };


// const googleSignUp =async () => {
//   try {
//     const response = await signInwithPopup(auth,provider)
//     let user = response.user
//     let name = user.displayName
//     let email = user.email
//   } catch (error) {
//     console.log(error)
    
//   }
// }


//   return (
//     <div className="bg-[#dcdcdc] w-screen h-screen flex items-center justify-center p-4">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white w-[700px] h-[560px] shadow-2xl rounded-3xl flex md:flex-row flex-col overflow-hidden"
//       >
//         {/* LEFT: FORM (Same as yours) */}
//         <div className="w-full md:w-[50%] h-full flex flex-col justify-center px-6 md:px-10 py-6">
//           <h1 className="text-[28px] font-bold text-gray-900 mb-1 text-center">
//             Let’s get Started
//           </h1>
//           <p className="text-gray-500 text-sm mb-6 text-center">
//             Create your account
//           </p>

//           {/* Name */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Your name"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Your email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3 relative">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="********"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//             <span
//               className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Role Buttons */}
//           <div className="flex gap-4 mb-5 justify-center">
//             <button
//               type="button"
//               className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all text-sm ${
//                 role === "student" ? "bg-black text-white" : ""
//               }`}
//               onClick={() => setRole("student")}
//             >
//               Student
//             </button>
//             <button
//               type="button"
//               className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all text-sm ${
//                 role === "educator" ? "bg-black text-white" : ""
//               }`}
//               onClick={() => setRole("educator")}
//             >
//               Educator
//             </button>
//           </div>

//           {/* Signup Button */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded-md text-[15px] font-semibold hover:bg-gray-900 transition flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? <ClipLoader size={25} color="white" /> : "Sign Up"}
//           </button>

//           {/* Divider */}
//           <div className="flex items-center my-4">
//             <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
//             <span className="px-3 text-gray-500 text-sm">Or continue with</span>
//             <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
//           </div>

//           {/* Google Button */}
//           <button
//             type="button"
//             className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2" onClick={googleSignUp}
//           >
//             <img src={google} alt="google" className="w-5 h-5" />
//             <span className="text-gray-700 font-medium">Google</span>
//           </button>

//           {/* Login link */}
//           <p className="text-sm text-gray-500 mt-5 text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="text-black font-semibold hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>

//         {/* RIGHT: LOGO (Hide on Mobile) */}
//         <div className="hidden md:flex w-[50%] h-full bg-black text-white flex-col items-center justify-center">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-[120px] h-[120px] object-contain mb-3"
//           />
//           <h2 className="text-[22px] font-semibold tracking-wide">
//             VIRTUAL COURSES
//           </h2>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import google from "../assets/google.jpg";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice";

// // FIXED IMPORTS
// import { signInWithPopup } from "firebase/auth"; // ← FIXED
// import { auth, provider } from "../../utils/firebase"; // ← Provider remove kiya

// function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // NORMAL SIGNUP
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const result = await axios.post(
//         `${serverUrl}/api/auth/signup`,
//         { name, password, email, role },
//         { withCredentials: true }
//       );

//       dispatch(setUserData(result.data));
//       setLoading(false);
//       toast.success("Signup Successfully!");
//       navigate("/");
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.response?.data?.message || "Signup Failed");
//     }
//   };

//   // GOOGLE SIGNUP — FULLY WORKING
//   const googleSignUp = async () => {
//     setLoading(true);
//     try {
//       // Step 1: Firebase se Google Login
//       const response = await signInWithPopup(auth, provider);
//       const user = response.user;

//       // Step 2: ID Token nikaalo
//       const idToken = await user.getIdToken();

//       // Step 3: Backend pe bhejo
//       const res = await axios.post(
//         `${serverUrl}/api/auth/google-signup`,
//         { idToken },
//         { withCredentials: true }
//       );

//       // Step 4: Redux + Redirect
//       dispatch(setUserData(res.data));
//       toast.success("Google SignUp Successful!");
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Google SignUp Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-[#dcdcdc] w-screen h-screen flex items-center justify-center p-4">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white w-[700px] h-[560px] shadow-2xl rounded-3xl flex md:flex-row flex-col overflow-hidden"
//       >
//         {/* LEFT: FORM */}
//         <div className="w-full md:w-[50%] h-full flex flex-col justify-center px-6 md:px-10 py-6">
//           <h1 className="text-[28px] font-bold text-gray-900 mb-1 text-center">
//             Let’s get Started
//           </h1>
//           <p className="text-gray-500 text-sm mb-6 text-center">
//             Create your account
//           </p>

//           {/* Name */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Your name"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Your email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3 relative">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="********"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//             <span
//               className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Role Buttons */}
//           <div className="flex gap-4 mb-5 justify-center">
//             <button
//               type="button"
//               className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all text-sm ${
//                 role === "student" ? "bg-black text-white" : ""
//               }`}
//               onClick={() => setRole("student")}
//             >
//               Student
//             </button>
//             <button
//               type="button"
//               className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all text-sm ${
//                 role === "educator" ? "bg-black text-white" : ""
//               }`}
//               onClick={() => setRole("educator")}
//             >
//               Educator
//             </button>
//           </div>

//           {/* Signup Button */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded-md text-[15px] font-semibold hover:bg-gray-900 transition flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? <ClipLoader size={25} color="white" /> : "Sign Up"}
//           </button>

//           {/* Divider */}
//           <div className="flex items-center my-4">
//             <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
//             <span className="px-3 text-gray-500 text-sm">Or continue with</span>
//             <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
//           </div>

//           {/* Google Button — WORKING */}
//           <button
//             type="button"
//             onClick={googleSignUp}
//             disabled={loading}
//             className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition"
//           >
//             <img src={google} alt="google" className="w-5 h-5" />
//             <span className="text-gray-700 font-medium">
//               {loading ? "Signing up..." : "Google"}
//             </span>
//           </button>

//           {/* Login link */}
//           <p className="text-sm text-gray-500 mt-5 text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="text-black font-semibold hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>

//         {/* RIGHT: LOGO (Mobile Hide) */}
//         <div className="hidden md:flex w-[50%] h-full bg-black text-white flex-col items-center justify-center">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-[120px] h-[120px] object-contain mb-3"
//           />
//           <h2 className="text-[22px] font-semibold tracking-wide">
//             VIRTUAL COURSES
//           </h2>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;




// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import google from "../assets/google.jpg";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../../utils/firebase.js";


// function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // NORMAL SIGNUP
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const result = await axios.post(
//         `${serverUrl}/api/auth/signup`,
//         { name, password, email, role },
//         { withCredentials: true }
//       );

//       dispatch(setUserData(result.data));
//       setLoading(false);
//       toast.success("Signup Successfully!");
//       navigate("/");
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.response?.data?.message || "Signup Failed");
//     }
//   };

//   // GOOGLE SIGNUP — VIDEO Jaisa
//   const googleSignUp = async () => {
//     setLoading(true);
//     try {
//       const response = await signInWithPopup(auth, provider);
//       const idToken = await response.user.getIdToken();

//       console.log("Sending ID Token to Backend:", idToken); // VIDEO MEIN YEHI

//       const res = await axios.post(
//         `${serverUrl}/api/auth/google-signup`,
//         { idToken },
//         { withCredentials: true }
//       );

//       dispatch(setUserData(res.data));
//       toast.success("Google SignUp Done!");
//       navigate("/");
//     } catch (error) {
//       console.log("Google Error:", error);
//       toast.error("Google SignUp Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-[#dcdcdc] w-screen h-screen flex items-center justify-center p-4">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white w-[700px] h-[560px] shadow-2xl rounded-3xl flex md:flex-row flex-col overflow-hidden"
//       >
//         {/* LEFT: FORM */}
//         <div className="w-full md:w-[50%] h-full flex flex-col justify-center px-6 md:px-10 py-6">
//           <h1 className="text-[28px] font-bold text-gray-900 mb-1 text-center">
//             Let’s get Started
//           </h1>
//           <p className="text-gray-500 text-sm mb-6 text-center">
//             Create your account
//           </p>

//           {/* Name */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Your name"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Your email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring--2 focus:ring-black"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3 relative">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="********"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               className="w-full border border-gray-300 rounded-md py-1.5 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//             <span
//               className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Role Buttons */}
//           <div className="flex gap-4 mb-5 justify-center">
//             <button
//               type="button"
//               className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all text-sm ${
//                 role === "student" ? "bg-black text-white" : ""
//               }`}
//               onClick={() => setRole("student")}
//             >
//               Student
//             </button>
//             <button
//               type="button"
//               className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all text-sm ${
//                 role === "educator" ? "bg-black text-white" : ""
//               }`}
//               onClick={() => setRole("educator")}
//             >
//               Educator
//             </button>
//           </div>

//           {/* Signup Button */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded-md text-[15px] font-semibold hover:bg-gray-900 transition flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? <ClipLoader size={25} color="white" /> : "Sign Up"}
//           </button>

//           {/* Divider */}
//           <div className="flex items-center my-4">
//             <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
//             <span className="px-3 text-gray-500 text-sm">Or continue with</span>
//             <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
//           </div>

//           {/* Google Button */}
//           <button
//             type="button"
//             onClick={googleSignUp}
//             disabled={loading}
//             className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition"
//           >
//             <img src={google} alt="google" className="w-5 h-5" />
//             <span className="text-gray-700 font-medium">
//               {loading ? "Signing up..." : "Google"}
//             </span>
//           </button>

//           {/* Login link */}
//           <p className="text-sm text-gray-500 mt-5 text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="text-black font-semibold hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>

//         {/* RIGHT: LOGO */}
//         <div className="hidden md:flex w-[50%] h-full bg-black text-white flex-col items-center justify-center">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-[120px] h-[120px] object-contain mb-3"
//           />
//           <h2 className="text-[22px] font-semibold tracking-wide">
//             VIRTUAL COURSES
//           </h2>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import google from "../assets/google.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { serverUrl } from "../App";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebase.js";   // PATH SAHI HAI

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // NORMAL SIGNUP
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { name, password, email, role },
        { withCredentials: true }
      );

      dispatch(setUserData(result.data));
      setLoading(false);
      toast.success("Signup Successfully!");
      navigate("/");
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Signup Failed");
    }
  };

  // GOOGLE SIGNUP — ROLE BHEJEGA
  const googleSignUp = async () => {
    setLoading(true);
    try {
      const response = await signInWithPopup(auth, provider);
      const idToken = await response.user.getIdToken();

      const res = await axios.post(
        `${serverUrl}/api/auth/google-signup`,
        { 
          idToken,
          role: role   // YE ADD KIYA — ROLE BHEJEGA
        },
        { withCredentials: true }
      );

      dispatch(setUserData(res.data));
      toast.success("Google SignUp Done!");
      navigate("/");
    } catch (error) {
      console.log("Google Error:", error);
      toast.error("Google SignUp Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#dcdcdc] w-screen h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSignup}
        className="bg-white w-[700px] h-[560px] shadow-2xl rounded-3xl flex md:flex-row flex-col overflow-hidden"
      >
        {/* LEFT: FORM */}
        <div className="w-full md:w-[50%] h-full flex flex-col justify-center px-6 md:px-10 py-6">
          <h1 className="text-[28px] font-bold text-gray-900 mb-1 text-center">
            Let’s get Started
          </h1>
          <p className="text-gray-500 text-sm mb-6 text-center">
            Create your account
          </p>

          {/* Name */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-3 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full border border-gray-300 rounded-md py-1.5 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <span
              className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Role Buttons */}
          <div className="flex gap-4 mb-5 justify-center">
            <button
              type="button"
              className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all text-sm ${
                role === "student" ? "bg-black text-white" : ""
              }`}
              onClick={() => setRole("student")}
            >
              Student
            </button>
            <button
              type="button"
              className={`border border-gray-500 px-6 py-1.5 rounded-full hover:bg-black hover:text-white transition-all text-sm ${
                role === "educator" ? "bg-black text-white" : ""
              }`}
              onClick={() => setRole("educator")}
            >
              Educator
            </button>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md text-[15px] font-semibold hover:bg-gray-900 transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <ClipLoader size={25} color="white" /> : "Sign Up"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
            <span className="px-3 text-gray-500 text-sm">Or continue with</span>
            <div className="flex-1 bg-gray-300 h-[0.5px]"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={googleSignUp}
            disabled={loading}
            className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <img src={google} alt="google" className="w-5 h-5" />
            <span className="text-gray-700 font-medium">
              {loading ? "Signing up..." : "Google"}
            </span>
          </button>

          {/* Login link */}
          <p className="text-sm text-gray-500 mt-5 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT: LOGO */}
        <div className="hidden md:flex w-[50%] h-full bg-black text-white flex-col items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-[120px] h-[120px] object-contain mb-3"
          />
          <h2 className="text-[22px] font-semibold tracking-wide">
            VIRTUAL COURSES
          </h2>
        </div>
      </form>
    </div>
  );
}

export default Signup;