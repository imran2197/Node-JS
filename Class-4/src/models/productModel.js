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
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const validCategories = ["electronics", "clothes", "stationary", "furniture"];

ProductSchema.pre("save", (next) => {
  const invalidCategories = this.category.filter((category) => {
    return !validCategories.includes(category);
  });

  if (invalidCategories.length > 0) {
    return next(
      new Error(`Invalid Categories ${invalidCategories.join(", ")}`),
    );
  } else {
    next();
  }
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
