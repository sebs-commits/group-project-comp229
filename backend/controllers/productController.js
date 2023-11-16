const Product = require("../models/productSchema");
const mongoose = require("mongoose");

// GET all requests
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(401).json({ error: "Sorry, we couldnt get the products" });
  }
};

// GET specific id requests
const getProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId); // i might need to fix this
    if (product) {
      res.status(201).json(product);
    } else {
      res.status(500).json({ message: "Product was not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server could not fetch that data" });
  }
};
// POST product
const createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      quantity,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Could not create product" });
  }
};
// UPDATE all requests
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const product = await Product.findOneAndUpdate(
        { _id: id },
        {
          ...req.body,
        }
      );
      res.status(201).json({ message: "Product succesfully changed" });
    } else {
      res.status(401).json({ message: "This is not a valid product" });
    }
  } catch (error) {
    res.status(500).json({ error: "Could not update product" });
  }
};
// DELETE specific requests
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const product = await Product.findOneAndDelete({ _id: id });
      res.status(201).json({ message: "Product successfully deleted" });
    } else {
      res.status(401).json({ message: "That product id is not valid" });
    }
  } catch (error) {
    res.status(500).json({ error: "Could not delete product" });
  }
};
// must export so that I can import it into route file
module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
