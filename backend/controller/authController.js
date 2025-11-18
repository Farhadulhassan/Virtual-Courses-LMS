// // import User from "../models/userModel.js"; // Model → models
// // import validator from "validator";
// // import bcrypt from "bcryptjs";
// // import genToken from "../config/token.js";
// // import sendMail from "../config/sendMail.js";

// // export const signUp = async (req, res) => {
// //   try {
// //     const { name, email, password, role } = req.body;

// //     const existUser = await User.findOne({ email });
// //     if (existUser) return res.status(400).json({ message: "User already exists" });

// //     if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid email" });
// //     if (password.length < 8) return res.status(400).json({ message: "Password too short" });

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = await User.create({ name, email, password: hashedPassword, role });

// //     const token = genToken(user._id);
// //     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

// //     return res.status(201).json({
// //       message: "Signup successful",
// //       user: { name: user.name, email: user.email, role: user.role },
// //     });
// //   } catch (error) {
// //     return res.status(500).json({ message: error.message });
// //   }
// // };

// // export const login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await User.findOne({ email }).select("+password");
// //     if (!user) return res.status(404).json({ message: "User not found" });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

// //     const token = genToken(user._id);
// //     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

// //     return res.status(200).json({
// //       message: "Login successful",
// //       user: { name: user.name, email: user.email, role: user.role },
// //     });
// //   } catch (error) {
// //     return res.status(500).json({ message: error.message });
// //   }
// // };

// // export const logOut = async (req, res) => {
// //   res.clearCookie("token");
// //   return res.status(200).json({ message: "Logout successful" });
// // };





// // export const sendOTP = async (req,res) => {
// //   try{
// //     const {email} = req.body
// //     const user = await User.findOne({email})
// //     if(!user){
// //       return res.status(404).json({message:"User not found"})
// //     }
// //     const otp =Math.floor(1000 + Math.random()* 9000).toString()

// //     user.resetOtp = otp,
// //     user.otpExpires = Date.now() +5 * 60 *1000,
// //     user.isOtpVerified = false
// //     await user.save()
// //     await sendMail(email , otp)
// //     return res.status(200).json({message:"Otp send successfully"})
// //   } catch (error) {
// //     return res.status(500).json({message:`Send Otp error ${error}`})

// //   }
// // }

// // export const verifyOTP = async (req,res) = {
// //   try {
// //          const {email,otp} = req.body
// //          const user = await User.findOne({email})
// //     if(!user || user.resetOtp != otp || user.otpExpires < Date.now()){
// //       return res.status(404).json({message:"Invalid OTP"})
// //     }
// //     user.isOtpVerified = true,
// //     user.resetOtp = undefined,
// //     user.otpExpires = undefined

// //     await user.save()

// //     return res.status(200).json({message:"otp Verified Successfully"})
    
// //   } catch (error) {

// //     return res.status(500).json({message:(`Verify Otp error ${error}`)})
    
// //   }
// // }


// // export const resetPassword = async (req,res) => {
// //   try {
    
// //          const {email,password} = req.body
// //          const user = await User.findOne({email})
// //     if(!user || !user.isOtpVerified){
// //       return res.status(404).json({message:"OTP verification is required"})
// //   } 
// //    const hashedPassword = await bcrypt.hash(password,10)
// //    user.password = hashedPassword,
// //    user.isOtpVerified = false,

// //    await user.save()
// //    return res.status(200).json({message:"Reset Password Successfully"})
// //    catch (error) {
// //         return res.status(500).json({message:(`reset password error ${error}`)})

    
// //   }
// // }


// import User from "../models/userModel.js";
// import validator from "validator";
// import bcrypt from "bcryptjs";
// import genToken from "../config/token.js";
// import sendMail from "../config/sendMail.js"; // ← IMPORT

// // SIGNUP
// export const signUp = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const existUser = await User.findOne({ email });
//     if (existUser) return res.status(400).json({ message: "User already exists" });

//     if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid email" });
//     if (password.length < 8) return res.status(400).json({ message: "Password too short" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword, role });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

//     return res.status(201).json({
//       message: "Signup successful",
//       user: { name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

//     return res.status(200).json({
//       message: "Login successful",
//       user: { name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // LOGOUT
// export const logOut = async (req, res) => {
//   res.clearCookie("token");
//   return res.status(200).json({ message: "Logout successful" });
// };

