// import mongoose
const mongoose = require("mongoose");

// schema definition
const tagModel = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

// module export
module.exports = mongoose.model("Tag", tagModel);
