
// import uploadOnCloudinary from "../config/cloudinary.js";
// import Course from "../models/courseModel.js";
// import Lecture from "../models/lectureModel.js";



// /**
//  * Create course
//  * Expects multipart/form-data with field "thumbnail" (file)
//  * Uses req.user._id (make sure isAuth sets req.user)
//  */
// export const createCourse = async (req, res) => {
//   try {
//     const { title, category } = req.body;
//     if (!title || !category) {
//       return res.status(400).json({ message: "Title and Category are required" });
//     }

//     // upload thumbnail (if provided) and get URL string
//     let thumbnailUrl = "";
//     if (req.file && req.file.path) {
//       const uploaded = await uploadOnCloudinary(req.file.path);
//       if (uploaded) thumbnailUrl = uploaded; // string
//     }

//     const creatorId = req.user?._id || req.userId || null;
//     if (!creatorId) {
//       // defensive: if isAuth didn't set req.user, return 401
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const course = await Course.create({
//       title,
//       category,
//       creator: creatorId,
//       thumbnail: thumbnailUrl,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Course created successfully!",
//       course,
//     });
//   } catch (error) {
//     console.error("CreateCourse error:", error);
//     return res.status(500).json({
//       success: false,
//       message: `CreateCourse error: ${error.message}`,
//     });
//   }
// };

// export const getPublishedCourses = async (req, res) => {
//   try {
//     const courses = await Course.find({ isPublished: true }).populate("lectures");
//     return res.status(200).json(courses);
//   } catch (error) {
//     console.error("getPublishedCourses error:", error);
//     return res.status(500).json({ message: `Failed to get published courses: ${error.message}` });
//   }
// };

// export const getCreatorCourses = async (req, res) => {
//   try {
//     const userId = req.user?._id || req.userId || null;
//     if (!userId) return res.status(401).json({ message: "Unauthorized" });

//     const courses = await Course.find({ creator: userId });
//     return res.status(200).json({ success: true, courses });
//   } catch (error) {
//     console.error("getCreatorCourses error:", error);
//     return res.status(500).json({ message: `Failed to get creator courses: ${error.message}` });
//   }
// };





// export const editCourse = async (req, res) => {
//   try {
//     const { courseId } = req.params;
//     const { title, subTitle, description, category, level, isPublished, price } = req.body;

//     // upload thumbnail if provided
//     let thumbnailUrl = null;
//     if (req.file && req.file.path) {
//       const uploaded = await uploadOnCloudinary(req.file.path);
//       if (uploaded) thumbnailUrl = uploaded; // string
//     }

//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: "Course not found" });
//     }

//     // optionally you may check ownership: only creator can edit
//     const userId = req.user?._id || null;
//     if (!userId || String(course.creator) !== String(userId)) {
//       return res.status(403).json({ message: "Forbidden: you can't edit this course" });
//     }

//     const updateData = {
//       ...(title !== undefined && { title }),
//       ...(subTitle !== undefined && { subTitle }),
//       ...(description !== undefined && { description }),
//       ...(category !== undefined && { category }),
//       ...(level !== undefined && { level }),
//       ...(price !== undefined && { price }),
//       ...(isPublished !== undefined && { isPublished }),
//       thumbnail: thumbnailUrl || course.thumbnail,
//     };

//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, { new: true });
//     return res.status(200).json({ success: true, course: updatedCourse });
//   } catch (error) {
//     console.error("editCourse error:", error);
//     return res.status(500).json({ message: `Failed to edit course: ${error.message}` });
//   }
// };

// export const getCourseById = async (req, res) => {
//   try {
//     const { courseId } = req.params;
//     const course = await Course.findById(courseId);
//     if (!course) return res.status(404).json({ message: "Course not found" });
//     return res.status(200).json(course);
//   } catch (error) {
//     console.error("getCourseById error:", error);
//     return res.status(500).json({ message: `Failed to get course by id: ${error.message}` });
//   }
// };

// export const removeCourse = async (req, res) => {
//   try {
//     const { courseId } = req.params;
//     const course = await Course.findById(courseId);
//     if (!course) return res.status(404).json({ message: "Course not found" });

//     // optional: check ownership
//     const userId = req.user?._id || null;
//     if (!userId || String(course.creator) !== String(userId)) {
//       return res.status(403).json({ message: "Forbidden: you can't delete this course" });
//     }

//     await Course.findByIdAndDelete(courseId);
//     return res.status(200).json({ message: "Course removed successfully" });
//   } catch (error) {
//     console.error("removeCourse error:", error);
//     return res.status(500).json({ message: `Failed to delete course: ${error.message}` });
//   }
// };




// /// for Lecture

// export const createLecture = async (req,res) => {
//   try {
//     const {lectureTitle} = req.body
//     const {courseId} = req.params

//     // Zaroori pre-requisite: Course ko find karna, kyunki aage 'course' variable use ho raha hai
//     const course = await Course.findById(courseId);

//     // NOTE: Yeh logic ulta hai (agar fields hain toh error de raha hai)
//     // Lekin syntax theek hai, isliye isse barkaraar rakha gaya hai:
// //     if(!lectureTitle || !courseId){ 
// //       return res.status(400).json({message:"lectureTitle is required"})
// //     }

//     // SAHI — YE DAALO
// if (!lectureTitle?.trim()) {
//   return res.status(400).json({ message: "Lecture title is required" });
// }

//     const lecture = await Lecture.create({lectureTitle})
//     if(course){
//       course.lectures.push(lecture._id)
//     }
    
//     await course.save() // Save pehle karna hoga
//     await course.populate("lectures") // Phir populate karna

//     return res.status(201).json({lecture , course})

//   } catch (error) {
//     return res.status(500).json({message:`failed to create lecture ${error}`})
//   }
// }


// export const getCourseLecture = async (req,res) => {
//   try {
//     const {courseId} = req.params
    
//     // Course ko find kiya
//     const course = await Course.findById(courseId)
    
//     if(!course){
//       return res.status(404).json({message:"course is not found"}) // Status code 404 should be used for not found
//     }
    
//     // Lectures ko populate kiya
//     await course.populate("lectures")
    
//     // NOTE: get request mein save() ki zaroorat nahi hai.
//     // await course.save() // Hata diya kyunki yeh sirf read operation hai

//     return res.status(200).json(course)
//   } catch (error) {
//     return res.status(500).json({message:`failed to getCourse Lecture ${error}`})
//   }
// }


// export const editLecture = async (req,res) => {
//   try {
//     const {lectureId} = req.params
//     // ✅ SYNTAX FIX: Destructuring ke liye { } curly braces use kiye
//     const {isPreviewFree , lectureTitle} = req.body 
    
//     const lecture = await Lecture.findById(lectureId)
//     if(!lecture){
//       return res.status(404).json({message:"Lecture is not found"})
//     }
    
//     let videoUrl
//     if(req.file){
//       // Assuming uploadOnCloudinary is available
//       videoUrl = await uploadOnCloudinary(req.file.path)
//       lecture.videoUrl = videoUrl
//     }
    
//     if(lectureTitle){
//       lecture.lectureTitle = lectureTitle
//     }
    
//     // isPreviewFree ko set kiya (even if it's false)
//     lecture.isPreviewFree = isPreviewFree

//     await lecture.save()
//     return res.status(200).json(lecture)
//   } catch (error) {
//     return res.status(500).json({message:`failed to edit Lecture ${error}`})
//   }
// }


// export const removeLecture = async (req,res) => {
//   try {
//     const {lectureId} = req.params
    
//     const lecture = await Lecture.findByIdAndDelete(lectureId)
    
//     // ✅ LOGIC/SYNTAX FIX: 'if(lecture)' ko 'if(!lecture)' kiya taki not-found check sahi ho
//     if(!lecture){ 
//       return res.status(404).json({message:"Lecture is not found"})
//     }
    
//     // ✅ SYNTAX FIX: 'course.updateOne' ko 'Course.updateOne' kiya kyunki 'course' defined nahi tha
//     await Course.updateOne(
//         // Woh course dhoonda jismein yeh lectureId ho
//         { lectures: lectureId }, 
//         // Lecture ID ko lectures array se remove kiya
//       { $pull: { lectures: lectureId } }
//     )
    
//     return res.status(200).json({message:"Lecture Removed"})
//   } catch (error) {
//     return res.status(500).json({message:`failed to remove Lecture ${error}`})
//   }
// }


// ///get Creator

// export const getCreatorById = async (req,res) => {
//   try {
//     const {userId} = req.body

//     const user = await User.findById(userId).select("-password")

//     if(!user){
//       return res.status(404).json({message:"User is not Found"})
//     }
//     return res.status(200).json(user)

//   } catch (error) {
//     return res.status(500).json({message:`Failed to get Creator ${error}`})
//   }
// }







import uploadOnCloudinary from "../config/cloudinary.js";
import Course from "../models/courseModel.js";
import Lecture from "../models/lectureModel.js";
import User from "../models/userModel.js"; // <- IMPORTANT: was missing

/**
 * Create course
 * Expects multipart/form-data with field "thumbnail" (file)
 * Uses req.user._id (make sure isAuth sets req.user)
 */
export const createCourse = async (req, res) => {
  try {
    const { title, category } = req.body;
    if (!title || !category) {
      return res.status(400).json({ message: "Title and Category are required" });
    }

    // upload thumbnail (if provided) and get URL string
    let thumbnailUrl = "";
    if (req.file && req.file.path) {
      const uploaded = await uploadOnCloudinary(req.file.path);
      if (uploaded) thumbnailUrl = uploaded; // string
    }

    const creatorId = req.user?._id || req.userId || null;
    if (!creatorId) {
      // defensive: if isAuth didn't set req.user, return 401
      return res.status(401).json({ message: "Unauthorized" });
    }

    const course = await Course.create({
      title,
      category,
      creator: creatorId,
      thumbnail: thumbnailUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Course created successfully!",
      course,
    });
  } catch (error) {
    console.error("CreateCourse error:", error);
    return res.status(500).json({
      success: false,
      message: `CreateCourse error: ${error.message}`,
    });
  }
};

// export const getPublishedCourses = async (req, res) => {
//   try {
//     const courses = await Course.find({ isPublished: true }).populate("lectures");
//     return res.status(200).json(courses);
//   } catch (error) {
//     console.error("getPublishedCourses error:", error);
//     return res.status(500).json({ message: `Failed to get published courses: ${error.message}` });
//   }
// };
export const getPublishedCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true })
      .populate("lectures")
      .populate("creator", "name email photoUrl description");

    return res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getCreatorCourses = async (req, res) => {
  try {
    const userId = req.user?._id || req.userId || null;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const courses = await Course.find({ creator: userId });
    return res.status(200).json({ success: true, courses });
  } catch (error) {
    console.error("getCreatorCourses error:", error);
    return res.status(500).json({ message: `Failed to get creator courses: ${error.message}` });
  }
};

