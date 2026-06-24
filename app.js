const cors = require("cors");
const express = require("express");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const workoutRoutes = require("./Routers/workoutRoutes");
const aiRoutes = require("./Routers/aiRoutes");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.set("query parser", "extended");

//Routes
app.use("/workouts", workoutRoutes);
app.use("/ai", aiRoutes);
app.all("*all", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
