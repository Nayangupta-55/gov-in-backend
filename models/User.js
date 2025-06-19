import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  confirmPassword: String,
  dob: String,
  gender: String,
  category: String,
  maritalStatus: String,
  disability: String,
  state: String,
  district: String,
  pin: String,
  area: String,
  qualification: String,
  studying: String,
  occupation: String,
  income: String,
  ration: String,
  aadhaar: String,
  interests: [String],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
