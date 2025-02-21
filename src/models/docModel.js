const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true, unique: true },
  uploadDate: { type: Date, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Document", docSchema);
