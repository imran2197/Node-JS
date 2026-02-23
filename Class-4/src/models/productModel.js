const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
      validate: {
        validator: () => {
          return this.product_price >= 10;
        },
        message: "Price should be greater than or equal to 10",
      },
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

module.exports = ProductModel;
