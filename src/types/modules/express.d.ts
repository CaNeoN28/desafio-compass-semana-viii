import { Request } from "express";

declare module "express-serve-static-core" {
	interface Request {
		user?: {
			name: string;
			email: string;
			role: string;
			id: string;
		};
	}
}
