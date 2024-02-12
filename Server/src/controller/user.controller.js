import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
const fetchUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const updateAccountDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, password, profilePic } = req.body;
    const user = await User.findById(id);
    const currentUser = req.user;
    if (id !== currentUser._id.toString()) {
      return res
        .status(500)
        .json({ message: "you can't update other user 's profile" });
    }
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }
    if (profilePic) {
      if (user.profilePic) {
        cloudinary.uploader.destroy(
          user.profilePic.split("/").pop().split(".")[0]
        );
      }
      const profilePicUrl = await cloudinary.uploader.upload(profilePic);
      user.profilePic = profilePicUrl.secure_url;
    }
    user.fullName = fullName || user.fullName;
    user.email = email || user.email;
    await user.save();
    return res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      profilePic: user.profilePic,
      email: user.email,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export { fetchUser, updateAccountDetails };
