// Handle uncaught exception Errors
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION 💥");
  console.log(err.name, err.message, err.stack.split("\n")[1].trim());
  process.exit(1);
});

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

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

// Handle unhandled rejection Errors
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION 💥");
  console.log(err.name, err.message);
  server.close(() => {
    console.log("SERVER CLOSING 🛑");
    process.exit(1);
  });
});
