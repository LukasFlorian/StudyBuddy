const mongoose = require("mongoose");

const likeSchema  = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, required: true },
  docID: { type: mongoose.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Like", likeSchema);
