const UserModel = require("../models/userModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Registration Successful, Please login",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User does not exists. Please register.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email and Password",
      });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", `Bearer ${token}`, {
      httpOnly: true,
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "You've successfully logged in!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "You've successfully logged out!",
  });
};

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.body.userId).select("-password");

  res.status(200).json({
    success: true,
    message: "You are authorized to go tho the protected route.",
    data: user,
  });
};

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
};
