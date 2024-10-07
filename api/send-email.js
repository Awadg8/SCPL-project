// api/send-email.js
const nodemailer = require("nodemailer");
const cors = require("cors");
app.use(cors());

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phoneNumber, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.REACT_APP_GMAIL_USERNAME,
        pass: process.env.REACT_APP_GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.REACT_APP_GMAIL_USERNAME,
      to: "awadheshproactii@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully", info });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email", details: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
