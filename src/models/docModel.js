const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  uploadDate: { type: Date, required: true },
  description: { type: String, required: true },
  file: {type: Buffer, required: true },
  fileType: { type: String, required: true },       // neu
  originalName: { type: String, required: true },     // neu
  tag: { type: String, required: false },
});

module.exports = mongoose.model("Doc", docSchema);
