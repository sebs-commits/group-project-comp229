const express = require("express");
const router = express.Router();
const {
  getProduct,
  getProducts,
  createProduct,
} = require("../controllers/productController");

// GET all info
router.get("/", getProducts);

// GET one single info
router.get("/:id", getProduct);

// POST new info
router.post("/", createProduct);

// DELETE and UPDATE need to be created
// DELETE info
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete info" });
});

// UPDATE info
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update all info" });
});

module.exports = router;
