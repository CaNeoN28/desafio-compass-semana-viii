import { RequestHandler } from "express";
import ITutor from "../types/ITutor";

class TutorControler {
  post: RequestHandler = async function (req, res) {
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

    res.send(tutorData);
  };
}

export default TutorControler;
