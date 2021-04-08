const mongoose = require("mongoose");

const postCommentSchema = mongoose.Schema(
  {
    post_id: { type: String, required: true },
    user_id: { type: String, required: true },
    comments: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostComment", postCommentSchema);
