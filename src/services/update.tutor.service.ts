import mongoose from "mongoose";
import ValidationError from "../errors/ValidationError";
import TutorRepository from "../repositories/tutor.repository";
import ITutor from "../types/ITutor";
import { password_match } from "../types/Matches";
import { StatusCodes } from "http-status-codes";
import Tutor from "../types/Tutor";

class UpdateTutor {
	static update = async function (tutorId: string, data: ITutor) {
		const tutor = new Tutor(data)
		const response = TutorRepository.update(tutorId, tutor);

		return response;
	};
}

export default UpdateTutor;
