import User from "../models/users.js";
import { sendMail } from "../utils/sendMail.js";
import { sendToken } from "../utils/sendToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const otp = Math.floor(Math.random() * 1000000);
    const otpExpires = new Date(Date.now() + process.env.OTP_EXPIRE * 60 * 1000);

    user = await User.create({
      name,
      email,
      password,
      otp,
      otp_expires: otpExpires,
    });
   
    await sendMail(email, "Verify Your Account", `Your OTP is ${otp}`);

    sendToken(res, user, 200, `OTP sent to ${email}`);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
