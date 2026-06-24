const express = require("express");
const { generateWorkout } = require("../controllers/aiController");

const router = express.Router();

router.route("/generateWorkout").post(generateWorkout);

module.exports = router;
