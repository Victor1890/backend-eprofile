import User from "../models/User";

export const checkDuplicateNickName = async (req, res, next) => {
  const { nickName } = req.body;
  const userName = await User.findOne({ nickName });

  if (userName)
    return res.status(400).json({ message: "The Nick name already exists" });

  next();
};

export const checkDuplicateUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) return res.status(400).json({ message: `The user already exists` });

  next();
};
