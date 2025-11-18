// import React, { use, useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
// import {setUserData} from '../redux/userSlice';

// function EditProfile(){
//     const { userData } = useSelector((state) => state.user) || {};
//     const navigate = useNavigate();
//     const [name , setName] = useState(userData.name || "")
//     const [description , setDescription] = useState(userData.description || "")
//     const [photoUrl , setPhotoUrl] = useState(null)
//     const [loading , setLoading] = useState(false)
//     const dispatch = useDispatch()

//     const formData = new FormData()
//     formData.append("name",name)
//     formData.append("description",description)
//     formData.append("photoUrl",photoUrl)


//     const handleEditProfile = async () => {
//         setLoading(true)
//         try {
//             const result = await axios.post(serverUrl + "api/user/profile" , formData , {withCredentials:true})
//             dispatch(setUserData(result.data))
//             setLoading(false)
//             navigate("/")
//             toast.success("Profile Updated")
//         } catch (error) {
//             setLoading(false)
//             console.log(error)
//             toast.error(error.response.data.message)
//         }
//     }


//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10'>

//     <div className='bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full relative'>
//         {/* 🔙 Back Button */}
//              <FaArrowLeftLong
//                className="absolute top-[5%] left-[5%] w-[22px] h-[22px] cursor-pointer"
//                onClick={() => navigate("/profile")}/>

//                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Edit Profile</h2>

//                <form action="" className='space-y-5' onSubmit={(e)=>e.preventDefault()}>
                 
//                    <div className='flex flex-col items-center text-center'>
                     
//                      <div className="w-28 h-28 text-white flex items-center justify-center text-[32px] bg-black rounded-full border-[5px] border-white shadow-md">
//                       {userData.user.name?.charAt(0).toUpperCase() || "U"}
//                      </div>
//                    </div>

//                    <div>
//                     <label htmlFor="image" className='text-sm font-medium text-gray-700'>Select Avatar</label>
//                     <input type="file" id='image' name='photoUrl' placeholder='photoUrl' accept='image/*' className='w-full px-4 py-2 border rounded-md text-sm' onChange={(e)=>setPhotoUrl(e.target.files[0])} />
//                    </div>

//                    <div>
//                     <label htmlFor="name" className='text-sm font-medium text-gray-700'>UserName</label>
//                     <input type="text" id='name' placeholder={userData.name} accept='image/*' className='w-full px-4 py-2 border rounded-md text-sm' onCanPlay={(e)=>setName(e.target.value)} value={name} />
//                    </div>

//                    <div>
//                     <label className='text-sm font-medium text-gray-700'>Email</label>
//                     <input type="readOnly" placeholder={userData.email} className='w-full px-4 py-2 border rounded-md text-sm' />
//                    </div>

//                     <div>
//                     <label className='text-sm font-medium text-gray-700'>Bio</label>
//                     <textarea name='desciption' placeholder='Tell us about yourself' rows={3} className='w-full mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-[black]' onChange={(e)=>setDescription(e.target.value)} value={description}/>
//                     </div>

//                     <button className='w-full bg-[black] active:bg-[#454545] text-white py-2 rounded-b-md font-medium transition cursor-pointer'disabled={loading} onClick={handleEditProfile}>{loading?<ClipLoader size={30} color='white'/>:"Save Changes"}</button>

                


//                </form>
//     </div>
     




//     </div>
//   )
// }

// export default EditProfile


// src/pages/EditProfile.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../redux/userSlice";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function EditProfile() {
  const { userData } = useSelector((state) => state.user) || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(userData.user?.name || "");
  const [description, setDescription] = useState(userData.user?.description || "");
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEditProfile = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (photoUrl) formData.append("photo", photoUrl); // "photo" naam backend mein

    try {
      const result = await axios.post(
        `${serverUrl}/api/user/update-profile`,
        formData,
        { withCredentials: true }
      );
      dispatch(setUserData(result.data));
      toast.success("Profile Updated!");
      setLoading(false);
      navigate("/profile");
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full relative">
        {/* Back Button */}
        <FaArrowLeftLong
          className="absolute top-[5%] left-[5%] w-[22px] h-[22px] cursor-pointer"
          onClick={() => navigate("/profile")}
        />

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Edit Profile
        </h2>

        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Avatar */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 text-white flex items-center justify-center text-[32px] bg-black rounded-full border-[5px] border-white shadow-md">
              {userData.user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <label htmlFor="image" className="text-sm font-medium text-gray-700">
              Select Avatar
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md text-sm"
              onChange={(e) => setPhotoUrl(e.target.files[0])}
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              UserName
            </label>
            <input
              type="text"
              id="name"
              placeholder={userData.user?.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-sm"
            />
          </div>

          {/* Email (Read Only) */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              readOnly
              value={userData.user?.email || ""}
              className="w-full px-4 py-2 border rounded-md text-sm bg-gray-100"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="text-sm font-medium text-gray-700">Bio</label>
            <textarea
              placeholder="Tell us about yourself"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-black focus:border-black"
            />
          </div>

          {/* Save Button */}
          <button
            type="button"
            disabled={loading}
            onClick={handleEditProfile}
            className="w-full bg-black active:bg-[#454545] text-white py-2 rounded-md font-medium transition cursor-pointer flex items-center justify-center"
          >
            {loading ? <ClipLoader size={30} color="white" /> : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;