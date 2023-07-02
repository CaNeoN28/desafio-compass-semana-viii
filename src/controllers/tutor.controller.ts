import { RequestHandler } from "express";
import ITutor from "../types/ITutor";
import CreateTutor from "../services/create.tutor.service";
import { StatusCodes } from "http-status-codes";
import ListTutors from "../services/list.tutor.service";
import UpdateTutor from "../services/update.tutor.service";
import UnauthorizedError from "../errors/UnathourizedError";

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
			const data = await CreateTutor.handle(tutorData);

			res.status(StatusCodes.CREATED).send(data);
		} catch (err) {
			next(err);
		}
	};

	get: RequestHandler = async function (req, res, next) {
		try {
			const tutors = await ListTutors.list();

			res.status(StatusCodes.OK).send({
				tutors,
			});
		} catch (err) {
			next(err);
		}
	};

	put: RequestHandler = async function (req, res, next) {
		try {
			const id = req.params.id;
			const user = req.user!;

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
				pets,
				phone,
				zip_code,
			};

			if(id === user?.id)
				tutorData.password = password

			if(user.role !== 'admin' && user.id !== id)
				throw new UnauthorizedError("You are not allowed to perform this action!")

			const data = await UpdateTutor.update({ ...tutorData, _id: id });

			res.status(StatusCodes.OK).send(data);
		} catch (err) {
			next(err);
		}
	};
}

export default TutorControler;
