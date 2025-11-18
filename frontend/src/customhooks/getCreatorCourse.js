// // src/customhooks/getCreatorCourse.js
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { setCreatorCourseData } from "../redux/courseSlice";

// const useGetCreatorCourse = () => {
//   const dispatch = useDispatch();
//   const { userData } = useSelector((state) => state.user);

//   useEffect(() => {
//     if (!userData?._id) return;

//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get(`${serverUrl}/api/course/getcreator`, {
//           withCredentials: true,
//         });
//         console.log("API Response:", res.data);
//         dispatch(setCreatorCourseData(res.data.courses || []));
//       } catch (error) {
//         console.log("Error:", error);
//       }
//     };

//     fetchCourses();
//   }, [userData, dispatch]);
// };

// export default useGetCreatorCourse;



// src/customhooks/getCreatorCourse.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { serverUrl } from "../App";
import { setCreatorCourseData } from "../redux/courseSlice";

const useGetCreatorCourse = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userData?._id) return;

    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/course/getcreator`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);
        dispatch(setCreatorCourseData(res.data.courses || []));
      } catch (error) {
        console.log("Error:", error.response?.data || error.message);
      }
    };

    fetchCourses();
  }, [userData, dispatch]);
};

export default useGetCreatorCourse;