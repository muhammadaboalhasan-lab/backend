const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { generateText } = require("ai");

exports.generateWorkout = catchAsync(async (req, res, next) => {
  const { prompt } = req.body;

  if (!prompt) {
    return next(new AppError("Prompt is required", 400));
  }

  const workout = await generateText({
    model: "openai/gpt-4o-mini",
    prompt: `Generate a workout description by the user's prompt: ${prompt}`,
  });
  res.status(200).json({
    status: "success",
    description: workout.text,
  });
});
