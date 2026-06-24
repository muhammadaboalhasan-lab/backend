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
  await Workout.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "Workout deleted successfully",
  });
});
