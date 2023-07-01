import { StatusCodes } from "http-status-codes";
import IError from "../types/IError";

class UnauthenticatedError implements IError {
  status: number;
  message: string;
  data: any;

  constructor(message: string){
    this.status = StatusCodes.UNAUTHORIZED
    this.message = message
    this.data = null
  }
}

export default UnauthenticatedError