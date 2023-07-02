import { Paths } from "swagger-jsdoc";
import postPet from "./postPet";
import putPet from "./putPet";

const PetPaths: Paths = {
	"/pet/{tutorId}": {
		post: postPet
	},
	"/pet/{petId}/tutor/{tutorId}": {
		put: putPet
	}
}

export default PetPaths