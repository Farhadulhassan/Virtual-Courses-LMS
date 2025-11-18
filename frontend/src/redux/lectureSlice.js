import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Is array mein currently edit ho rahe course ke saare lectures honge.
    // Structure: [{ _id, courseId, lectureTitle, videoUrl, orderIndex, ... }, ...]
    currentCourseLectures: [], 
};

const lectureSlice = createSlice({
    name: 'lecture',
    initialState,
    reducers: {
        // 1. Lectures ko fetch karne ke baad state mein set karna
        setLectures: (state, action) => {
            // Action payload: array of lecture objects
            state.currentCourseLectures = action.payload;
        },

        // 2. Naya lecture create hone par list mein add karna
        addLecture: (state, action) => {
            // Action payload: single new lecture object
            state.currentCourseLectures.push(action.payload);
        },

        // 3. Kisi existing lecture ko edit karne par update karna
        updateLecture: (state, action) => {
            // Action payload: updated lecture object
            const updatedLecture = action.payload;
            const index = state.currentCourseLectures.findIndex(
                (lecture) => lecture._id === updatedLecture._id
            );
            
            if (index !== -1) {
                state.currentCourseLectures[index] = updatedLecture;
            }
        },

        // 4. Lecture ko remove karne par list se hatana
        removeLecture: (state, action) => {
            // Action payload: lecture ID (string)
            const lectureIdToRemove = action.payload;
            state.currentCourseLectures = state.currentCourseLectures.filter(
                (lecture) => lecture._id !== lectureIdToRemove
            );
        },

        // 5. Jab user course se wapas chala jaye, toh state ko reset karna
        clearLectures: (state) => {
            state.currentCourseLectures = [];
        }
    },
});

export const {
    setLectures,
    addLecture,
    updateLecture,
    removeLecture,
    clearLectures
} = lectureSlice.actions;

export default lectureSlice.reducer;