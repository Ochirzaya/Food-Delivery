import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
  userUpdate,
} from "../controller/user.js";

export const userRouter = express.Router();

userRouter
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:id", getUserById)
  .put("/:id", userUpdate);
