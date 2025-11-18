// import { createSlice } from "@reduxjs/toolkit";

// const courseSlice = createSlice({
//   name: "course",
//   initialState: { creatorCourseData: null },
//   reducers: {
//     setCreatorCourseData: (state, action) => {
//       state.creatorCourseData = action.payload;
//     },
//   },
// });

// export const { setCreatorCourseData } = courseSlice.actions;
// export default courseSlice.reducer;



// // src/redux/courseSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const courseSlice = createSlice({
//   name: "course",
//   initialState: {
//     creatorCourseData: [],
//   },
//   reducers: {
//     setCreatorCourseData: (state, action) => {
//       state.creatorCourseData = action.payload || [];
//     },
//   },
// });

// export const { setCreatorCourseData } = courseSlice.actions;
// export default courseSlice.reducer;






// // src/redux/courseSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const courseSlice = createSlice({
//   name: "course",
//   initialState: {
//     creatorCourseData: [],
//     CourseData:null
//   },
//   reducers: {
//     setCreatorCourseData: (state, action) => {
//       state.creatorCourseData = action.payload;
//     },

//     setCourseData: (state, action) => {
//       state.CourseData = action.payload;
//     },
//   },
// });

// export const { setCreatorCourseData } = courseSlice.actions;
// export const {setCourseData} = courseSlice.actions
// export default courseSlice.reducer;







// // src/redux/courseSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const courseSlice = createSlice({
//   name: "course",
//   initialState: {
//     creatorCourseData: [],
//     courseData: null,
//   },
//   reducers: {
//     setCreatorCourseData: (state, action) => {
//       state.creatorCourseData = action.payload;
//     },

//     setCourseData: (state, action) => {
//       state.courseData = action.payload;
//     },
//   },
// });

// export const { setCreatorCourseData, setCourseData } = courseSlice.actions;
// export default courseSlice.reducer;








// src/redux/courseSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courseData: [], // published courses
    creatorCourseData: [],
    selectedCourse:null // educator's courses (Yeh list UI mein dikhti hai)
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourseData: (state, action) => {
            state.courseData = action.payload;
        },
        setCreatorCourseData: (state, action) => {
            state.creatorCourseData = action.payload;
        },
        
        // 🚀 FIX 1: Course ko Edit karne ke liye
        updateCreatorCourse: (state, action) => {
            // Updated course object ko purane course se replace kar dega
            const index = state.creatorCourseData.findIndex(
                (course) => course._id === action.payload._id 
            );
            if (index !== -1) {
                state.creatorCourseData[index] = action.payload;
            }
        },

        // 🚀 FIX 2: Course ko Remove karne ke liye
        removeCreatorCourse: (state, action) => {
            // Di gayi ID wale course ko list se hata dega
            state.creatorCourseData = state.creatorCourseData.filter(
                (course) => course._id !== action.payload
            );
        },

        setSelectedCourse:(state,action)=>{
            state.selectedCourse = action.payload
        }
    },
});

export const { 
    setCourseData,
    setCreatorCourseData, 
    updateCreatorCourse, // Naya Export
    removeCreatorCourse, // Naya Export
    setSelectedCourse

} = courseSlice.actions;

export default courseSlice.reducer;