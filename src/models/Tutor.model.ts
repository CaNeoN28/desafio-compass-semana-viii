import mongoose from "mongoose";

const TutorSchema = new mongoose.Schema({
  name: String,
  password: String,
  phone: String,
  email: String,
  date_of_birth: String,
  zip_code: String
});

export default mongoose.model('tutor', TutorSchema)
