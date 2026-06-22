const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.set("query parser", "extended");

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

const server = app.listen(PORT, () => {
  console.log(`SERVER RUNNING 🚀`);
});
