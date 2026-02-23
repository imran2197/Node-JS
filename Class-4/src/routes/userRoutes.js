const express = require("express");
const { createUser } = require("../controllers/UserController");
const UserRouter = express.Router();

UserRouter.post("/", createUser);

module.exports = UserRouter;
