// import express from 'express';
// import dotenv from 'dotenv';
// import connectDb from './config/connectDB.js';
// import cookieParser from 'cookie-parser';
// import authRouter from './route/authRoute.js';
// import userRouter from './route/userRoute.js';
// import cors from "cors";

// dotenv.config();

// const port = process.env.PORT || 8000;
// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);

// app.get("/", (req, res) => {
//   res.send("Hello from LMS Server");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
//   connectDb();
// });


// // backend/index.js
// import express from "express";
// import dotenv from "dotenv";
// import connectDb from "./config/connectDB.js";
// import cookieParser from "cookie-parser";
// import authRouter from "./route/authRoute.js";
// import userRouter from "./route/userRoute.js";
// import courseRouter from "./route/courseRoute.js"; // YE IMPORT
// import cors from "cors";

// dotenv.config();

// const port = process.env.PORT || 8000;
// const app = express();

// // CORS — YE SABSE ZAROORI HAI
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Frontend URL
//     credentials: true, // Cookie ke liye
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.use(express.json({ limit: "10mb" })); // FormData ke liye
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // ROUTES — SAB MOUNT KARO
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);
// app.use("/api/course", courseRouter); // YE ZAROORI HAI!

// // Test route
// app.get("/", (req, res) => {
//   res.send("LMS Server is Running!");
// });

// // 404 handler
// app.use("*", (req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
//   connectDb();
// });



// backend/index.js
import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import authRouter from "./route/authRoute.js";
import userRouter from "./route/userRoute.js";
import courseRouter from "./route/courseRoute.js"; // TUMHARA FOLDER
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// BODY PARSERS
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// ROUTES — TUMHARE `route` FOLDER SE
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/course", courseRouter);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("LMS Server is Running!");
});

// 404 HANDLER — YE SAHI TAREEKA HAI
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectDb();
});
