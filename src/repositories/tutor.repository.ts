import { StatusCodes } from "http-status-codes";
import TutorModel from "../models/Tutor.model";
import ITutor from "../types/ITutor";
import UniqueFieldError from "../errors/UniqueFieldError";

class TutorRepository {
  static create = async function (data: any) {
    const tutor = new TutorModel(data)

		const isFirstUser = !(await TutorModel.findOne())

		if(isFirstUser)
			tutor.role = 'admin'

    await tutor.save()

    const response = await TutorModel.findById(tutor.id).select({password: false})

    return response
  };
	static list = async function () {
		const tutors = await TutorModel.find().select({password: false})

		if(tutors.length === 0)
			throw {status: StatusCodes.NOT_FOUND, message: "No tutors found!"}

		return tutors
	};

	static update = async function (data: ITutor) {
		const id = data._id
		if(!id)
			throw {status: StatusCodes.BAD_REQUEST, message: "Please provide a valid id"}

		const tutor = await TutorModel.findById(id)

		if(!tutor)
			throw {status: StatusCodes.NOT_FOUND, message: "Tutor not found!"}

		const emailAlreadyInUse = await TutorModel.findOne({
			email: data.email,
			_id: { $ne: id },
		});

		if (emailAlreadyInUse) {
			const message = "Email already in use";
			throw new UniqueFieldError(message, data);
		}
		
		await tutor.updateOne({
			...data,
			pets: data.pets && data.pets.length === 0 ? tutor.pets : data.pets
		})

		await tutor.save()

		const newTutor = await TutorModel.findById(tutor.id).select({password: false})

		return newTutor
	}

	static remove = async function (id: string) {
		
	}
}

export default TutorRepository;
