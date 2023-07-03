import mongoose from "mongoose";

export default interface ITutor {
	name: string;
  password?: string;
  phone: string;
  email: string;
  date_of_birth: string;
  zip_code: string;
  pets: {prototype: mongoose.Types.ObjectId}[];
}
