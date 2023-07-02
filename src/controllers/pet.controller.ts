import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import IPet from "../types/IPet";
import CreatePet from "../services/create.pet.service";
import UnauthorizedError from "../errors/UnathourizedError";
import UpdatePet from "../services/update.pet.service";

class PetController {
	static post: RequestHandler = async function (req, res, next) {
		try {
			const { name, species, carry, weight, date_of_birth }: IPet = req.body;

			const user = req.user!;
			const { tutorId } = req.params;

			const data = {
				name,
				species,
				carry,
				weight,
				date_of_birth,
			};

			if (user.role !== "admin" && user.id !== tutorId)
				throw new UnauthorizedError(
					"You are not allowed to perform this action"
				);

			const response = await CreatePet.create(tutorId, data);

			res.status(StatusCodes.CREATED).send(response);
		} catch (err) {
			next(err);
		}
	};

	static update: RequestHandler = async function (req, res, next) {
		try {
			const {
				name,
				species,
				carry,
				weight,
				date_of_birth
			} : IPet = req.body

			const user = req.user!
			const {tutorId, petId} = req.params

			const data = {
				name,
				species,
				carry,
				weight,
				date_of_birth
			}

			if(user.role !== "admin" && user.id !== tutorId)
				throw new UnauthorizedError("You are not allowed to perform this action")

			const response = await UpdatePet.update(tutorId, petId, data)

			res.status(StatusCodes.OK).send(response)
		} catch (err) {
			next(err);
		}
	};
}

export default PetController;
