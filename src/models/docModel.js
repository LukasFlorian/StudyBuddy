const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true, unique: true },
  uploadDate: { type: Date, required: true },
  description: { type: String, required: true},
  file: {type: Buffer, required: true},
  exercises: {type: Boolean, required: true},
  summary: {type: Boolean, required: true},
  scribbledNotes: {type: Boolean, required: true},
});

module.exports = mongoose.model("Document", docSchema);
