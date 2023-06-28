import IError from "../types/IError";

class UniqueFieldError implements IError {
  status: number;
  message: string;
  data: any;

  constructor(message: string, data: any) {
    this.status = 409;
    (this.message = message), (this.data = data);
  }
}

export default UniqueFieldError
