import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
configDotenv();

const secret_key = process.env.SECRET_KEY;

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  const decode = await jwt.verify(token, { secret_key });
  next();
};
