import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Pencil } from 'lucide-react';

const serverUrl = 'http://localhost:8000';

const LoadingSpinner = ({ color = 'black', size = 40 }) => (
  <svg
    className="animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    style={{ width: size, height: size }}
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke={color}
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill={color}
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

function CreateLecture() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [lectureTitle, setLectureTitle] = useState("");
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  const fetchLectures = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/api/course/courselecture/${courseId}`, { 
        withCredentials: true 
      });
      const list = response.data.lectures || [];
      setLectures(list);
    } catch (error) {
      toast.error("Failed to load lectures");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, [courseId]);

  const handleCreateLecture = async (e) => {
    e.preventDefault();

    if (!lectureTitle.trim()) {
      return toast.error("Lecture title is required");
    }

    setIsCreating(true);

    try {
      await axios.post(
        `${serverUrl}/api/course/createlecture/${courseId}`,
        { lectureTitle },
        { withCredentials: true }
      );

      toast.success("Lecture created successfully");
      setLectureTitle("");
      fetchLectures();

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create lecture");
    } finally {
      setIsCreating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center bg-gray-100">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-extrabold mb-2">Let's Add a Lecture</h1>
        <p className="text-gray-600 mb-8">
          Enter the title and add your video lectures to enhance your course content.
        </p>

        <form onSubmit={handleCreateLecture} className="space-y-4 mb-10">

          <input
            type="text"
            value={lectureTitle}
            onChange={(e) => setLectureTitle(e.target.value)}
            placeholder="e.g. Introduction to Mern Stack"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-black focus:border-black"
            disabled={isCreating}
          />

          <div className="flex items-center space-x-4 pt-2">

            {/* Back to Course */}
            <button
              type="button"
              onClick={() => navigate(`/educator/editcourse/${courseId}`)}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            >
              <FaArrowLeftLong />
              <span>Back to Course</span>
            </button>

            {/* Create Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 disabled:opacity-60 transition"
              disabled={isCreating}
            >
              {isCreating ? <LoadingSpinner color="white" size={20} /> : "+ Create Lecture"}
            </button>

          </div>
        </form>

        {/* Lecture List */}
        <h2 className="text-xl font-bold mt-10 mb-4">Lecture List ({lectures.length})</h2>

        {lectures.length === 0 ? (
          <div className="text-gray-500 p-4 border rounded-xl text-center">
            No lectures added yet. Start by creating one above!
          </div>
        ) : (
          <div className="space-y-3">
            {lectures.map((lec, index) => (
              <div
                key={lec._id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <span className="font-medium">
                  Lecture - {index + 1}: {lec.lectureTitle}
                </span>

                {/* PENCIL ICON — CLICK KAREGA */}
                <button 
                  onClick={() => navigate(`/educator/editlecture/${lec._id}`)} 
                  className="p-2 hover:text-black text-gray-500 transition-colors"
                  title="Edit Lecture"
                >
                  <Pencil size={18} />
                </button>

                

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default CreateLecture;