// // SEND OTP
// export const sendOTP = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const otp = Math.floor(1000 + Math.random() * 9000).toString();

//     user.resetOtp = otp;
//     user.otpExpires = Date.now() + 5 * 60 * 1000;
//     user.isOtpVerified = false;
//     await user.save();

//     await sendMail(email, otp);

//     return res.status(200).json({ message: "OTP sent successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: `Send OTP error: ${error.message}` });
//   }
// };

// // VERIFY OTP
// export const verifyOTP = async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || user.resetOtp !== otp || user.otpExpires < Date.now()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.isOtpVerified = true;
//     user.resetOtp = undefined;
//     user.otpExpires = undefined;
//     await user.save();

//     return res.status(200).json({ message: "OTP Verified Successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: `Verify OTP error: ${error.message}` });
//   }
// };

// // RESET PASSWORD
// export const resetPassword = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || !user.isOtpVerified) {
//       return res.status(400).json({ message: "OTP verification required" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user.password = hashedPassword;
//     user.isOtpVerified = false;
//     await user.save();

//     return res.status(200).json({ message: "Password reset successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: `Reset password error: ${error.message}` });
//   }
// };


// import User from "../models/userModel.js";
// import validator from "validator";
// import bcrypt from "bcryptjs";
// import genToken from "../config/token.js";
// import sendMail from "../config/sendMail.js";
// import admin from "firebase-admin";

// // SIGN UP
// export const signUp = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const existUser = await User.findOne({ email });
//     if (existUser) return res.status(400).json({ message: "User already exists" });

//     if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid email" });
//     if (password.length < 8) return res.status(400).json({ message: "Password too short" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword, role });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

//     return res.status(201).json({
//       message: "Signup successful",
//       user: { name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

//     return res.status(200).json({
//       message: "Login successful",
//       user: { name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // LOGOUT
// export const logOut = async (req, res) => {
//   res.clearCookie("token");
//   return res.status(200).json({ message: "Logout successful" });
// };

// // SEND OTP
// export const sendOTP = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const otp = Math.floor(1000 + Math.random() * 9000).toString();

//     user.resetOtp = otp;
//     user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 minutes
//     user.isOtpVerified = false;
//     await user.save();

//     await sendMail(email, otp);

//     return res.status(200).json({ message: "OTP sent successfully" });
//   } catch (error) {
//     console.error("Send OTP error:", error);
//     return res.status(500).json({ message: `Send OTP error: ${error.message}` });
//   }
// };

// // VERIFY OTP
// export const verifyOTP = async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || user.resetOtp !== otp || user.otpExpires < Date.now()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.isOtpVerified = true;
//     user.resetOtp = undefined;
//     user.otpExpires = undefined;
//     await user.save();

//     return res.status(200).json({ message: "OTP Verified Successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: `Verify OTP error: ${error.message}` });
//   }
// };

// // RESET PASSWORD
// export const resetPassword = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || !user.isOtpVerified) {
//       return res.status(400).json({ message: "OTP verification required" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user.password = hashedPassword;
//     user.isOtpVerified = false;
//     await user.save();

//     return res.status(200).json({ message: "Password reset successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: `Reset password error: ${error.message}` });
//   }
// };


// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: "lms-virtual-courses",
//       clientEmail: "firebase-adminsdk-abcde@lms-virtual-courses.iam.gserviceaccount.com",
//       privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     }),
//   });
// }

// export const googleSignUp = async (req, res) => {
//   const { idToken } = req.body;

//   try {
//     // Verify Firebase ID Token
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     const { email, name, picture } = decodedToken;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists with Google" });
//     }

//     // Create new user
//     user = await User.create({
//       name: name || email.split("@")[0],
//       email,
//       role: "student",
//       photoUrl: picture,
//       password: "google-auth-dummy", // dummy password
//     });

//     // Generate JWT
//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false });

//     return res.status(201).json({
//       message: "Google SignUp Successful",
//       user: { name: user.name, email: user.email, role: user.role, photoUrl: user.photoUrl },
//     });
//   } catch (error) {
//     console.log("Google SignUp Error:", error);
//     return res.status(400).json({ message: "Invalid Google Token" });
//   }
// };





