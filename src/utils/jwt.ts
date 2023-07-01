import mongoose from "mongoose";
import ITutor from "../types/ITutor";
import jwt from "jsonwebtoken";
export default class JwtUtils {
	static generateToken({
		name,
		email,
		id,
		role
	}: {
		name: string;
		email: string;
		id: mongoose.Types.ObjectId;
		role: string
	}) {
		const token = jwt.sign(
			{
				name,
				email,
				id,
				role
			},
			process.env.JWT_SECRET!,
			{
				expiresIn: "1h",
			}
		);

		return token;
	}

	static validateToken(token: string) {
		try {
			const response = jwt.verify(token, process.env.JWT_SECRET!);
			return response
		} catch (err) {}

		return
	}
}
