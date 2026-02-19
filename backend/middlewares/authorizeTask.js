const Task = require("../Models/Task");
const ApiError = require("../utils/ApiError");

exports.authorizeTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return next(new ApiError(404, "Task not found"));
    }

    if (task.user.toString() !== req.user.id) {
      return next(new ApiError(403, "Forbidden: You cannot access this task"));
    }

    req.task = task;

    next();
  } catch (err) {
    next(err);
  }
};
