const connectDb = require("./config/dbConfig");

const express = require("express");
const productRouter = require("./routes/productRoutes");
const app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the products api");
});

app.use("/api/products", productRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(9999, (req, res) => {
  console.log(`The server is running in port 3000`);
});
