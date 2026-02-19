const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
    status: { type: String, enum: ["todo", "doing", "done"], default: "todo" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
    createdAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    weather: {
      temperature: Number,
      windspeed: Number,
      is_day: Number,
      weathercode: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
