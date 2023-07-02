import { StatusCodes } from "http-status-codes";
import TutorModel from "../models/Tutor.model";
import ITutor from "../types/ITutor";
import UniqueFieldError from "../errors/UniqueFieldError";
import mongoose, { mongo } from "mongoose";
import UnauthorizedError from "../errors/UnathourizedError";

class TutorRepository {
	static create = async function (data: any) {
		const tutor = new TutorModel(data);

		const isFirstUser = !(await TutorModel.findOne());

		if (isFirstUser) tutor.role = "admin";

		await tutor.save();

		const response = await TutorModel.findById(tutor.id).select({
			password: false,
		});

		return response;
	};
	static list = async function () {
		const tutors = await TutorModel.find().select({ password: false });

		if (tutors.length === 0)
			throw { status: StatusCodes.NOT_FOUND, message: "No tutors found!" };

		return tutors;
	};

	static update = async function (data: ITutor) {
		const id = data._id!;

		const isIdValid = mongoose.Types.ObjectId.isValid(id);
		if (!isIdValid)
			throw {
				status: StatusCodes.BAD_REQUEST,
				message: "Please provide a valid id",
			};

		const tutor = await TutorModel.findById(id);

		if (!tutor)
			throw { status: StatusCodes.NOT_FOUND, message: "Tutor not found!" };

		const emailAlreadyInUse = await TutorModel.findOne({
			email: data.email,
			_id: { $ne: id },
		});

		if (emailAlreadyInUse) {
			const message = "Email already in use";
			throw new UniqueFieldError(message, data);
		}

		if (data.date_of_birth) tutor.date_of_birth = new Date(data.date_of_birth);

		if (data.email) tutor.email = data.email;

		if (data.name) tutor.name = data.name;

		if (data.password) tutor.password = data.password;

		if (data.pets) tutor.pets = data.pets;

		if (data.phone) tutor.phone = data.phone;

		if (data.zip_code) tutor.zip_code = data.zip_code;

		tutor.save();

		const newTutor = await TutorModel.findById(tutor.id).select({
			password: false,
		});

		return newTutor;
	};

	static remove = async function (id: string) {
		const isIdValid = mongoose.Types.ObjectId.isValid(id);

		if (!isIdValid)
			throw {
				status: StatusCodes.BAD_REQUEST,
				message: "Please provide a valid id",
			};

		const tutor = await TutorModel.findById(id);

		if(!tutor)
			throw {
				status: StatusCodes.NOT_FOUND,
				message: "Tutor not found"
			}

		if(tutor.pets.length > 0)
			throw new UnauthorizedError("Can not delete tutor with pets")

		await tutor?.deleteOne()
	};
}

export default TutorRepository;
