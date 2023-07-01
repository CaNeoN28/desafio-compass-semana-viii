import { Request, RequestHandler } from "express";
import mongoose from "mongoose";
import JwtUtils from "../utils/jwt";
import UnauthorizedError from "../errors/UnathourizedError";
import TutorModel from "../models/Tutor.model";

const authMiddleware: RequestHandler = async (req, res, next) => {
	try {
		const authorization: any = req.headers.authorization;
		if (!authorization || !authorization.startsWith("Bearer "))
			throw new UnauthorizedError("Please provide a valid token");

		const token = authorization.split(" ")[1];

		const payload = JwtUtils.validateToken(token) as {
			name: string;
			email: string;
			id: string;
			role: string;
		};

		if (!payload) throw new UnauthorizedError("Please provide a valid token");

		const userExists = await TutorModel.findOne({ _id: payload.id });

		if (!userExists)
			throw new UnauthorizedError("Please provide a valid token");

		req.user = payload;

		next()
	} catch (err: any) {
		const error: UnauthorizedError = err

		return res.status(error.status).send({
			message: error.message
		})
	}
};

export default authMiddleware;
