// mongoose import
const mongoose = require("mongoose");

// schema definition
const likeSchema  = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, required: true },
  docID: { type: mongoose.Types.ObjectId, required: true },
});

// module export
module.exports = mongoose.model("Like", likeSchema);
