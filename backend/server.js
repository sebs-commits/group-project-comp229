require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/route");
const productRoute = require("./routes/productRoute");
// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api", userRoute);
app.use("/api/item", productRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "You are now successfully connected to Atlas DB & listening to port: ",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error); // catches any errors if it fails to connect
  });

process.env;
