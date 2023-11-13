const express = require("express");
const {
  createAccount,
  getLogin,
  getUser,
} = require("../controllers/userController");
const router = express.Router();

// the following is to get user registration and user login
router.post("/register", createAccount);

router.get("/register", getUser);

router.get("/login", getLogin);
// registration and user login route ends here

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
