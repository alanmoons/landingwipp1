// mailer.js
require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

function enviarCorreo({ to, subject, html, text }) {
  return transporter.sendMail({
    from: `"Soporte Cursos" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text: text || '',
    html,
  });
}

module.exports = enviarCorreo;