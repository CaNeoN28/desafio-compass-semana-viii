import { RequestHandler } from "express";
import ITutor from "../types/ITutor";
import CreateUser from "../services/create.tutor.service";
import { StatusCodes } from "http-status-codes";
import ListTutors from "../services/list.tutor.service";

class TutorControler {
	post: RequestHandler = async function (req, res, next) {
		const {
			name,
			date_of_birth,
			email,
			password,
			pets,
			phone,
			zip_code,
		}: ITutor = req.body;

		const tutorData: ITutor = {
			date_of_birth,
			email,
			name,
			password,
			pets,
			phone,
			zip_code,
		};

		try {
			const data = await CreateUser.handle(tutorData);

			res.status(StatusCodes.CREATED).send(data);
		} catch (err) {
			next(err);
		}
	};

	get: RequestHandler = async function (req, res, next) {
		try {
			const tutors = await ListTutors.list()

			res.status(StatusCodes.OK).send({
				tutors
			})
		} catch (err) {
			next(err);
		}
	};
}

export default TutorControler;
