import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import IPet from "../types/IPet";
import CreatePet from "../services/create.pet.service";
import UnauthorizedError from "../errors/UnathourizedError";

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

			const user = req.user!
			const {tutorId} = req.params

			const data = {
				name,
				species,
				carry,
				weight,
				date_of_birth
			}

			if(user.role !== "admin" && user.id !== tutorId)
				throw new UnauthorizedError("You are not allowed to perform this action")
				
			const response = await CreatePet.create(tutorId, data);

			res.status(StatusCodes.CREATED).send(response)
		} catch (err) {
			next(err);
		}
	};

	static put: RequestHandler = async function (req, res) {
		
	}
}

export default PetController;
