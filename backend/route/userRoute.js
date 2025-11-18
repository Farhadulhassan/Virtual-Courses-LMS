import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser, updateProfile } from "../controller/userController.js";
import upload from "../middleware/multer.js";   // MULTER IMPORT

const userRouter = express.Router();

userRouter.get("/getCurrentUser", isAuth, getCurrentUser);
userRouter.post("/update-profile", isAuth, upload.single("photo"), updateProfile);   // SAHI

export default userRouter;