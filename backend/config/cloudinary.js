// import { v2 as cloudinary } from 'cloudinary'
// import fs from "fs"

// const uploadCloudinary = async (filePath) => {
//     cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// }

// try {
//      if(!filePath){
//         return null
//      }
//      const uploadResult = await cloudinary.uploader.upload(filePath,{resource_type:'auto'})
//      fs.unlinkSync(filePath)
//      return uploadResult.secure_url

// } catch (error) {
//     fs.unlinkSync(filePath)
//     console.log(error)
// }

// export default uploadCloudinary


// // backend/config/cloudinary.js
// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// // CONFIGURE CLOUDINARY (EK BAAR, BAHAR)
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadCloudinary = async (filePath) => {
//   try {
//     if (!filePath) return null;

//     const result = await cloudinary.uploader.upload(filePath, {
//       resource_type: "auto",
//       folder: "lms_uploads",
//       width: 500,
//       height: 500,
//       crop: "limit",
//     });

//     // Delete local file after upload
//     fs.unlink(filePath, (err) => {
//       if (err) console.log("File delete error:", err);
//     });

//     return result.secure_url;
//   } catch (error) {
//     // Delete file even if upload fails
//     fs.unlink(filePath, (err) => {
//       if (err) console.log("File delete error:", err);
//     });
//     console.log("Cloudinary Upload Error:", error);
//     return null;
//   }
// };

// export default uploadCloudinary;


// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// // CONFIGURE CLOUDINARY
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (filePath) => {
//   try {
//     if (!filePath) return null;

//     const result = await cloudinary.uploader.upload(filePath, {
//       resource_type: "auto",
//       folder: "lms_uploads",
//       width: 500,
//       height: 500,
//       crop: "limit",
//     });

//     // Delete local file after upload
//     fs.unlinkSync(filePath);

//     return result; // ✅ return whole object (not just secure_url)
//   } catch (error) {
//     if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
//     console.error("Cloudinary Upload Error:", error);
//     return null;
//   }
// };

// export default uploadOnCloudinary;






// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (filePath) => {
//   try {
//     if (!filePath) return null;

//     const result = await cloudinary.uploader.upload(filePath, {
//       resource_type: "auto",
//       folder: "lms_uploads",
//       width: 500,
//       height: 500,
//       crop: "limit",
//     });

//     fs.unlinkSync(filePath);

//     // ✅ Return only the URL
//     return result.secure_url;
//   } catch (error) {
//     if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
//     console.error("Cloudinary Upload Error:", error);
//     return null;
//   }
// };

// export default uploadOnCloudinary;

















// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (filePath) => {
//   try {
//     if (!filePath) return null;

//     const result = await cloudinary.uploader.upload(filePath, {
//       folder: "lms_uploads",
//       resource_type: "image",
//       width: 1200,
//       height: 1200,
//       crop: "limit",
//     });

//     // remove local file
//     try {
//       if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
//     } catch (e) {
//       console.warn("Failed to unlink local file:", e.message);
//     }

//     // return only the secure URL (string)
//     return result.secure_url || result.url || null;
//   } catch (error) {
//     // cleanup on error
//     try {
//       if (filePath && fs.existsSync(filePath)) fs.unlinkSync(filePath);
//     } catch (e) {
//       console.warn("Cleanup failed:", e.message);
//     }
//     console.error("Cloudinary upload error:", error);
//     return null;
//   }
// };

// export default uploadOnCloudinary;












import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "lms_uploads",
      resource_type: "auto", // IMPORTANT FIX
    });

    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    return result.secure_url || result.url;
  } catch (error) {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    console.error("Cloudinary error:", error);
    return null;
  }
};

export default uploadOnCloudinary;
