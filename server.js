const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

dotenv.config({ path: "./config.env" });

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world2" });
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB)
  .then((con) => console.log(`DATABASE SUCCESSFULLY CONNECTED 🏬`));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`SERVER RUNNING 🚀`);
});
