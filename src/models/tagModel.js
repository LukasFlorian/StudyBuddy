const mongoose = require("mongoose");

const tagModel = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Tag", tagModel);
