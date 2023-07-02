import PetModel from "../models/Pet.model"
import petRouter from "../routes/pet.routes"
import Pet from "../types/Pet"

class PetRepository{
	static create = async function (data: Pet) {
		const pet = await new PetModel(data)
		
		await pet.save()
		return pet
	}
}

export default PetRepository