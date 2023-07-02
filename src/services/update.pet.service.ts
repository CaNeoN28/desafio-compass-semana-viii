import mongoose from "mongoose";
import PetRepository from "../repositories/pet.repository";
import IPet from "../types/IPet";
import Pet from "../types/Pet";
import { StatusCodes } from "http-status-codes";

class UpdatePet {
	static update = async function (tutorId: string, petId: string, data: IPet) {
		const pet = new Pet(data);

		if(!mongoose.Types.ObjectId.isValid(tutorId) || !mongoose.Types.ObjectId.isValid(petId))
			throw { status: StatusCodes.BAD_REQUEST, message: "Please provide a valid id"}

		const response = await PetRepository.update(tutorId, petId, pet);

		return response
	};
}

export default UpdatePet;
