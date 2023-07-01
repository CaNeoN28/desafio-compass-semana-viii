import { Request, RequestHandler } from "express";
import mongoose from "mongoose";
import JwtUtils from "../utils/jwt";
import UnauthorizedError from "../errors/UnathourizedError";

const authMiddleware: RequestHandler = (req, res, next) => {
	const authorization: any = req.headers.authorization;

	if (!authorization || !authorization.startsWith("Bearer "))
		throw new UnauthorizedError("Please provide a valid token");

	const token = authorization.split(" ")[1];

	const user = JwtUtils.validateToken(token);

	if(!user)
		throw new UnauthorizedError("Please provide a valid token")

	req.user = user as {
		name: string;
		email: string;
		id: string;
		role: string;
	};

	return next();
};

export default authMiddleware;
