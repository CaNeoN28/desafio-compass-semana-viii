import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import TutorRepository from "../repositories/tutor.repository";

class DeleteTutor{
	static delete = async function (id:string) {
		const isIdValid = mongoose.Types.ObjectId.isValid(id);

		if (!isIdValid)
			throw {
				status: StatusCodes.BAD_REQUEST,
				message: "Please provide a valid id",
			};

		await TutorRepository.remove(id)
	}
}

export default DeleteTutor