export const editCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, subTitle, description, category, level, isPublished, price } = req.body;

    // upload thumbnail if provided
    let thumbnailUrl = null;
    if (req.file && req.file.path) {
      const uploaded = await uploadOnCloudinary(req.file.path);
      if (uploaded) thumbnailUrl = uploaded; // string
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // optionally you may check ownership: only creator can edit
    const userId = req.user?._id || null;
    if (!userId || String(course.creator) !== String(userId)) {
      return res.status(403).json({ message: "Forbidden: you can't edit this course" });
    }

    const updateData = {
      ...(title !== undefined && { title }),
      ...(subTitle !== undefined && { subTitle }),
      ...(description !== undefined && { description }),
      ...(category !== undefined && { category }),
      ...(level !== undefined && { level }),
      ...(price !== undefined && { price }),
      ...(isPublished !== undefined && { isPublished }),
      thumbnail: thumbnailUrl || course.thumbnail,
    };

    const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, { new: true });
    return res.status(200).json({ success: true, course: updatedCourse });
  } catch (error) {
    console.error("editCourse error:", error);
    return res.status(500).json({ message: `Failed to edit course: ${error.message}` });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).populate("lectures");
    if (!course) return res.status(404).json({ message: "Course not found" });
    return res.status(200).json(course);
  } catch (error) {
    console.error("getCourseById error:", error);
    return res.status(500).json({ message: `Failed to get course by id: ${error.message}` });
  }
};

