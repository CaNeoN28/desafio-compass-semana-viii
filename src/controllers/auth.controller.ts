import { RequestHandler } from "express";
import AuthLoginService from "../services/login.auth.service";

class AuthController {
  static login: RequestHandler = async function (req, res, next) {
    const { email, password } = req.body;
    try {
      await AuthLoginService.handle({ email, password });
    } catch (err) {
      next(err);
    }
  };
}

export default AuthController;
