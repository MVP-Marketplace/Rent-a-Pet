const mongoose = require("mongoose");

const postCommentSchema = mongoose.Schema(
  {
    post_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: [true, "Comment must belong to a post"],
    },
    // post: { type: String, required: true },
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostComment", postCommentSchema);
