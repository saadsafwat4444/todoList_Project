const Task = require("../Models/Task");
const _ApiError = require("../utils/ApiError");
const weatherService = require("../services/weather.service");

// Create a task
exports.createTask = async (req, res, next) => {
  try {
    const { title, desc, status, priority, createdAt, latitude, longitude } =
      req.body;

    const currentWeather = await weatherService.getCurrentWeather(
      latitude,
      longitude
    );

    const task = await Task.create({
      title,
      desc,
      status,
      priority,
      createdAt,
      user: req.user._id,
      weather: currentWeather
        ? {
            temperature: currentWeather.temperature,
            windspeed: currentWeather.windspeed,
            is_day: currentWeather.is_day,
            weathercode: currentWeather.weathercode,
          }
        : null,
    });
    res.status(201).json({ success: true, task });
  } catch (err) {
    next(err);
  }
};

// GetTasks
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, tasks });
  } catch (err) {
    next(err);
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ success: true, task });
};

// Delete Task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, message: "Task deleted" });
};
