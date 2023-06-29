import mongoose from "mongoose";
import ITutor from "../types/ITutor";
import jwt from "jsonwebtoken";
export default class JwtUtils {
  static generateToken({
    name,
    email,
    id,
  }: {
    name: string;
    email: string;
    id: mongoose.Types.ObjectId;
  }) {
    const token = jwt.sign(
      {
        name,
        email,
        id,
      },
      process.env.JWT_SECRET || "secret",
      {
        expiresIn: "1h"
      }
    );

    return token;
  }

  static validateToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET || "secret");
  }
}
