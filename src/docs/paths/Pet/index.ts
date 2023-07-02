import { Paths } from "swagger-jsdoc";
import petPost from "./postPet";

const PetPaths: Paths = {
	"/pet/{tutorId}": {
		post: petPost
	}
}

export default PetPaths