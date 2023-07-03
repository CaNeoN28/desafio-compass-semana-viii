import { StatusCodes } from "http-status-codes";
import TutorModel from "../models/Tutor.model";
import ITutor from "../types/ITutor";
import UniqueFieldError from "../errors/UniqueFieldError";
import mongoose, { mongo } from "mongoose";
import UnauthorizedError from "../errors/UnathourizedError";
import Tutor from "../types/Tutor";

class TutorRepository {
	static create = async function (data: Tutor) {
		const tutor = new TutorModel(data);

		const userAlreadyExists = await TutorModel.findOne({ email: data.email });

		if (userAlreadyExists) {
			const message = "Email already in use";
			throw new UniqueFieldError(message, data);
		}

		const isFirstUser = !(await TutorModel.findOne());

		if (isFirstUser) tutor.role = "admin";

		await tutor.save();

		const response = await TutorModel.findById(tutor.id).select({
			password: false,
		});

		return response;
	};

	static list = async function () {
		const tutors = await TutorModel.find()
			.select({ password: false })
			.populate("pets");

		if (tutors.length === 0)
			throw { status: StatusCodes.NOT_FOUND, message: "No tutors found!" };

		return tutors;
	};

	static update = async function (tutorId: string, data: Tutor) {
		const tutor = await TutorModel.findById(tutorId);

		if (!tutor)
			throw { status: StatusCodes.NOT_FOUND, message: "Tutor not found!" };

		const emailAlreadyInUse = await TutorModel.findOne({
			email: data.email,
			_id: { $ne: tutorId },
		});

		if (emailAlreadyInUse) {
			const message = "Email already in use";
			throw new UniqueFieldError(message, data);
		}

		const newTutor = await TutorModel.findByIdAndUpdate(tutor.id, data, {
			new: true,
		});

		if (data.password) {
			tutor.password = data.password;

			await tutor.save();
		}

		return newTutor;
	};

	static remove = async function (id: string) {
		const tutor = await TutorModel.findById(id);

		if (!tutor)
			throw {
				status: StatusCodes.NOT_FOUND,
				message: "Tutor not found",
			};

		if (tutor.pets.length > 0)
			throw new UnauthorizedError("Can not delete tutor with pets");

		await tutor?.deleteOne();
	};
}

export default TutorRepository;
