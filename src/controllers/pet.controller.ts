import { RequestHandler } from "express";

class PetController{
	static post: RequestHandler = async function (req, res, next) {
		res.send("Create pet")
	}
}

export default PetController