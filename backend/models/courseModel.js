// import mongoose from "mongoose"

// const courseSchema = new mongoose.Schema({
// title:{
//     type:String,
//     required:true
// },
// subTitle:{
//     type:String,
// },
// description:{
//     type:String,
// },
// category:{
//     type:String,
//     required:true
// },

// level:{
//     type:String,
//     enum:["Beginner" , "Intermediate" , "Advanced"]
// },
// price:{
//     type:Number,
// },

// thumbnail:{
//     type:String,
//     required:true
// },

// enrolledStudents:[{
//     type:mongoose.Schema.Types.ObjectId,
//     red:"User"
// }],

// lectures:[{
//     type:mongoose.Schema.Types.ObjectId,
//     red:"Lecture"
// }],

// creator:{
//     type:mongoose.Schema.Types.ObjectId,
//     red:"User"
// },

// isPublished:{
//     type:Boolean,
//     default:false
// },

// reviews:[{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'Review'
// }]
    

// },{timestamps:true})

// const Course = mongoose.model("Course" , courseSchema)

// export default Course


import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String },
    description: { type: String },
    category: { type: String, required: true },
    level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"] },
    price: { type: Number },
    thumbnail: { type: String },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // ref
    lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lecture" }], // ref
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // ref
    isPublished: { type: Boolean, default: false },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;