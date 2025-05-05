import mongoose, { Schema } from "mongoose";

const FoodOrderItem = new mongoose.Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food" },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const FoodOrderSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    foodOrderItems: {
      type: [FoodOrderItem],
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const FoodOrderModel = mongoose.model("Foodorder", FoodOrderSchema);
