export const sendToken = (res, user, statusCode, message) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(Date.now() + process.env.JWT_TOKEN_EXPIRE * 60 * 1000),
    httpOnly: true,
  };
  
  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    task: user.task,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    user: userData,
  });
};
