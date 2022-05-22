import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  number: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
