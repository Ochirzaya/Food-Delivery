import { request, text } from "express";
import { Usermodel } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import nodeMailer from "nodemailer";

configDotenv();

const secret_key = process.env.SECRET_KEY;

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Usermodel.findOne({ email: email });

    if (!user) {
      return res.send(200)({
        success: false,
        message: "user not found",
      });
    }
    const pass = await bcrypt.compare(password, user.password);
    console.log(pass, "pass");
    if (!pass) {
      return res.status(404).json({
        success: false,
        massage: "user not found",
      });
    }
    console.log(user, "user");
    const token = jwt.sign({ ...user }, secret_key, { expiresIn: 3600 });

    return res.status(200).send({
      success: true,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({
      success: false,
      massage: " Internal server error",
    });
  }
};
const transporter = nodeMailer.createTransport({
  service: "gmail",
  host: "smtp.gamil.com",
  secure: true,
  port: 465,

  auth: {
    user: "batbaatarochirzaya78@gmail.com",
    pass: "irrvknbptciyplju",
  },
});

export const sendMailer = async (req, res) => {};

export const sendMail = async (req, res) => {
  const { email, subject, text } = req.body;
  try {
    const response = await sendMail(email, subject, text);
    res.status(200).send({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};
