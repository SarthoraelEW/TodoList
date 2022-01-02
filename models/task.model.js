const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    activity: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    deadline: {
      type: String,
      default: ""
    },
    participants: {
      type: [String],
      default: []
    },
    complete: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const TaskModel = mongoose.model("task", TaskSchema);

module.exports = TaskModel;