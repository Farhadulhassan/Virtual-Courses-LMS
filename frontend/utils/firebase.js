// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "lms-virtual-courses.firebaseapp.com",
//   projectId: "lms-virtual-courses",
//   storageBucket: "lms-virtual-courses.firebasestorage.app",
//   messagingSenderId: "318981237195",
//   appId: "1:318981237195:web:d390ec79fbbc2d40b6ee4e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

// export {auth,provider}



// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// DEBUG LINE
console.log("API KEY FROM .env:", import.meta.env.VITE_FIREBASE_APIKEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lms-virtual-courses.firebaseapp.com",
  projectId: "lms-virtual-courses",
  storageBucket: "lms-virtual-courses.firebasestorage.app",
  messagingSenderId: "318981237195",
  appId: "1:318981237195:web:d390ec79fbbc2d40b6ee4e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
