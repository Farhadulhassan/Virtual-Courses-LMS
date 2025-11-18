// import express from "express"
// import { createCourse, editCourse, getCourseById, getCreatorCourses, getPublishedCourses, removeCourse } from "../controller/courseController.js"
// import isAuth from "../middleware/isAuth.js"


// const courseRouter = express.Router()

// courseRouter.post("/create" ,isAuth, createCourse)
// courseRouter.get("/getpublished" , getPublishedCourses)
// courseRouter.get("/getcreator", isAuth , getCreatorCourses)
// courseRouter.post("/editcourses/courseId" , isAuth , upload.single("thumbnail") , editCourse)
// courseRouter.get("/getcourse/:courseId" , isAuth , getCourseById )
// courseRouter.delete("/remove/:courseId" , isAuth , removeCourse)

// // backend/routes/courseRoute.js
// import express from "express";
// import {
//   createCourse,
//   editCourse,
//   getCourseById,
//   getCreatorCourses,
//   getPublishedCourses,
//   removeCourse,
// } from "../controller/courseController.js";
// import isAuth from "../middleware/isAuth.js";
// import upload from "../middleware/multer.js"; // YE ZAROORI HAI

// const courseRouter = express.Router();

// // ROUTES
// courseRouter.post("/create", isAuth, createCourse);
// courseRouter.get("/getpublished", getPublishedCourses);
// courseRouter.get("/getcreator", isAuth, getCreatorCourses);
// courseRouter.put("/edit/:courseId", isAuth, upload.single("thumbnail"), editCourse);
// courseRouter.get("/getcourse/:courseId", getCourseById);
// courseRouter.delete("/remove/:courseId", isAuth, removeCourse);

// // YE LINE SABSE NECHE — ZAROORI!
// export default courseRouter;

// // backend/routes/courseRoute.js
// import express from "express";
// import {
//   createCourse,
//   editCourse,
//   getCourseById,
//   getCreatorCourses,
//   getPublishedCourses,
//   removeCourse,
// } from "../controller/courseController.js";
// import isAuth from "../middleware/isAuth.js";
// import upload from "../middleware/multer.js"; // YE IMPORT HAI

// const courseRouter = express.Router();

// // ROUTES — YE SAHI ORDER HAI
// courseRouter.post("/create", isAuth, upload.single("thumbnail"), createCourse); // YE ADD KIYA
// courseRouter.get("/getpublished", getPublishedCourses);
// courseRouter.get("/getcreator", isAuth, getCreatorCourses);
// // courseRouter.put("/edit/:courseId", isAuth, upload.single("thumbnail"), editCourse);
// courseRouter.put("/editcourse/:courseId", isAuth, upload.single("thumbnail"), editCourse);
// courseRouter.get("/getcourse/:courseId", getCourseById);
// courseRouter.delete("/remove/:courseId", isAuth, removeCourse);

// export default courseRouter;















// import express from "express";
// import {
//   createCourse,
//   createLecture,
//   editCourse,
//   editLecture,
//   getCourseById,
//   getCourseLecture,
//   getCreatorCourses,
//   getPublishedCourses,
//   removeCourse,
//   removeLecture,
// } from "../controller/courseController.js";
// import isAuth from "../middleware/isAuth.js";
// import upload from "../middleware/multer.js";

// const courseRouter = express.Router();

// courseRouter.post("/create", isAuth, upload.single("thumbnail"), createCourse);
// courseRouter.get("/getpublished", getPublishedCourses);
// courseRouter.get("/getcreator", isAuth, getCreatorCourses);
// courseRouter.put("/editcourse/:courseId", isAuth, upload.single("thumbnail"), editCourse);
// courseRouter.get("/getcourse/:courseId", getCourseById);
// courseRouter.delete("/remove/:courseId", isAuth, removeCourse);


// /// for lectures

// courseRouter.post("/createlecture/:courseId" , isAuth, createLecture)
// courseRouter.get("/courselecture/:courseId" , isAuth, getCourseLecture) 
// courseRouter.post("/editlecture/:lectureId" , isAuth ,upload.single("videoUrl"),editLecture)
// courseRouter.delete("/removelecture/:lectureId" , isAuth , removeLecture)






// export default courseRouter;











import express from "express";
import {
  createCourse,
  createLecture,
  editCourse,
  editLecture,
  getCourseById,
  getCourseLecture,
  getCreatorCourses,
  getPublishedCourses,
  removeCourse,
  removeLecture,
  getCreatorById
} from "../controller/courseController.js";
import isAuth from "../middleware/isAuth.js";
import upload from "../middleware/multer.js";

const courseRouter = express.Router();

// COURSES
courseRouter.post("/create", isAuth, upload.single("thumbnail"), createCourse);
courseRouter.get("/getpublished", getPublishedCourses);
courseRouter.get("/getcreator", isAuth, getCreatorCourses);
courseRouter.put("/editcourse/:courseId", isAuth, upload.single("thumbnail"), editCourse);
courseRouter.get("/getcourse/:courseId", getCourseById);
courseRouter.delete("/remove/:courseId", isAuth, removeCourse);

// LECTURES
courseRouter.post("/createlecture/:courseId", isAuth, createLecture);
courseRouter.get("/courselecture/:courseId", isAuth, getCourseLecture);
courseRouter.post("/editlecture/:lectureId", isAuth, upload.single("videoUrl"), editLecture);
courseRouter.delete("/removelecture/:lectureId", isAuth, removeLecture);


courseRouter.post("/creator",isAuth,getCreatorById);

export default courseRouter;
