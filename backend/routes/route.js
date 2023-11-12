const express = require("express");

const router = express.Router();

// GET all info
router.get("/", (req, res) => {
  res.json({ mssg: "get all info" });
});

// GET one single info
router.get("/:id", (req, res) => {
  res.json({ mssg: "get single piece of info" });
});

// POST new info
router.post("/", (req, res) => {
  res.json({ mssg: "post new info" });
});

// DELETE info
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete info" });
});

// UPDATE info
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update all info" });
});

module.exports = router;
