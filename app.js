const cors = require("cors");
const express = require("express");
const app = express();


//Middleware
app.use(cors());
app.use(express.json());
app.set("query parser", "extended");

//Routes

module.exports = app;
