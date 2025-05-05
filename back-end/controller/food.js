import { request } from "express";
import { CategoryModel } from "../model/category.js";
import { FoodModel } from "../model/food.js";
import { Usermodel } from "../model/user.js";
import { Types } from "mongoose";

export const createFood = async (req, res) => {
  const { foodName, image, price, category, ingredients } = req.body;

  try {
    const foods = await FoodModel.create({
      foodName: foodName,
      image: image,
      price: price,
      category: category,
      ingredients: ingredients,
    });

    res
      .status(200)
      .send({
        success: true,
        foods: foods,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    res
      .status(400)
      .send({
        success: false,
        massage: error,
      })
      .end();
  }
};

export const getFood = async (_, res) => {
  try {
    const food = await FoodModel.find().populate("category");
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        massage: error,
      })
      .end();
  }
};

export const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await FoodModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        massage: error,
      })
      .end();
  }
};

export const updateFood = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await FoodModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).send({ success: true, food: food }).end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        massage: update,
      })
      .end();
  }
};
export const foodDelete = async (request, res) => {
  try {
    const { id } = request.params;
    const food = await FoodModel.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      food: food,
    });
  } catch (error) {
    return res
      .status(400)
      .send({
        success: false,
        massage: "delete",
      })
      .end();
  }
};

export const getFoodsCategoryId = async (req, res) => {
  const { categoryId } = req.query;
  const match = categoryId;
  const filter = match
    ? {
        $match: { _id: new Types.ObjectId(match) },
      }
    : {
        $match: {},
      };
  try {
    const Food = await CategoryModel.aggregate([
      filter,
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "results",
        },
      },
      {
        $project: {
          name: 1,
          results: 1,
        },
      },
    ]);
    return res
      .status(200)
      .send({
        success: true,
        Food: Food,
      })
      .end();
  } catch (error) {
    console.log(error.message, "error");
    return res
      .status(400)
      .send({
        success: false,
        error: error.message,
      })
      .end();
  }
};
