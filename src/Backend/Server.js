const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.post("/send-email", (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: "devloperproactii@gmail.com",
      pass: "otolulodytyewvws",
    },
  });

  const mailOptions = {
    from: "devloperproactii@gmail.com",
    to: "awadheshproactii@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ msg: "Error sending email", error: error.toString() });
    }
    console.log("Email sent: " + info.response);
    res.send("Email sent successfully");
  });
});

app.post("/send-resume", (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: "devloperproactii@gmail.com",
      pass: "otolulodytyewvws",
    },
  });

  const mailOptions = {
    from: "devloperproactii@gmail.com",
    to: "awadheshproactii@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ msg: "Error sending email", error: error.toString() });
    }
    console.log("Email sent: " + info.response);
    res.send("Email sent successfully");
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
