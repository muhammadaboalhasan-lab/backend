const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Workout = require("../models/workoutModel");

exports.getAllWorkouts = catchAsync(async (req, res, next) => {
  const workouts = await Workout.find();
  res.status(200).json({
    status: "success",
    results: workouts.length,
    workouts,
  });
});

exports.createWorkout = catchAsync(async (req, res, next) => {
  const newWorkout = await Workout.create(req.body);
  res.status(201).json({
    status: "success",
    workout: newWorkout,
  });
});

exports.getWorkout = catchAsync(async (req, res, next) => {
  const workout = await Workout.findById(req.params.id);
  if (!workout) {
    return next(new AppError("Workout not found", 404));
  }
  res.status(200).json({
    status: "success",
    workout,
  });
});

exports.updateWorkout = catchAsync(async (req, res, next) => {
  const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    workout,
  });
});

exports.deleteWorkout = catchAsync(async (req, res, next) => {
  const workout = await Workout.findById(req.params.id);
  if (!workout) {
    return next(new AppError("Workout not found", 404));
  }

  await workout.deleteOne();

  res.status(200).json({
    status: "success",
    message: "Workout deleted successfully",
  });
});

exports.searchWorkouts = catchAsync(async (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    return next(new AppError("Name is required", 400));
  }

  const workouts = await Workout.find({
    name: { $regex: `^${name}`, $options: "i" },
  });
  res.status(200).json({
    status: "success",
    results: workouts.length,
    workouts,
  });
});
