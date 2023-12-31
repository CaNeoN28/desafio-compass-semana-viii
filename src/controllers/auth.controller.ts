import { RequestHandler } from "express";
import AuthLoginService from "../services/login.auth.service";
import { StatusCodes } from "http-status-codes";

class AuthController {
  static login: RequestHandler = async function (req, res, next) {
    const { email, password } = req.body;
    try {
      const token = await AuthLoginService.handle({ email, password });
      
      res.status(StatusCodes.OK).send({
        message: "Logged with sucess!",
        token,
      });
    } catch (err) {
      next(err);
    }
  };
}

export default AuthController;
