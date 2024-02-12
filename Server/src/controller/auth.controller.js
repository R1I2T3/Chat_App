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
      return res.status(401).json({ message: "please give all input fields" });
    }
    const isUserExists = await User.findOne({ $or: [{ username }, { email }] });
    if (isUserExists) {
      return res
        .status(409)
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
      return res.status(403).json({ message: "Error while signing up" });
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

const SignIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(401)
        .message({ error: "all input fields are not filled" });
    }
    const currentUser = await User.findOne({ username });
    if (!currentUser) {
      return res.status(404).json({ error: "Incorrect username or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      currentUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(404).json({ error: "Incorrect username or password" });
    }
    generateTokenAndSetCookie(currentUser._id, res);
    return res.status(201).json({
      _id: currentUser._id,
      fullName: currentUser.fullName,
      username: currentUser.username,
      email: currentUser.email,
      profilePic: currentUser.profilePic,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const LogOut = async (req, res) => {
  try {
    res.clearCookie("chat_app");
    return res.status(200).json({ message: "User log out successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export { SignUp, SignIn, LogOut };
