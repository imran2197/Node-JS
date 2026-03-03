const express = require("express");
const {
  register,
  login,
  getCurrentUser,
  logout,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.post("/get-current-user", authMiddleware, getCurrentUser);

module.exports = userRouter;
