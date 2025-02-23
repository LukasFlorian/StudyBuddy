// mongoose import
const mongoose = require("mongoose");

// schema definition
const containmentSchema = new mongoose.Schema({
  listID: { type: mongoose.Types.ObjectId, required: true },
  docID: { type: mongoose.Types.ObjectId, required: true },
});

// module export
module.exports = mongoose.model("Containment", containmentSchema);
