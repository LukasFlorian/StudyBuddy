// mongoose import
const mongoose = require("mongoose");

// schema definition
const bookmarkListSchema = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, required: true },
  name: { type: String, required: true, unique: true },
});

// module export
module.exports = mongoose.model("BookmarkList", bookmarkListSchema);
