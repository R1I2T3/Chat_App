import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
const Authorize = async (req, res, next) => {
  try {
    const token = req.cookies.chat_cookie;
    if (!token) {
      return res.status(404).json({ error: "Unauthorized access" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(404).json({ error: "Invalid cookie" });
    }
    const user = await User.findById(decode._id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export default Authorize;
