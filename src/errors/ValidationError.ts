import { StatusCodes } from "http-status-codes";
import IError from "../types/IError";

class ValidationError implements IError {
  status: number;
  message: string;
  data: any;

  constructor(message: string, data: any) {
    this.status = StatusCodes.BAD_REQUEST;
    this.message = message;
    this.data = data;
  }
}

export default ValidationError;
