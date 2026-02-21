// XtkSjr5BZeVZp210
const express = require("express");
const app = express();
app.use(express.json());

const dbUrl = `mongodb+srv://imran251099:XtkSjr5BZeVZp210@learnings.si54c8l.mongodb.net/?appName=Learnings`;

const mongoose = require("mongoose");
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch((err) => console.log(err));

const ProductSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    isInStock: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ProductModel = mongoose.model("products", ProductSchema);

app.post("/api/products", async (req, res) => {
  const { product_name, product_price, isInStock, category } = req.body;

  const product = await ProductModel.create({
    product_name,
    product_price,
    isInStock,
    category,
  });
  res.status(201).json({
    message: "Product created",
    data: product,
  });
});

app.get("/api/products", async (req, res) => {
  const product = await ProductModel.find();
  res.status(200).json({
    data: product,
  });
});

app.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.status(200).json({
    data: product,
  });
});

app.put("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findByIdAndUpdate(id, req.body);
  res.status(200).json({
    message: "Product updated successfully.",
  });
});

app.delete("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Product deleted successfully",
  });
});

app.listen(9999);