// import User from "../models/userModel.js";
// import validator from "validator";
// import bcrypt from "bcryptjs";
// import genToken from "../config/token.js";
// import sendMail from "../config/sendMail.js";
// import admin from "firebase-admin";

// // Firebase Admin SDK — SAFE INITIALIZE
// let firebaseApp;
// try {
//   if (!admin.apps.length) {
//     firebaseApp = admin.initializeApp({
//       credential: admin.credential.cert({
//         projectId: "lms-virtual-courses",
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//       }),
//     });
//     console.log("Firebase Admin Initialized");
//   }
// } catch (error) {
//   console.error("Firebase Admin Init Failed:", error.message);
// }

// // SIGN UP
// export const signUp = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const existUser = await User.findOne({ email });
//     if (existUser) return res.status(400).json({ message: "User already exists" });

//     if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid email" });
//     if (password.length < 8) return res.status(400).json({ message: "Password too short" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword, role });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

//     return res.status(201).json({
//       message: "Signup successful",
//       user: { name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

//     return res.status(200).json({
//       message: "Login successful",
//       user: { name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // LOGOUT
// export const logOut = async (req, res) => {
//   res.clearCookie("token");
//   return res.status(200).json({ message: "Logout successful" });
// };

// // GOOGLE SIGNUP
// export const googleSignUp = async (req, res) => {
//   const { idToken } = req.body;

//   if (!firebaseApp) {
//     return res.status(500).json({ message: "Firebase Admin not initialized" });
//   }

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     const { email, name, picture } = decodedToken;

//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists with Google" });
//     }

//     user = await User.create({
//       name: name || email.split("@")[0],
//       email,
//       role: "student",
//       photoUrl: picture,
//       password: "google-auth-dummy",
//     });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false });

//     return res.status(201).json({
//       message: "Google SignUp Successful",
//       user: { name: user.name, email: user.email, role: user.role, photoUrl: user.photoUrl },
//     });
//   } catch (error) {
//     console.error("Google SignUp Error:", error.message);
//     return res.status(400).json({ message: "Invalid Google Token" });
//   }
// };


// // backend/controller/authController.js
// import User from "../models/userModel.js";
// import validator from "validator";
// import bcrypt from "bcryptjs";
// import genToken from "../config/token.js";
// import sendMail from "../config/sendMail.js";
// import { Buffer } from "buffer";

// // SIGN UP
// export const signUp = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const existUser = await User.findOne({ email });
//     if (existUser) return res.status(400).json({ message: "User already exists" });

//     if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid email" });
//     if (password.length < 8) return res.status(400).json({ message: "Password too short" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword, role });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

//     return res.status(201).json({
//       message: "Signup successful",
//       user: { name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

//     return res.status(200).json({
//       message: "Login successful",
//       user: { name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // LOGOUT
// export const logOut = async (req, res) => {
//   res.clearCookie("token");
//   return res.status(200).json({ message: "Logout successful" });
// };

// // SEND OTP
// export const sendOTP = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const otp = Math.floor(1000 + Math.random() * 9000).toString();

//     user.resetOtp = otp;
//     user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 minutes
//     user.isOtpVerified = false;
//     await user.save();

//     await sendMail(email, otp);

//     return res.status(200).json({ message: "OTP sent successfully" });
//   } catch (error) {
//     console.error("Send OTP error:", error);
//     return res.status(500).json({ message: `Send OTP error: ${error.message}` });
//   }
// };

// // VERIFY OTP
// export const verifyOTP = async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || user.resetOtp !== otp || user.otpExpires < Date.now()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.isOtpVerified = true;
//     user.resetOtp = undefined;
//     user.otpExpires = undefined;
//     await user.save();

//     return res.status(200).json({ message: "OTP Verified Successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: `Verify OTP error: ${error.message}` });
//   }
// };

// // RESET PASSWORD
// export const resetPassword = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || !user.isOtpVerified) {
//       return res.status(400).json({ message: "OTP verification required" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user.password = hashedPassword;
//     user.isOtpVerified = false;
//     await user.save();

//     return res.status(200).json({ message: "Password reset successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: `Reset password error: ${error.message}` });
//   }
// };

