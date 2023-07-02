import { StatusCodes } from "http-status-codes"
import mongoose from "mongoose"
import PetRepository from "../repositories/pet.repository"

class DeletePet {
	static delete = async function (tutorId: string, petId: string) {
		if(!mongoose.Types.ObjectId.isValid(tutorId) || !mongoose.Types.ObjectId.isValid(petId))
			throw { status: StatusCodes.BAD_REQUEST, message: "Please provide a valid id"}

		await PetRepository.delete(tutorId, petId)
	}
}

export default DeletePet