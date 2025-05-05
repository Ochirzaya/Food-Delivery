import express from "express";
import {
  createFoodorder,
  getFoodOrderById,
  getFoodOrderByUser,
  getOrder,
  orderDelete,
  updateOrder,
} from "../controller/foodorder.js";

export const foodOrderRouter = express.Router();

foodOrderRouter
  .post("/", createFoodorder)
  .get("/", getOrder)
  .get("/:id", getFoodOrderById)
  .get("/user/:userId", getFoodOrderByUser)
  .put("/:id", updateOrder)
  .delete("/:id", orderDelete);
