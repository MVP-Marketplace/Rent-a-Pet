const mongoose = require("mongoose");

const postLikeSchema = mongoose.Schema(
  {
    // post_id: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "Post",
    //   required: [true],
    // },
    post_id: { type: String, required: true },
    user_id: [{ type: String, required: true }],
  },
  { timestamps: true }
);
// {
//   type: mongoose.Schema.ObjectId,
//   ref: 'User',
//   required: [true, 'Banking Detail must belong to a user']
// },

module.exports = mongoose.model("PostLike", postLikeSchema);
