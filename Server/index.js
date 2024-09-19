const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/message', (req, res) => {
  const { name, email, number,message } = req.body;

  // Configure your email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., 'gmail', 'hotmail', etc.)
    auth: {
      user: 'muhammedrameespkl@gmail.com', // Replace with your email
      pass: 'wqja nuah jzua sllb'   // Replace with your email password
    }
  });

  const mailOptions = {
    from: email,
    to: 'muhammedrameespkl@gmail.com', // Replace with your email
    subject: `New message from ${name}`,
    text: `Phone Number : ${number} . Message : ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// reg form
app.post('/register', (req, res) => {
  const { name, email, number ,course } = req.body;

  // Configure your email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., 'gmail', 'hotmail', etc.)
    auth: {
      user: 'muhammedrameespkl@gmail.com', // Replace with your email
      pass: 'wqja nuah jzua sllb'   // Replace with your email password
    }
  });

  const mailOptions = {
    from: email,
    to: 'muhammedrameespkl@gmail.com', // Replace with your email
    subject: `Registration from ${name}`,
    text: `My Name is : ${name} , Phone Number : ${number} ,Course :${course}` 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


//book free demo
app.post('/bookdemo', (req, res) => {
  const { name, email, number ,course } = req.body;

  // Configure your email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., 'gmail', 'hotmail', etc.)
    auth: {
      user: 'muhammedrameespkl@gmail.com', // Replace with your email
      pass: 'wqja nuah jzua sllb'   // Replace with your email password
    }
  });

  const mailOptions = {
    from: email,
    to: 'muhammedrameespkl@gmail.com', // Replace with your email
    subject: `Registered For Free Demo`,
    text: `My Name is : ${name} , Phone Number : ${number} ,Course :${course} ` 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
