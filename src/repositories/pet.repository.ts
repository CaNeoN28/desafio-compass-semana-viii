import { StatusCodes } from "http-status-codes"
import PetModel from "../models/Pet.model"
import TutorModel from "../models/Tutor.model"
import petRouter from "../routes/pet.routes"
import Pet from "../types/Pet"

class PetRepository{
	static create = async function (tutorId: string, data: Pet) {
		const pet = await new PetModel(data)
		const tutor = await TutorModel.findById(tutorId)

		if(!tutor)
			throw {status: StatusCodes.NOT_FOUND, message: "Tutor not found!"}
		
		await pet.save()

		tutor.pets.push(pet.id)

		await tutor.save()

		return pet
	}
}

export default PetRepository