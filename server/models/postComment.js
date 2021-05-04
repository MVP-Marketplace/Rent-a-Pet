const mongoose = require("mongoose");

const postCommentSchema = mongoose.Schema(
  {
    post_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: [true, "Comment must belong to a post"],
    },
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    comments: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostComment", postCommentSchema);
