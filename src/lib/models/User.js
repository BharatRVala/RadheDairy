import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phone: String,
  state: String,
  zip: String,
  city: String,
  address: String,
  password: String,
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