export const removeCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // optional: check ownership
    const userId = req.user?._id || null;
    if (!userId || String(course.creator) !== String(userId)) {
      return res.status(403).json({ message: "Forbidden: you can't delete this course" });
    }

    await Course.findByIdAndDelete(courseId);
    return res.status(200).json({ message: "Course removed successfully" });
  } catch (error) {
    console.error("removeCourse error:", error);
    return res.status(500).json({ message: `Failed to delete course: ${error.message}` });
  }
};

/// for Lecture

export const createLecture = async (req, res) => {
  try {
    const { lectureTitle } = req.body;
    const { courseId } = req.params;

    // find course first
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (!lectureTitle?.trim()) {
      return res.status(400).json({ message: "Lecture title is required" });
    }

    const lecture = await Lecture.create({ lectureTitle });
    course.lectures.push(lecture._id);

    await course.save();
    await course.populate("lectures");

    return res.status(201).json({ lecture, course });
  } catch (error) {
    console.error("createLecture error:", error);
    return res.status(500).json({ message: `failed to create lecture ${error.message}` });
  }
};

export const getCourseLecture = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "course is not found" });
    }

    await course.populate("lectures");
    return res.status(200).json(course);
  } catch (error) {
    console.error("getCourseLecture error:", error);
    return res.status(500).json({ message: `failed to getCourse Lecture ${error.message}` });
  }
};

export const editLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const { isPreviewFree, lectureTitle } = req.body;

    const lecture = await Lecture.findById(lectureId);
    if (!lecture) {
      return res.status(404).json({ message: "Lecture is not found" });
    }

    let videoUrl;
    if (req.file) {
      videoUrl = await uploadOnCloudinary(req.file.path);
      lecture.videoUrl = videoUrl;
    }

    if (lectureTitle) {
      lecture.lectureTitle = lectureTitle;
    }

    lecture.isPreviewFree = isPreviewFree;

    await lecture.save();
    return res.status(200).json(lecture);
  } catch (error) {
    console.error("editLecture error:", error);
    return res.status(500).json({ message: `failed to edit Lecture ${error.message}` });
  }
};

export const removeLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const lecture = await Lecture.findByIdAndDelete(lectureId);

    if (!lecture) {
      return res.status(404).json({ message: "Lecture is not found" });
    }

    await Course.updateOne({ lectures: lectureId }, { $pull: { lectures: lectureId } });

    return res.status(200).json({ message: "Lecture Removed" });
  } catch (error) {
    console.error("removeLecture error:", error);
    return res.status(500).json({ message: `failed to remove Lecture ${error.message}` });
  }
};

///get Creator
export const getCreatorById = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ message: "userId is required" });

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User is not Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error("getCreatorById error:", error);
    return res.status(500).json({ message: `Failed to get Creator ${error.message}` });
  }
};
