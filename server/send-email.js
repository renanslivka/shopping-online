const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(req, res) {
  try {
    var transport = {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    };

    var transporter = nodemailer.createTransport(transport);

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take messages");
      }
    });
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n message: ${message} `;

    var mail = {
      from: email,
      to: process.env.USER, // Change to email address that you want to receive messages on
      subject: "New Message from " + name,
      text: content,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = sendEmail;
