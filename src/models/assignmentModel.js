const mongoose = require("mongoose");

const assignmentSchema  = new mongoose.Schema({
  tagID: { type: mongoose.Types.ObjectId, required: true },
  docID: { type: mongoose.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
