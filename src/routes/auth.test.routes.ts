import express, {Request, Response} from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { StatusCodes } from 'http-status-codes';

const testRouter = express.Router()

const controller = (req: Request, res: Response) => {
	const user = req.user

	res.status(StatusCodes.OK).send(user)
}

testRouter.get("/auth-test", authMiddleware, controller)

export default testRouter