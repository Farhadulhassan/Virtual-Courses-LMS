// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// import courseSlice from "./courseSlice";
// export const store = configureStore({
//   reducer: { 
//     user: userSlice,
//     course:courseSlice
//    },

// });










// src/redux/store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userSlice from "./userSlice";
import courseSlice from "./courseSlice";
import lectureSlice from "./lectureSlice";

// 1. Persist Configuration
const persistConfig = {
  key: 'root', 
  version: 1,
  storage,
  // Dhyan dein: 'user' aur 'course' dono slices ko persist kar rahe hain
  whitelist: ['user', 'course'], 
};

// 2. Root Reducer banane ke liye combineReducers use kiya gaya hai
const rootReducer = combineReducers({
  user: userSlice,
  course: courseSlice,
  lecture: lectureSlice,
});

// 3. Root Reducer ko persistReducer se wrap karna
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Store Configuration
export const store = configureStore({
  reducer: persistedReducer, // Ab sirf persistedReducer use hoga
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Redux Persist actions ko ignore karein
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Persistor create karna
export const persistor = persistStore(store);