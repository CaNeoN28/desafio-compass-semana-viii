import { Paths } from "swagger-jsdoc";
import postTutor from "./postTutor";
import getTutors from "./getTutors";
import putTutors from "./putTutors";
import deleteTutors from "./deleteTutors";

const TutorsPaths: Paths = {
	"/tutor": {
		post: postTutor
	},
	"/tutors": {
		get: getTutors
	},
	"/tutor/{id}": {
		put: putTutors,
		delete: deleteTutors
	}
}

export default TutorsPaths