// // src/pages/ForgetPassword.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ForgetPassword = () => {
//   const [step, setStep] = useState(1); // Video exact
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

//       {/* STEP 1: Email */}
//       {step === 1 && (
//         <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
//           <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//             Forget Your Password
//           </h2>

//           <form className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Enter your email address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>
//             <button
//               type="button"
//               onClick={() => setStep(2)} // Video: sirf step change
//               className="w-full bg-black hover:bg-[#4b4b4b] text-white py-2 rounded-md font-medium cursor-pointer transition"
//             >
//               Send OTP
//             </button>
//           </form>

//           <div
//             className="text-sm text-center mt-4 text-blue-600 cursor-pointer hover:underline"
//             onClick={() => navigate("/login")}
//           >
//             Back to Login
//           </div>
//         </div>
//       )}

//       {/* STEP 2: OTP */}
//       {step === 2 && (
//         <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
//           <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//             Enter OTP
//           </h2>

//           <form className="space-y-4">
//             <div>
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                 Please enter the 4-digit code sent to your email.
//               </label>
//               <input
//                 id="otp"
//                 type="text"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-center text-xl tracking-widest"
//                 placeholder="* * * *"
//                 maxLength={4}
//                 required
//               />
//             </div>
//             <button
//               type="button"
//               onClick={() => setStep(3)} // Video: sirf step change
//               className="w-full bg-black hover:bg-[#4b4b4b] text-white py-2 rounded-md font-medium cursor-pointer transition"
//             >
//               Verify OTP
//             </button>
//           </form>

//           <div
//             className="text-sm text-center mt-4 text-blue-600 cursor-pointer hover:underline"
//             onClick={() => navigate("/login")}
//           >
//             Back to Login
//           </div>
//         </div>
//       )}

//       {/* STEP 3: Reset Password */}
//       {step === 3 && (
//         <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
//           <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//             Reset Your Password
//           </h2>
//           <p className="text-sm text-gray-500 text-center mb-6">
//             Enter a new password below to regain access to your account.
//           </p>

//           <form className="space-y-4">
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 New Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
//                 placeholder="********"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="conpassword" className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 id="conpassword"
//                 type="password"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
//                 placeholder="********"
//                 required
//               />
//             </div>

//             <button
//               type="button"
//               onClick={() => {
//                 alert("Password Reset Successfully!");
//                 navigate("/login");
//               }}
//               className="w-full bg-black hover:bg-[#4b4b4b] text-white py-2 rounded-md font-medium cursor-pointer transition"
//             >
//               Reset Password
//             </button>
//           </form>

//           <div
//             className="text-sm text-center mt-4 text-blue-600 cursor-pointer hover:underline"
//             onClick={() => navigate("/login")}
//           >
//             Back to Login
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ForgetPassword;


// src/pages/ForgetPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // STEP 1: Send OTP
  const handleSendOTP = async () => {
    if (!email) return toast.error("Enter your email");
    setLoading(true);
    try {
      await axios.post(`${serverUrl}/api/auth/sendotp`, { email });
      toast.success("OTP sent to your email!");
      setStep(2);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: Verify OTP
  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 4) return toast.error("Enter 4-digit OTP");
    setLoading(true);
    try {
      await axios.post(`${serverUrl}/api/auth/verifyotp`, { email, otp });
      toast.success("OTP verified!");
      setStep(3);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // STEP 3: Reset Password
  const handleResetPassword = async () => {
    if (password !== confirmPassword) return toast.error("Passwords don't match");
    if (password.length < 6) return toast.error("Password must be 6+ characters");
    setLoading(true);
    try {
      await axios.post(`${serverUrl}/api/auth/resetpassword`, { email, password });
      toast.success("Password reset successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* STEP 1 */}
      {step === 1 && (
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Forget Your Password</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleSendOTP(); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Enter your email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 flex items-center justify-center"
            >
              {loading ? <ClipLoader size={20} color="white" /> : "Send OTP"}
            </button>
          </form>
          <div className="text-center mt-4 text-sm text-blue-600 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Back to Login
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Enter OTP</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleVerifyOTP(); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">4-digit code sent to your email</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-center text-xl tracking-widest"
                placeholder="* * * *"
                maxLength={4}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 flex items-center justify-center"
            >
              {loading ? <ClipLoader size={20} color="white" /> : "Verify OTP"}
            </button>
          </form>
          <div className="text-center mt-4 text-sm text-blue-600 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Back to Login
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reset Your Password</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="********"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="********"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 flex items-center justify-center"
            >
              {loading ? <ClipLoader size={20} color="white" /> : "Reset Password"}
            </button>
          </form>
          <div className="text-center mt-4 text-sm text-blue-600 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Back to Login
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;