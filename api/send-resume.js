// api/send-resume.js
import multer from "multer";
import nodemailer from "nodemailer";

const upload = multer({ dest: "/tmp/" });

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust '*' to your frontend URL in production
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS"); // Allow specific methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers

  if (req.method === "OPTIONS") {
    // Handle preflight requests
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const { name, email, phoneNumber, subject, message } = req.body;
    const resumeFile = req.file;

    if (!resumeFile) {
      return res.status(400).send("No file uploaded.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.REACT_APP_GMAIL_USERNAME,
        pass: process.env.REACT_APP_GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.REACT_APP_GMAIL_USERNAME,
      to: "awadheshproactii@gmail.com",
      subject: "Resume Upload",
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
      attachments: [
        {
          filename: resumeFile.originalname,
          path: resumeFile.path,
        },
      ],
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Resume sent successfully", info });
    } catch (error) {
      console.error("Error sending resume:", error);
      res.status(500).json({ error: "Failed to send resume", details: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
