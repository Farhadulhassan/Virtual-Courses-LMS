// src/pages/PaymentDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import img from "../assets/empty.jpg";

function PaymentDetails() {
  const { courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [course, setCourse] = useState(location.state?.course || null);
  const [loading, setLoading] = useState(!course);

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  // Agar state se course nahi mila to direct API se fetch kar lo
  useEffect(() => {
    if (!course && courseId) {
      const fetchCourse = async () => {
        try {
          const res = await axios.get(`${serverUrl}/api/course/getpublished`);
          const found = res.data.find(c => c._id === courseId);
          if (found) {
            setCourse(found);
            setLoading(false);
          } else {
            toast.error("Course not found");
            navigate("/");
          }
        } catch (err) {
          toast.error("Failed to load course");
          navigate("/");
        }
      };
      fetchCourse();
    }
  }, [courseId, course, serverUrl, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading course details...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Course not found! <button onClick={() => navigate("/")} className="ml-4 underline">Go Home</button>
      </div>
    );
  }

  // Baaki tumhara payment form yahan se shuru hoga (jo pehle diya tha)
  const paymentMethods = {
    easypaisa: { name: "Easypaisa", number: "0345-1234567", holder: "Ahmad Khan" },
    jazzcash: { name: "JazzCash", number: "0300-9876543", holder: "Ahmad Khan" },
    bank: { name: "Bank Transfer", number: "PK68MEZN0001012345678901", holder: "Ahmad Khan", bank: "Meezan Bank" }
  };

  const [method, setMethod] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  const handleSubmit = () => {
    if (!method || !screenshot) return toast.error("Complete all fields");
    toast.success("Payment proof submitted! Verification within 5 minutes");
    setTimeout(() => navigate("/my-courses"), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        
        {/* Left: Course Card */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <img src={course.thumbnail || img} alt={course.title} className="w-full h-64 object-cover rounded-lg" />
          <h1 className="text-3xl font-bold mt-6">{course.title}</h1>
          <p className="text-gray-600 mt-2">{course.subTitle}</p>
          <div className="text-4xl font-bold text-green-600 mt-6">PKR {course.price}</div>
        </div>

        {/* Right: Payment Form */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Complete Payment</h2>

          <div className="space-y-6">
            {Object.entries(paymentMethods).map(([key, val]) => (
              <label key={key} className={`block p-5 border-2 rounded-xl cursor-pointer transition-all ${method === key ? 'border-black bg-black/5' : 'border-gray-300'}`}>
                <input type="radio" name="method" value={key} onChange={(e) => setMethod(e.target.value)} className="mr-3" />
                <span className="text-xl font-bold">{val.name}</span>
                {method === key && (
                  <div className="mt-4 bg-gray-50 p-5 rounded-lg text-sm">
                    <p><strong>Account Holder:</strong> {val.holder}</p>
                    <p><strong>{val.bank ? 'IBAN' : 'Number'}:</strong> <span className="font-mono text-lg">{val.number}</span></p>
                    {val.bank && <p><strong>Bank:</strong> {val.bank}</p>}
                  </div>
                )}
              </label>
            ))}

            {method && (
              <>
                <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg">
                  <p className="font-bold">Important:</p>
                  <p>Send exact amount → Take screenshot → Upload below</p>
                </div>

                <input type="file" accept="image/*" onChange={(e) => setScreenshot(e.target.files[0])} className="w-full p-4 border-2 rounded-lg" required />

                <button onClick={handleSubmit} className="w-full bg-black text-white py-5 rounded-xl font-bold text-xl hover:bg-gray-800 transition">
                  Submit Payment Proof
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;