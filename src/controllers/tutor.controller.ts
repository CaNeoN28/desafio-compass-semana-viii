import { RequestHandler } from "express";
import ITutor from "../types/ITutor";
import CreateUser from "../services/create.tutor.service";

class TutorControler {
  post: RequestHandler = async function (req, res, next) {
    const {
      name,
      date_of_birth,
      email,
      password,
      pets,
      phone,
      zip_code,
    }: ITutor = req.body;

    const tutorData: ITutor = {
      date_of_birth,
      email,
      name,
      password,
      pets,
      phone,
      zip_code,
    };

    try {
      const data = await CreateUser.handle(tutorData);

      res.send(data);
    } catch (err) {
      next(err);
    }
  };
}

export default TutorControler;
