import { StatusCodes } from "http-status-codes";
import IError from "../types/IError";

class UnauthorizedError implements IError {
	status: number;
	message: string;
	data: any;

	constructor(message: string, data: any) {
		this.status = StatusCodes.FORBIDDEN;
		this.message = message;
		this.data = data;
	}
}
