const express = require("express");
const {
  getAllWorkouts,
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
  searchWorkouts,
} = require("../controllers/workoutController");

const router = express.Router();

router.route("/search").get(searchWorkouts);

router.route("/").get(getAllWorkouts).post(createWorkout);

router.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);

module.exports = router;