// // GOOGLE SIGNUP — VIDEO Jaisa (NO firebase-admin)
// export const googleSignUp = async (req, res) => {
//   const { idToken } = req.body;

//   try {
//     console.log("Google ID Token Received");

//     // Decode JWT manually (video jaisa)
//     const payload = JSON.parse(Buffer.from(idToken.split('.')[1], 'base64').toString());
//     const { email, name, picture } = payload;

//     console.log("Google User Data:", { email, name, picture });

//     // Check if user exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists with Google" });
//     }

//     // Create new user
//     user = await User.create({
//       name: name || email.split("@")[0],
//       email,
//       role: "student",
//       photoUrl: picture,
//       password: "google-auth-dummy"
//     });

//     // Generate JWT
//     const token = genToken(user._id);
//     res.cookie("token", token, { httpOnly: true, secure: false });

//     return res.status(201).json({
//       message: "Google SignUp Successful",
//       user: { name: user.name, email: user.email, role: user.role, photoUrl: user.photoUrl },
//     });

//   } catch (error) {
//     console.log("Google SignUp Error:", error.message);
//     return res.status(400).json({ message: "Invalid Google Token" });
//   }
// };


// backend/controller/authController.js
import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import genToken from "../config/token.js";
import sendMail from "../config/sendMail.js";
import { Buffer } from "buffer";

// SIGN UP
export const signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) return res.status(400).json({ message: "User already exists" });

    if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid email" });
    if (password.length < 8) return res.status(400).json({ message: "Password too short" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });

    const token = genToken(user._id);
    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

    return res.status(201).json({
      message: "Signup successful",
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = genToken(user._id);
    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

    return res.status(200).json({
      message: "Login successful",
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// LOGOUT
export const logOut = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful" });
};

// SEND OTP
export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    user.resetOtp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 minutes
    user.isOtpVerified = false;
    await user.save();

    await sendMail(email, otp);

    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Send OTP error:", error);
    return res.status(500).json({ message: `Send OTP error: ${error.message}` });
  }
};

// VERIFY OTP
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.resetOtp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.isOtpVerified = true;
    user.resetOtp = undefined;
    user.otpExpires = undefined;
    await user.save();

    return res.status(200).json({ message: "OTP Verified Successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Verify OTP error: ${error.message}` });
  }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.isOtpVerified) {
      return res.status(400).json({ message: "OTP verification required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.isOtpVerified = false;
    await user.save();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Reset password error: ${error.message}` });
  }
};

// GOOGLE SIGNUP — ROLE ACCEPT KAREGA
export const googleSignUp = async (req, res) => {
  const { idToken, role } = req.body;   // ROLE ACCEPT KIYA

  try {
    console.log("Google ID Token Received");

    const payload = JSON.parse(Buffer.from(idToken.split('.')[1], 'base64').toString());
    const { email, name, picture } = payload;

    console.log("Google User Data:", { email, name, picture, role });

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists with Google" });
    }

    user = await User.create({
      name: name || email.split("@")[0],
      email,
      role: role || "student",   // ROLE YA DEFAULT STUDENT
      photoUrl: picture,
      password: "google-auth-dummy"
    });

    const token = genToken(user._id);
    res.cookie("token", token, { httpOnly: true, secure: false });

    return res.status(201).json({
      message: "Google SignUp Successful",
      user: { name: user.name, email: user.email, role: user.role, photoUrl: user.photoUrl },
    });

  } catch (error) {
    console.log("Google SignUp Error:", error.message);
    return res.status(400).json({ message: "Invalid Google Token" });
  }
};




// GOOGLE LOGIN — USER KO LOGIN KAREGA
export const googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    console.log("Google Login ID Token Received");

    const payload = JSON.parse(Buffer.from(idToken.split('.')[1], 'base64').toString());
    const { email, name, picture } = payload;

    console.log("Google Login User:", { email, name });

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please sign up first." });
    }

    // Token generate karo
    const token = genToken(user._id);
    res.cookie("token", token, { httpOnly: true, secure: false });

    return res.status(200).json({
      message: "Google Login Successful",
      user: { name: user.name, email: user.email, role: user.role, photoUrl: user.photoUrl },
    });

  } catch (error) {
    console.log("Google Login Error:", error.message);
    return res.status(400).json({ message: "Invalid Google Token" });
  }
};