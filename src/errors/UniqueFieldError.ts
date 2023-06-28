import { StatusCodes } from "http-status-codes";
import IError from "../types/IError";

class UniqueFieldError implements IError {
  status: number;
  message: string;
  data: any;

  constructor(message: string, data: any) {
    this.status = StatusCodes.CONFLICT;
    (this.message = message), (this.data = data);
  }
}

export default UniqueFieldError
