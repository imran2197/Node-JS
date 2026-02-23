const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://imran251099:XtkSjr5BZeVZp210@learnings.si54c8l.mongodb.net/?appName=Learnings`;

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB...");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
