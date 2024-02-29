const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ status: true, message: "Backend Server is Running" });
});

app.listen(PORT, () => {
  console.log(`Backend Server is Running in http://localhost:${PORT} `);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/MyCompleteProject")
  .then((connected) => {
    console.log("Mongodb Connected Successfully...");
  })
  .catch((err) => {
    console.log("Mongodb Connection Error:", err);
  });

