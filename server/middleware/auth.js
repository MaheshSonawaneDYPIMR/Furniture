import jwt from "jsonwebtoken";
import User from "../models/users.js";

export const isAuthenticated = async (req, res) => {
  try {
    const token = req.cookies;
    console.log(`token`, token);
    if (!token) {
      return res.status(500).json({ success: false, error: error.message });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id);

    next();
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
