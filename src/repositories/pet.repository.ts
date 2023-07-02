import { StatusCodes } from "http-status-codes";
import PetModel from "../models/Pet.model";
import TutorModel from "../models/Tutor.model";
import petRouter from "../routes/pet.routes";
import Pet from "../types/Pet";
import mongoose from "mongoose";

class PetRepository {
	static create = async function (tutorId: string, data: Pet) {
		const pet = await new PetModel(data);
		const tutor = await TutorModel.findById(tutorId);

		if (!tutor)
			throw { status: StatusCodes.NOT_FOUND, message: "Tutor not found!" };

		await pet.save();

		tutor.pets.push(pet.id);

		await tutor.save();

		return pet;
	};

	static update = async function (tutorId: string, petId: string, data: Pet) {
		const tutor = await TutorModel.findById(tutorId);

		if (!tutor)
			throw { status: StatusCodes.NOT_FOUND, message: "Tutor not found!" };

		const petBelongsToTutor = tutor.pets.find(
			(pet) => pet.toString() === petId
		);

		if (!petBelongsToTutor)
			throw { status: StatusCodes.NOT_FOUND, message: "Pet not found!" };

		const pet = await PetModel.findByIdAndUpdate(petId, data, { new: true });

		return pet;
	};

	static delete = async function (tutorId: string, petId: string) {
		const tutor = await TutorModel.findById(tutorId);

		if (!tutor)
			throw { status: StatusCodes.NOT_FOUND, message: "Tutor not found!" };

		const petBelongsToTutor = tutor.pets.find(
			(pet) => pet.toString() === petId
		);

		console.log(petBelongsToTutor)
		if (!petBelongsToTutor)
			throw { status: StatusCodes.NOT_FOUND, message: "Pet not found!" };

		await PetModel.findByIdAndDelete(petId)

		tutor.pets = tutor.pets.filter(petId => petId !== petId)

		await tutor.save()
	}
}

export default PetRepository;
