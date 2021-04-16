const mongoose = require("mongoose");

const postLikeSchema = mongoose.Schema(
  {
    post_id: { type: String, required: true },
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostLike", postLikeSchema);
