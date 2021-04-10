const mongoose = require("mongoose");

const userFollowerSchema = mongoose.Schema(
  {
    user_id: { type: String, required: true },
    foller_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserFollow", userFollowerSchema);
