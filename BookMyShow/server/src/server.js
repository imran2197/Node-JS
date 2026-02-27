const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

const dotEnv = require("dotenv");
dotEnv.config();

const connectDB = require("./dbconfig/dbconfig");
connectDB();

const userRouter = require("./routes/userRouter");

// Routes
app.use("/api/users", userRouter);

app.listen(8082, () => {
  console.log("Server is running");
});
