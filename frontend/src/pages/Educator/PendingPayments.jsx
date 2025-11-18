// // src/pages/educator/PendingPayments.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function PendingPayments() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const serverUrl = import.meta.env.VITE_SERVER_URL;

//   useEffect(() => {
//     fetchPendingPayments();
//   }, []);

//   const fetchPendingPayments = async () => {
//     try {
//       const res = await axios.get(`${serverUrl}/api/payment/pending`);
      
//       // YE LINE SABSE ZAROORI — agar array nahi hai to empty array bana do
//       const data = Array.isArray(res.data) ? res.data : [];
//       setPayments(data);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to load payments");
//       setPayments([]); // error pe bhi empty array
//       setLoading(false);
//     }
//   };

//   const verifyPayment = async (id) => {
//     try {
//       await axios.post(`${serverUrl}/api/payment/verify/${id}`);
//       toast.success("Payment Verified!");
//       fetchPendingPayments(); // refresh list
//     } catch (err) {
//       toast.error("Verification failed");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-2xl">
//         Loading pending payments...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold mb-8 text-center">Pending Payments</h1>

//         {payments.length === 0 ? (
//           <div className="bg-white rounded-xl shadow-lg p-16 text-center text-gray-500 text-xl">
//             No pending payments yet  
//           </div>
//         ) : (
//           <div className="grid gap-8">
//             {payments.map((p) => (
//               <div key={p._id} className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 border-2 border-gray-200">
                
//                 {/* Screenshot */}
//                 <div className="cursor-pointer" onClick={() => window.open(p.screenshot, '_blank')}>
//                   <img src={p.screenshot} alt="Proof" className="w-48 h-64 object-cover rounded-lg shadow-md hover:scale-105 transition" />
//                 </div>

//                 {/* Details */}
//                 <div className="flex-1 space-y-3 text-lg">
//                   <p><strong>Student:</strong> {p.userName} ({p.userEmail})</p>
//                   <p><strong>Course:</strong> {p.courseTitle || "N/A"}</p>
//                   <p><strong>Method:</strong> {p.paymentMethod?.toUpperCase()}</p>
//                   <p><strong>Amount:</strong> PKR {p.amount || "N/A"}</p>
//                   <p><strong>Date:</strong> {new Date(p.createdAt).toLocaleString()}</p>
//                 </div>

//                 {/* Verify Button */}
//                 <button
//                   onClick={() => verifyPayment(p._id)}
//                   className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-lg transition"
//                 >
//                   Verify Payment
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PendingPayments;