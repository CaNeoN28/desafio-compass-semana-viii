import mongoose from "mongoose";

export default interface ITutor {
  name: String;
  password: String;
  phone: String;
  email: String;
  date_of_birth: String;
  zip_code: String;
  pets: mongoose.Types.ObjectId[];
}
