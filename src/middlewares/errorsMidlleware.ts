import { ErrorRequestHandler } from "express";
import IError from "../types/IError";

const errorsMiddleware: ErrorRequestHandler = (err: IError, req, res, next) => {
  try {
    res.status(err.status).send({
      message: err.message,
      data: err.data,
    });
  } catch (err) {
    next(err)
  }
};

export default errorsMiddleware