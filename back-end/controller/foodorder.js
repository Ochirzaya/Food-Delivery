import { request } from "express";
import { FoodOrderModel } from "../model/foodorder.js";

export const createFoodorder = async (req, res) => {
  const { user, totalPrice, foodOrderItems } = req.body;

  try {
    const order = await FoodOrderModel.create({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
    });

    res
      .status(200)
      .send({
        success: true,
        order: order,
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

export const getOrder = async (_, res) => {
  try {
    const order = await FoodOrderModel.find()
      .populate("user")
      .populate("foodOrderItems.food");
    return res
      .status(200)
      .send({
        success: true,
        order: order,
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

export const getFoodOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await FoodOrderModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        orders: orders,
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

export const getFoodOrderByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await FoodOrderModel.find({ user: userId })
      .populate("user")
      .populate("foodOrderItems.food");
    return res
      .status(200)
      .send({
        success: true,
        orders: orders,
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
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await FoodOrderModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({ success: true, order: order }).end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).send({ success: false, massage: updateOrder }).end();
  }
};
export const orderDelete = (req, res) => {
  const { id } = request.params;
  orders = orders.filter((order) => order.id !== id);
  res
    .send({
      success: true,
      massage: "removed",
    })
    .end();
};
