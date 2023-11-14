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

module.exports = router;
