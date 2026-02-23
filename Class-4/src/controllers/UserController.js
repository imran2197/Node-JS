const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await UserModel.create({
      name,
      email,
    });
    res.status(201).json({
      message: "User Created",
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
      err,
    });
  }
};

module.exports = {
  createUser,
};
