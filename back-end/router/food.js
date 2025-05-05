import express from "express";
import {
  createFood,
  foodDelete,
  getFood,
  getFoodById,
  getFoodsCategoryId,
  updateFood,
} from "../controller/food.js";

import { verifyToken } from "../middleware/auth.js";

export const foodRouter = express.Router();

foodRouter
  .post("/", createFood)
  .get("/", verifyToken, getFood)
  .get("/all", getFoodsCategoryId)
  .get("/food/:foodId", getFoodById)
  .put("/:id", updateFood)
  .delete("/:id", foodDelete);
