const mongoose = require("mongoose");

const TodoDoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});
// should not have hyphens
module.exports = mongoose.model("Todo-done", TodoDoneSchema);
