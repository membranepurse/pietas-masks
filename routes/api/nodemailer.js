var express = require('express')
var router = express.Router()
const nodemailer = require('nodemailer')

router.post('/', (req, res) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.fname}</li>
        <li>Name: ${req.body.lname}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>Here is your confirmation id</p>
      <p>${req.body.confirmation}</p>

    `
    
    const senderMail = "pietasent@gmail.com";
  
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderMail,
        pass: 'ig3t$$$nmj'
      },
      tsl: {
        rejectUnauthorized: false
      }
    });
  
    let mailOptions = {
      from: 'pietasent@gmail.com',
      to: 'pietasent@gmail.com, stkbbryant@yahoo.com, sager.brown@gmail.com, sagerbrown7@gmail.com',
      subject: 'confirmation email',
      text: req.body.message,
      html: htmlEmail
    };
  
    transporter.sendMail(mailOptions, function(err,data) {
      if(err) {
        console.log('error', err);
      } else {
        console.log('sent!');
      }
    });
  
  })

module.exports = router
