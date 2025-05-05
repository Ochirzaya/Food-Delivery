import { Router } from "express";
import { login, sendMail, sendMailer } from "../controller/auth.js";

export const authRouter = Router();

authRouter.post("/login", login);
authRouter.post(`/login`, login).get(`/mail`, sendMailer);
