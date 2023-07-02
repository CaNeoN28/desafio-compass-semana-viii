import mongoose from "mongoose"
import PetRepository from "../repositories/pet.repository"
import TutorRepository from "../repositories/tutor.repository"
import IPet from "../types/IPet"
import Pet from "../types/Pet"
import { StatusCodes } from "http-status-codes"

class CreatePet{
	static create = async function (tutorId: string, data: IPet) {
		const pet = new Pet(data)

		if(!mongoose.Types.ObjectId.isValid(tutorId))
			throw { status: StatusCodes.BAD_REQUEST, message: "Please provide a valid id"}

		const response = await PetRepository.create(tutorId, pet)

		return response
	}
}

export default CreatePet