import PetRepository from "../repositories/pet.repository"
import TutorRepository from "../repositories/tutor.repository"
import IPet from "../types/IPet"
import Pet from "../types/Pet"

class CreatePet{
	static create = async function (tutorId: string, data: IPet) {
		const pet = new Pet(data)

		const response = await PetRepository.create(tutorId, pet)

		return response
	}
}

export default CreatePet