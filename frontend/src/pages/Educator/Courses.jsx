// src/pages/Educator/Courses.jsx
import React from "react";
import { FaArrowLeft, FaPen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetCreatorCourse from "../../customhooks/getCreatorCourse";
import img from "../../assets/empty.jpg";

function Courses() {
  const navigate = useNavigate();
  useGetCreatorCourse(); // HOOK CALL

  const { creatorCourseData } = useSelector((state) => state.course);

  if (!creatorCourseData) {
    return (
      <div className="flex min-h-screen bg-gray-100 justify-center items-center">
        <p className="text-gray-600">Loading courses...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full p-4 sm:p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <FaArrowLeft
              className="w-6 h-6 cursor-pointer"
              onClick={() => navigate("/dashboard")}
            />
            <h1 className="text-2xl font-semibold">All Created Courses</h1>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={() => navigate("/educator/create-course")}
          >
            Create Course
          </button>
        </div>

        {/* LARGE SCREEN: TABLE */}
        <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4">Courses</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {creatorCourseData.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-gray-500">
                    No courses created yet.
                  </td>
                </tr>
              ) : (
                creatorCourseData.map((course) => (
                  <tr key={course._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 flex items-center gap-4">
                      <img
                        src={course.thumbnail || img}
                        alt={course.title}
                        className="w-20 h-14 object-cover rounded-md"
                      />
                      <span>{course.title}</span>
                    </td>
                    <td className="px-4 py-3">
                      {course.price ? `₹${course.price}` : "₹ N/A"}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          course.isPublished
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {course.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <FaPen
                        className="text-gray-600 hover:text-blue-600 cursor-pointer"
                        onClick={() => navigate(`/educator/editcourse/${course._id}`)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* SMALL SCREEN: CARDS */}
        <div className="md:hidden space-y-4">
          {creatorCourseData.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No courses created yet.</p>
          ) : (
            creatorCourseData.map((course) => (
              <div key={course._id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex gap-4 items-center">
                  <img
                    src={course.thumbnail || img}
                    alt={course.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{course.title}</h3>
                    <p className="text-sm text-gray-600">
                      {course.price ? `₹${course.price}` : "₹ N/A"}
                    </p>
                  </div>
                  <FaPen
                    className="text-gray-600 hover:text-blue-600 cursor-pointer"
                    onClick={() => navigate(`/educator/editcourse/${course._id}`)}
                  />
                </div>
                <span
                  className={`mt-2 inline-block px-3 py-1 text-xs rounded-full ${
                    course.isPublished ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {course.isPublished ? "Published" : "Draft"}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;