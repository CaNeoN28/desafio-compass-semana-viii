import { Paths } from "swagger-jsdoc";
import Tutors from "./Tutors";
import Auth from "./Auth";

const paths: Paths = {
	"/tutors": Tutors,
	"/auth/login": Auth.Login
};

export default paths
