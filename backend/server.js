require("dotenv").config();

const express = require("express");

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ mssg: "welcome to our application" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("You have are connected to PORT ", process.env.PORT);
});

process.env;
