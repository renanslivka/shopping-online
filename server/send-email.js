const nodemailer = require("nodemailer");
const { google } = require('googleapis');
require("dotenv").config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLEINT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function sendEmail(req, res) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.USER,
        type: 'OAuth2',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLEINT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    };
    const transporter = nodemailer.createTransport(transport);
    
    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take messages");
      }
    });
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message} `;

    const mail = {
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
    res.status(error.code).json({
      message: error.message,
    });
  }
}

module.exports = sendEmail;
