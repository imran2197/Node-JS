const ProductModel = require("../models/productModel");

const createProduct = async (req, res) => {
  const { product_name, product_price, isInStock, category } = req.body;
  try {
    const product = await ProductModel.create({
      product_name: product_name,
      product_price: product_price,
      isInStock: isInStock,
      category: category,
    });
    res.status(201).json({
      message: "Product created",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
      err,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    res.status(200).json({
      message: "Products",
      data: allProducts,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
      err,
    });
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findById(id);
    res.status(200).message(product);
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
      err,
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id;
    await ProductModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Resources Updated" });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
      err,
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    return res.status(201).json({ message: "Resource Deleted" });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
      err,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
