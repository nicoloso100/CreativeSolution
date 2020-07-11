import { email } from "../Constants/environment";
require("dotenv").config();

const nodemailer = require("nodemailer");
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass: process.env.EMAILPASS,
  },
});
