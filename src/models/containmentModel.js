const mongoose = require("mongoose");

const containmentSchema = new mongoose.Schema({
  listID: { type: mongoose.Types.ObjectId, required: true },
  docID: { type: mongoose.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Containment", containmentSchema);
