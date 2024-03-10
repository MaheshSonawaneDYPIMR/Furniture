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
    const otpExpires = new Date(
      Date.now() + process.env.OTP_EXPIRE * 60 * 1000
    );

    user = await User.create({
      name,
      email,
      password,
      otp,
      otp_expires: otpExpires,
    });

    await sendMail(email, "Verify Your Account", `Your OTP is ${otp}`);

    sendToken(res, user, 2000, `OTP sent to ${email}`);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const otp = Number(req.body.otp);

    const user = await User.findById(req.user._id);

    if (user.otp !== otp || user.otp_expiry < Date.now()) {
      return res
        .status(400)
        .json({
          success: false,
          message: "invalid otp or otp  has been expired",
        });
    }

    user.otp = null;
    user.verified = true;
    user.otp_expiry = null;

    await user.save();

    sendToken(res, user, 200, "Acount verified");
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email  || !password){
      return res
      .status(400)
      .json({ success: false, message: "please enter all fields" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "invalid Email or Password" });
    }

    const isMatched = await user.comparePassword(password);

    if (!isMatched) {
      return res
        .status(400)
        .json({ success: false, message: "invalid Email or Password" });
    }

    sendToken(res, user, 200, `login success`);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const logout = async(req, res) =>{
  try {
    res.status(200).cookie("token",null,{
      expires: new Date(Date.now())
    }).json({success: true ,message: "logout success"});

    
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });

  }
}
