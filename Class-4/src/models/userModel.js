const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
});

UserSchema.pre("save", (next) => {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

UserSchema.post("save", (doc, next) => {
  console.log(`User ${doc.name} has been saved.`);
  next();
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
