import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    nickName: String,
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("User", userSchema);
