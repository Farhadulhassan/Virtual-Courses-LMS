// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import google from "../assets/google.jpg";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import {useDispatch} from "react-redux";
// import { setUserData } from "../redux/userSlice";

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//    const dispatch = useDispatch()

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const result = await axios.post(
//         `${serverUrl}/api/auth/login`,
//         { email, password },
//         { withCredentials: true }
//       );

//       // console.log("Login Success:", result.data);
//       dispatch(setUserData(result.data))
//       toast.success("Login Successfully!");
//       setLoading(false);
//       navigate("/");
//     } catch (error) {
//       console.error("Login Failed:", error.response?.data || error.message);
//       setLoading(false);
//       toast.error(error.response?.data?.message || "Login Failed");
//     }
//   };

//   return (
//     <div className="bg-[#dcdcdc] w-screen h-screen flex items-center justify-center">
//       <div className="bg-white w-[700px] h-[530px] shadow-2xl rounded-3xl flex overflow-hidden">
//         {/* LEFT SIDE */}
//         <div className="w-[50%] h-full flex flex-col justify-center px-10">
//           <h1 className="text-[28px] font-bold text-gray-900 mb-1 text-center">
//             Welcome Back
//           </h1>
//           <p className="text-gray-500 text-sm mb-6 text-center">Login to your account</p>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4 relative">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//             <span
//               className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Login Button */}
//           <button
//             onClick={handleLogin}
//             disabled={loading}
//             className="w-full bg-black text-white py-2 rounded-md text-[15px] font-semibold hover:bg-gray-900 transition cursor-pointer flex items-center justify-center"
//           >
//             {loading ? <ClipLoader size={25} color="white" /> : "Login"}
//           </button>

//           <span className="text-[13px] cursor-pointer text-[#585757] text-center pt-1 block">
//             Forget your password?
//           </span>

//           {/* Divider */}
//           <div className="flex items-center my-4">
//             <div className="flex-1 h-px bg-gray-300"></div>
//             <span className="px-3 text-gray-500 text-sm">Or continue with</span>
//             <div className="flex-1 h-px bg-gray-300"></div>
//           </div>

//           {/* Google Button */}
//           <button className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2">
//             <img src={google} alt="google" className="w-5 h-5" />
//             <span className="text-gray-700 font-medium">Google</span>
//           </button>

//           {/* Signup Link */}
//           <p className="text-sm text-gray-500 mt-5 text-center">
//             Don’t have an account?{" "}
//             <a href="/signup" className="text-black font-semibold hover:underline">
//               Sign up
//             </a>
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-[50%] h-full bg-black text-white flex flex-col items-center justify-center">
//           <img src={logo} alt="logo" className="w-[120px] h-[120px] object-contain mb-3" />
//           <h2 className="text-[22px] font-semibold tracking-wide">VIRTUAL COURSES</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;





// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import google from "../assets/google.jpg";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice";

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const result = await axios.post(
//         `${serverUrl}/api/auth/login`,
//         { email, password },
//         { withCredentials: true }
//       );

//       dispatch(setUserData(result.data));
//       toast.success("Login Successfully!");
//       setLoading(false);
//       navigate("/");
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.response?.data?.message || "Login Failed");
//     }
//   };

//   return (
//     <div className="bg-[#dcdcdc] w-screen h-screen flex items-center justify-center p-4">
//       {/* Tumhara original container */}
//       <div className="bg-white w-[700px] h-[530px] shadow-2xl rounded-3xl flex overflow-hidden md:flex-row flex-col">
        
//         {/* LEFT: FORM (Same as yours) */}
//         <div className="w-full md:w-[50%] h-full flex flex-col justify-center px-6 md:px-10">
//           <h1 className="text-[28px] font-bold text-gray-900 mb-1 text-center">
//             Welcome Back
//           </h1>
//           <p className="text-gray-500 text-sm mb-6 text-center">Login to your account</p>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4 relative">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//             <span
//               className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Login Button */}
//           <button
//             onClick={handleLogin}
//             disabled={loading}
//             className="w-full bg-black text-white py-2 rounded-md text-[15px] font-semibold hover:bg-gray-900 transition cursor-pointer flex items-center justify-center"
//           >
//             {loading ? <ClipLoader size={25} color="white" /> : "Login"}
//           </button>

//           <span className="text-[13px] cursor-pointer text-[#585757] text-center pt-1 block" onClick={() => navigate("/forgetpassword")}>
//             Forget your password?
//           </span>

//           {/* Divider */}
//           <div className="flex items-center my-4">
//             <div className="flex-1 h-px bg-gray-300"></div>
//             <span className="px-3 text-gray-500 text-sm">Or continue with</span>
//             <div className="flex-1 h-px bg-gray-300"></div>
//           </div>

//           {/* Google Button */}
//           <button className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2">
//             <img src={google} alt="google" className="w-5 h-5" />
//             <span className="text-gray-700 font-medium">Google</span>
//           </button>

//           {/* Signup Link */}
//           <p className="text-sm text-gray-500 mt-5 text-center">
//             Don’t have an account?{" "}
//             <a href="/signup" className="text-black font-semibold hover:underline">
//               Sign up
//             </a>
//           </p>
//         </div>

//         {/* RIGHT: LOGO (Hide on Mobile) */}
//         <div className="hidden md:flex w-[50%] h-full bg-black text-white flex-col items-center justify-center">
//           <img src={logo} alt="logo" className="w-[120px] h-[120px] object-contain mb-3" />
//           <h2 className="text-[22px] font-semibold tracking-wide">VIRTUAL COURSES</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import google from "../assets/google.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { serverUrl } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebase.js";   // PATH SAHI

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // NORMAL LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      dispatch(setUserData(result.data));
      toast.success("Login Successfully!");
      setLoading(false);
      navigate("/");
      // navigate("/profile"); // YE CHANGE KIYA
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  // GOOGLE LOGIN
  const googleLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithPopup(auth, provider);
      const idToken = await response.user.getIdToken();

      const res = await axios.post(
        `${serverUrl}/api/auth/google-login`,
        { idToken },
        { withCredentials: true }
      );

      dispatch(setUserData(res.data));
      toast.success("Google Login Done!");
      navigate("/");
    } catch (error) {
      console.log("Google Login Error:", error);
      toast.error("Google Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#dcdcdc] w-screen h-screen flex items-center justify-center p-4">
      <div className="bg-white w-[700px] h-[530px] shadow-2xl rounded-3xl flex overflow-hidden md:flex-row flex-col">
        
        {/* LEFT: FORM */}
        <div className="w-full md:w-[50%] h-full flex flex-col justify-center px-6 md:px-10">
          <h1 className="text-[28px] font-bold text-gray-900 mb-1 text-center">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm mb-6 text-center">Login to your account</p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <span
              className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md text-[15px] font-semibold hover:bg-gray-900 transition cursor-pointer flex items-center justify-center"
          >
            {loading ? <ClipLoader size={25} color="white" /> : "Login"}
          </button>

          <span 
            className="text-[13px] cursor-pointer text-[#585757] text-center pt-1 block" 
            onClick={() => navigate("/forgetpassword")}
          >
            Forget your password?
          </span>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">Or continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Button — AB WORKING HAI */}
          <button 
            type="button"
            onClick={googleLogin}
            disabled={loading}
            className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <img src={google} alt="google" className="w-5 h-5" />
            <span className="text-gray-700 font-medium">
              {loading ? "Logging in..." : "Google"}
            </span>
          </button>

          {/* Signup Link */}
          <p className="text-sm text-gray-500 mt-5 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-black font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* RIGHT: LOGO */}
        <div className="hidden md:flex w-[50%] h-full bg-black text-white flex-col items-center justify-center">
          <img src={logo} alt="logo" className="w-[120px] h-[120px] object-contain mb-3" />
          <h2 className="text-[22px] font-semibold tracking-wide">VIRTUAL COURSES</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;