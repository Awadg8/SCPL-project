
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());

app.post('/send-email', (req,res) => {
    const {name, email, phoneNumber, subject, message}

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // or 'STARTTLS'
        auth: {
            user:'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com',
        subject: subject,
        text: 'Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}'
    };

    transporter.sendMail(mailOptions, (error, info)=> {
        if (error) {
            // return res.status(500).json({ msg: 'Error sending email' });
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
    });
});

    
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

  To send the contact form data through email when the submit button is clicked, you'll need to use a backend technology like Node.js, PHP, or Python to handle the form submission and send the email. Here's an example of how you can achieve this using Node.js and the nodemailer library:

Step 1: Install the required packages

Run the following command in your terminal:

bash
Edit
Copy code
npm install express nodemailer
Step 2: Create a new file for the backend code

Create a new file called server.js and add the following code:

javascript
Edit
Copy code
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
    res.send('Email sent successfully!');
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});









// To send the contact form data through email when the submit button is clicked, you'll need to use a backend technology like Node.js, PHP, or Python to handle the form submission and send the email. Here's an example of how you can achieve this using Node.js and the nodemailer library:

// Step 1: Install the required packages

// Run the following command in your terminal:

// bash
// Edit
// Copy code
// npm install express nodemailer
// Step 2: Create a new file for the backend code

// Create a new file called server.js and add the following code:

// javascript
// Edit
// Copy code
// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();

// app.use(express.json());

// app.post('/send-email', (req, res) => {
//   const { name, email, phoneNumber, subject, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // or 'STARTTLS'
//     auth: {
//       user: 'your-email@gmail.com',
//       pass: 'your-password'
//     }
//   });

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient-email@example.com',
//     subject: subject,
//     text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Email sent: ' + info.response);
//     res.send('Email sent successfully!');
//   });
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// Step 3: Update the contact form code

// Update the contact form code to send a POST request to the /send-email endpoint when the submit button is clicked:

// javascript
// Edit
// Copy code
// import React, { useState } from 'react';
// import axios from 'axios';

// function Contact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:3000/send-email', {
//       name,
//       email,
//       phoneNumber,
//       subject,
//       message
//     })
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your Name" />
//         <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="E-mail" />
//         <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="Phone Number" />
//         <input type="text" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Subject" />
//         <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write Message" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
// Step 4: Start the server

// Start the server by running the following command in your terminal:

// bash
// Edit
// Copy code
// node server.js
// Now, when you submit the contact form, the data will be sent to the /send-email endpoint, which will send an email to the recipient email address using the nodemailer library.





