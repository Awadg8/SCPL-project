// const express = require("express");
// const nodemailer = require("nodemailer");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// const path = require("path");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// const cors = require("cors");
// app.use(cors());

// app.use(express.json());

// // Middleware for parsing JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Welcome to my server!");
// });

// app.post("/send-email", (req, res) => {
//   const { name, email, phoneNumber, subject, message } = req.body;

//   console.log(process.env.REACT_APP_GMAIL_USERNAME);
//   console.log(process.env.REACT_APP_GMAIL_PASSWORD);
//   console.log(
//     "Environment variables loaded:",
//     process.env.REACT_APP_GMAIL_USERNAME,
//     process.env.REACT_APP_GMAIL_PASSWORD
//   );

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.REACT_APP_GMAIL_USERNAME,
//       pass: process.env.REACT_APP_GMAIL_PASSWORD,
//     },
//   });
//   console.log(
//     "Environment variables loaded:",
//     process.env.REACT_APP_GMAIL_USERNAME,
//     process.env.REACT_APP_GMAIL_PASSWORD
//   );

//   const mailOptions = {
//     from: "devloperproactii@gmail.com",
//     to: "awadheshproactii@gmail.com",
//     subject: subject,
//     text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       return res
//         .status(500)
//         .json({ msg: "Error sending email", error: error.toString() });
//     }
//     console.log("Email sent: " + info.response);
//     res.send("Email sent successfully");
//   });
// });

// app.post("/send-resume", upload.single("resumeFile"), (req, res) => {
//   const { name, email, phoneNumber, subject, message } = req.body;
//   const resumeFile = req.file;

//   console.log(req.file); // The uploaded file information
//   console.log(req.body); // The other form fields

//   if (!req.file) {
//     return res.status(400).send("No file uploaded.");
//   }

//   res.send("Resume uploaded successfully!");

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.REACT_APP_GMAIL_USERNAME,
//       pass: process.env.REACT_APP_GMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: "devloperproactii@gmail.com",
//     to: "awadheshproactii@gmail.com",
//     subject: "Resume Upload",
//     text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
//     attachments: [
//       {
//         filename: resumeFile.originalname,
//         path: req.file.path,
//       },
//     ],
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       return res
//         .status(500)
//         .json({ msg: "Error sending email", error: error.toString() });
//     }
//     console.log("Email sent: " + info.response);
//     res.send("Email sent successfully");
//   });
// });

// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });
