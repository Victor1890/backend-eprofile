import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config/config";

export const signUp = async (req, res) => {
  const { firstName, lastName, email, nickName, password } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    email,
    nickName,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save();

  return res.json({ savedUser });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email });

  if (!userFound) return res.status(404).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    password,
    userFound.password,
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid password" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 60 * 60 * 48,
  });

  res.json({ userFound, token });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).json({ message: "ID nt found" });
  const getUserId = await User.findById(id);
  if (!getUserId) return res.status(404).json({ message: "User not found" });
  return res.status(200).json(getUserId);
};
