// // src/pages/Educator/EditLecture.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa6';

const serverUrl = 'http://localhost:8000';

function EditLecture() {
  const navigate = useNavigate();
  const { lectureId } = useParams();

  const [lectureTitle, setLectureTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoName, setVideoName] = useState("No file chosen");
  const [isPreviewFree, setIsPreviewFree] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // FETCH LECTURE DATA
  useEffect(() => {
    const fetchLecture = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/course/getlecture/${lectureId}`, {
          withCredentials: true
        });
        const lec = res.data.lecture;
        setLectureTitle(lec.lectureTitle || "");
        setIsPreviewFree(lec.isPreviewFree || false);
        setVideoName(lec.videoUrl ? "Video already uploaded" : "No file chosen");
      } catch (error) {
        // toast.error("Failed to load lecture");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (lectureId) fetchLecture();
  }, [lectureId]);

  // HANDLE FILE CHANGE
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoName(file.name);
    }
  };

  // REMOVE LECTURE
  const handleRemove = async () => {
    if (!window.confirm("Are you sure you want to delete this lecture?")) return;

    try {
      await axios.delete(`${serverUrl}/api/course/removelecture/${lectureId}`, {
        withCredentials: true
      });
      toast.success("Lecture removed!");
      navigate(-1);
    } catch (error) {
      toast.error("Failed to remove lecture");
    }
  };

  // SAVE LECTURE
  const handleSave = async (e) => {
    e.preventDefault();
    if (!lectureTitle.trim()) return toast.error("Title is required");

    setSaving(true);
    const formData = new FormData();
    formData.append("lectureTitle", lectureTitle);
    formData.append("isPreviewFree", isPreviewFree);
    if (videoFile) formData.append("videoUrl", videoFile);

    try {
      await axios.post(
        `${serverUrl}/api/course/editlecture/${lectureId}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      toast.success("Lecture updated successfully!");
      navigate(-1);
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-black"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <div className="bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Update Your Lecture</h1>
        </div>

        {/* Remove Button */}
        <button
          onClick={handleRemove}
          className="mb-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition text-sm font-medium"
        >
          Remove Lecture
        </button>

        <form onSubmit={handleSave} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={lectureTitle}
              onChange={(e) => setLectureTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-black outline-none transition"
              placeholder="e.g. Introduction to Backend"
            />
          </div>

          {/* Video Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Video <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <label className="cursor-pointer bg-gray-800 text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition text-sm font-medium">
                Choose File
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-sm text-gray-600 truncate max-w-xs">
                {videoName}
              </span>
            </div>
          </div>

          {/* Free Preview */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="free"
              checked={isPreviewFree}
              onChange={(e) => setIsPreviewFree(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 focus:ring-black"
            />
            <label htmlFor="free" className="text-sm font-medium text-gray-700">
              Is this video FREE
            </label>
          </div>

          {/* Update Button */}
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-900 disabled:opacity-60 transition text-lg"
          >
            {saving ? "Updating..." : "Update Lecture"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default EditLecture;