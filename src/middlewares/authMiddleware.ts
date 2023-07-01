import { Request, RequestHandler } from "express";
import mongoose from "mongoose";

const authMiddleware: RequestHandler = (req, res, next) => {
	const token = req.headers.authorization

	req.user = {
		email: "email@example.com",
		id: (new mongoose.Types.ObjectId()).toString(),
		name: "example name",
		role: "user"
	}

	return next()
}

export default authMiddleware