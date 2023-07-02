import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import IPet from "../types/IPet";
import CreatePet from "../services/create.pet.service";

class PetController {
	static post: RequestHandler = async function (req, res, next) {
		try {
			const {
				name,
				species,
				carry,
				weight,
				date_of_birth
			} : IPet = req.body

			const {tutorId} = req.params

			const data = {
				name,
				species,
				carry,
				weight,
				date_of_birth
			}

			const response = await CreatePet.create(tutorId, data);

			res.status(StatusCodes.CREATED).send(response)
		} catch (err) {
			next(err);
		}
	};
}

export default PetController;
