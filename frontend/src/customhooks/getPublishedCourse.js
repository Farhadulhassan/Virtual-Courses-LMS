// import React from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// import {serverUrl} from '../App'
// import { useDispatch } from 'react-redux'
// import { setCourseData } from '../redux/courseSlice'


// const getPublishedCourse = () => {


//   const dispatch = useDispatch()  
//     useEffect(()=>{

//      const getCourseData = async () => {
//         try {
//             const result = await axios.get(serverUrl + "/api/course/getpublished" , {withCredentials:true})
//             dispatch(setCourseData(result.data
//                 console.log(result.data)
//             ))
//         } catch (error) {
//             console.log(error)
//         }
//      }
//       getCourseData
//     },[])
// }



// export default getPublishedCourse









import React, { useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '/src/App.jsx?t=1763112922396'; // Make sure this path is correct
import { useDispatch } from 'react-redux';
import { setCourseData } from '/src/redux/courseSlice.js?t=1763112370468';

// REQUIRED FIX: Renamed to start with 'use' to be a valid Custom Hook
const usePublishedCourse = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        const getCourseData = async () => {
            try {
                const result = await axios.get(serverUrl + "/api/course/getpublished", { withCredentials: true });
                dispatch(setCourseData(result.data)); 
                console.log(result.data);
            } catch (error) {
                console.error("Error fetching published course:", error);
            }
        };

        getCourseData();
    }, [dispatch]); 
};

export default usePublishedCourse;