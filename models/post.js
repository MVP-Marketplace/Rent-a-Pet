const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    user_id: { type: String, required: true },
    media: { type: String, requied: true },
    total_likes: { type: Number, default: 0 },
    total_comments: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
