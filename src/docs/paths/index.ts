import { Paths } from "swagger-jsdoc";
import Auth from "./Auth";
import TutorsPaths from "./Tutor";

const paths: Paths = {
	...TutorsPaths,
	"/auth/login": Auth.Login
};

export default paths
