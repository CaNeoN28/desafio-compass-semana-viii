import { Paths } from "swagger-jsdoc";
import Auth from "./Auth";
import TutorsPaths from "./Tutor";
import PetPaths from "./Pet";

const paths: Paths = {
	...TutorsPaths,
	...PetPaths,
	"/auth/login": Auth.Login
};

export default paths
