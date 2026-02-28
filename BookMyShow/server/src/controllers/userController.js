const UserModel = require("../models/userModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (userExist !== null) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    // const user = new User(req.body);
    // await user.save();

    await User.create(req.body);

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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    if (user === null || user === undefined) {
      res.status(404).json({
        success: false,
        message: "User does not exists. Please register.",
      });
    }

    if (password !== user.password) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email and Password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "You've successfully logged in!",
      data: token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  register,
  login,
};
