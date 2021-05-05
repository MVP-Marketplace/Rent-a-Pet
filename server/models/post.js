const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    media: { type: String, required: true },
    media_type: { type: String, required: true },
    caption: { type: String, required: false },
    like: [{ type: String, required: false }],
    // comment: [],
  },
  { timestamps: true },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

postSchema.virtual("comments", {
  ref: "PostComment",
  localField: "_id",
  foreignField: "post_id",
  justOne: false,
});

module.exports = mongoose.model("Post", postSchema);
