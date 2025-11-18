// import express from "express";
// import { signUp, login, logOut, sendOTP, verifyOTP, resetPassword } from "../controller/authController.js";
// import { getCurrentUser } from "../controller/userController.js";
// import isAuth from "../middleware/isAuth.js";
// import { googleSignUp } from "../controller/authController.js";

// const authRouter = express.Router();

// authRouter.post("/signup", signUp);
// authRouter.post("/login", login);
// authRouter.get("/logout", logOut);
// authRouter.get("/me", isAuth, getCurrentUser);
// authRouter.post("/google-signup", googleSignUp);
// authRouter.post("/sendotp", sendOTP);
// authRouter.post("/verifyotp", verifyOTP);
// authRouter.post("/resetpassword", resetPassword);

// export default authRouter;


import express from "express";
import { 
  signUp, 
  login, 
  logOut, 
  sendOTP, 
  verifyOTP, 
  resetPassword,
  googleSignUp,
  googleLogin   // YE NAYA ADD KIYA
} from "../controller/authController.js";
import { getCurrentUser } from "../controller/userController.js";
import isAuth from "../middleware/isAuth.js";

const authRouter = express.Router();

// NORMAL ROUTES
authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.get("/logout", logOut);
authRouter.get("/me", isAuth, getCurrentUser);

// GOOGLE ROUTES
authRouter.post("/google-signup", googleSignUp);
authRouter.post("/google-login", googleLogin);   // YE NAYA ROUTE ADD KIYA

// OTP & PASSWORD RESET
authRouter.post("/sendotp", sendOTP);
authRouter.post("/verifyotp", verifyOTP);
authRouter.post("/resetpassword", resetPassword);

export default authRouter;