import UniqueFieldError from "../errors/UniqueFieldError";
import ValidationError from "../errors/ValidationError";
import TutorModel from "../models/Tutor.model";
import TutorRepository from "../repositories/tutor.repository";
import ITutor from "../types/ITutor";
import { password_match } from "../types/Matches";
import Tutor from "../types/Tutor";

class CreateTutor {
	static handle = async function (data: ITutor) {
		if (!data.password) throw new ValidationError("Password is required", data);

		const tutor = new Tutor(data);

		const response = TutorRepository.create(tutor);

		return response;
	};
}

export default CreateTutor;
