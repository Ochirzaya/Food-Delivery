import express from "express";
import {
  createCategory,
  getCategoryById,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controller/category.js";

export const categoryRouter = express.Router();

categoryRouter
  .post("/", createCategory)
  .get("/", getCategory)
  .get("/", getCategoryById)
  .put("/:id", updateCategory)
  .delete("/:id", deleteCategory);
