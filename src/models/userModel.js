// import mongoose
const mongoose = require("mongoose");

// schema definition
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// module export
module.exports = mongoose.model("User", userSchema);
