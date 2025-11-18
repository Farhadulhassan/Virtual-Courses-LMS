import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587, // Use 587 for TLS
//   secure: false,
//   auth: {
//     user: process.env.USER_EMAIL,
//     pass: process.env.USER_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });


// src/config/sendmail.js

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,         // SMTPS Port
  secure: true,       // Jab 465 ho, to secure true hoga
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD, // App Password
  },
  // tls: { rejectUnauthorized: false }, // Yeh line 465 ke liye zaroori nahi
});


const sendMail = async (to, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"LMS Project" <${process.env.USER_EMAIL}>`,
      to,
      subject: "Password Reset OTP",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
          <h2 style="color: #333;">Reset Your Password</h2>
          <p>Your OTP is: <strong style="font-size: 24px; color: #007bff;">${otp}</strong></p>
          <p>It will expire in <strong>5 minutes</strong>.</p>
          <p>If you didn't request this, ignore this email.</p>
        </div>
      `,
    });

    console.log("✅ OTP email sent:", info.response);
  } catch (error) {
    console.error("❌ Email send failed:", error.message);
    throw error;
  }
};

export default sendMail;
