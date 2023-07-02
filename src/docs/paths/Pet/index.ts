import { Paths } from "swagger-jsdoc";
import postPet from "./postPet";
import putPet from "./putPet";
import deletePet from "./deletePet";

const PetPaths: Paths = {
	"/pet/{tutorId}": {
		post: postPet
	},
	"/pet/{petId}/tutor/{tutorId}": {
		put: putPet,
		delete: deletePet
	}
}

export default PetPaths