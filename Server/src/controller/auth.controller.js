import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";


const SignUp = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;
    if (
      [fullName, email, username, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      return res.status(401).json({ error: "please give all input fields" });
    }
    const isUserExists = await User.findOne({ $or: [{ username }, { email }] });
    if (isUserExists) {
      return res
        .status(401)
        .json({ message: "User already exists with username and password" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      username,
      email,
      password: hashPassword,
    });
    if (!newUser) {
      return res.status(403).json({ error: "Error while signing up" });
    }
    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();
    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const SignIn = async () => {};

const LogOut = async () => {};

export { SignUp, SignIn, LogOut };
