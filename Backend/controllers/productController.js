const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

const getProductById = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findById(
        req.params.id
      );

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error(
        "Product not found"
      );
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

const createProduct = async (
  req,
  res
) => {
  try {
    const product = await Product.create(
      req.body
    );

    res.status(201).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

const updateProduct = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      res.status(404);
      throw new Error(
        "Product not found"
      );
    }

    product.name =
      req.body.name || product.name;

    product.brand =
      req.body.brand || product.brand;

    product.category =
      req.body.category ||
      product.category;

    product.description =
      req.body.description ||
      product.description;

    product.image =
      req.body.image || product.image;

    product.price =
      req.body.price || product.price;

    product.countInStock =
      req.body.countInStock ||
      product.countInStock;

    const updatedProduct =
      await product.save();

    res.json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

const deleteProduct = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      res.status(404);
      throw new Error(
        "Product not found"
      );
    }

    await product.deleteOne();

    res.json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};