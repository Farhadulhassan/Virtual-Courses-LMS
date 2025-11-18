// import jwt from "jsonwebtoken";

// const isAuth = async (req, res, next) => {
//   try {
//     const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (error) {
//     console.error("isAuth error:", error.message);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// export default isAuth;

// backend/middleware/isAuth.js
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token; // Cookie se token
    if (!token) {
      return res.status(401).json({ message: "No token, login required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // YE SET KARNA ZAROORI HAI
    next();
  } catch (error) {
    console.log("Auth Error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default isAuth;