// mongoose import
const mongoose = require("mongoose");

// schema definition
const assignmentSchema  = new mongoose.Schema({
  tagID: { type: mongoose.Types.ObjectId, required: true },
  docID: { type: mongoose.Types.ObjectId, required: true },
});

// module export
module.exports = mongoose.model("Assignment", assignmentSchema);
