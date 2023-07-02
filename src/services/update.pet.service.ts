import PetRepository from "../repositories/pet.repository";
import IPet from "../types/IPet";
import Pet from "../types/Pet";

class UpdatePet {
	static update = async function (tutorId: string, petId: string, data: IPet) {
		const pet = new Pet(data);

		const response = await PetRepository.update(tutorId, petId, pet);

		return response
	};
}

export default UpdatePet;
