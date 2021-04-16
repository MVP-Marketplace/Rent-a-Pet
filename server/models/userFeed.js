const mongoose = require("mongoose");

const userFeedSchema = mongoose.Schema(
  {
    user_id: { type: String, required: true },
    post_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserFeed", userFeedSchema);
