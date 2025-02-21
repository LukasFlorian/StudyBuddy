const mongoose = require("mongoose");

const bookmarkListSchema = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, required: true },
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("BookmarkList", bookmarkListSchema);
