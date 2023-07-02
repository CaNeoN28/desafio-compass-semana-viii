import { Paths } from "swagger-jsdoc";
import petPost from "./petPost";

const PetPaths: Paths = {
	"/pet/:tutorId": {
		post: petPost
	}
}

export default PetPaths