import express, { json } from "express";
import { connectMongoDB } from "./connectDb.js";
import { userRouter } from "./router/user.js";
import cors from "cors";
import { categoryRouter } from "./router/category.js";
import { foodRouter } from "./router/food.js";
import { foodOrderRouter } from "./router/foodorder.js";
import { authRouter } from "./router/auth.js";
import { config, configDotenv } from "dotenv";
configDotenv();

const port = process.env.PORT;
const app = express();

connectMongoDB();

app.use(cors());
app.use(json());

app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/category", categoryRouter);
app.use("/order", foodOrderRouter);
app.use("/", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
