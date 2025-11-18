// src/customhooks/useGetCurrentUser.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
import axios from "axios";
import { serverUrl } from "../App";

const useGetCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/auth/me`, {
          withCredentials: true,
        });
        dispatch(setUserData(result.data));
      } catch (error) {
        console.log("Auto-fetch user failed (not logged in)");
        dispatch(setUserData(null));
      }
    };
    fetchUser();
  }, [dispatch]);
};

export default useGetCurrentUser;



// // src/customhooks/usegetCurrentUser.js
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice";
// import axios from "axios";
// import { serverUrl } from "../App";

// const useGetCurrentUser = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get(`${serverUrl}/api/auth/me`, {
//           withCredentials: true,
//         });
//         dispatch(setUserData(res.data));
//       } catch (error) {
//         // No user → silent fail
//       }
//     };
//     fetchUser();
//   }, [dispatch]);
// };

// export default useGetCurrentUser;