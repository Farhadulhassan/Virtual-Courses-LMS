// // server/routes/paymentRoutes.js
// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import Payment from '../models/Payment.js'; // tumhara model

// const router = express.Router();

// // Multer setup for screenshot upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/payments/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });
// const upload = multer({ storage });

// // 1. Submit payment proof
// router.post('/manual', upload.single('screenshot'), async (req, res) => {
//   try {
//     const { courseId, userId, userName, userEmail, paymentMethod } = req.body;
//     const screenshot = req.file ? `/uploads/payments/${req.file.filename}` : null;

//     const newPayment = new Payment({
//       courseId,
//       userId,
//       userName,
//       userEmail,
//       paymentMethod,
//       screenshot,
//       status: 'pending'
//     });

//     await newPayment.save();
//     res.status(200).json({ message: "Payment submitted" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // 2. Get all pending payments
// router.get('/pending', async (req, res) => {
//   try {
//     const pending = await Payment.find({ status: 'pending' }).sort({ createdAt: -1 });
//     res.json(pending);
//   } catch (err) {
//     res.status(500).json([]);
//   }
// });

// // 3. Verify payment
// router.post('/verify/:id', async (req, res) => {
//   try {
//     await Payment.findByIdAndUpdate(req.params.id, { status: 'verified' });
//     res.json({ message: "Verified" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed" });
//   }
// });

// export default router;