// const {
//   default: formatRelativeWithOptions,
// } = require("date-fns/esm/fp/formatRelativeWithOptions/index.js");
const db = require("../models/index"),
  cloudinary = require("cloudinary").v2;

module.exports = {
  findAll: function (req, res) {
    db.Post.find()
      .then((dbModel) => {
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Post.findById(req.params.id)
      .populate("comments")
      .then((dbModel) => {
        console.log(typeof dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: async function (req, res) {
    // console.log(req.body.data.username);
    try {
      let post = {
        user_id: req.body.data.user_id,
        username: req.body.data.username,
        caption: req.body.data.caption,
      };
      const fileStr = req.body.data.media;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "ml_default",
      });
      // console.log(uploadResponse);

      post.media = uploadResponse.public_id;
      post.media_type = uploadResponse.resource_type;
      // console.log(post);
      db.Post.create(post)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } catch (err) {
      console.log(err);
    }
  },

  update: function (req, res) {
    if (req.body.action === "add") {
      db.Post.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { like: req.body.user_id } }
      )
        .then((dbModel) => {
          return res.json(dbModel);
        })
        .catch((err) => res.status(422).json(err));
    } else {
      db.Post.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { like: req.body.user_id } }
      )
        .then((dbModel) => {
          return res.json(dbModel);
        })
        .catch((err) => res.status(422).json(err));
    }
  },

  remove: function (req, res) {
    db.Post.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  uploadMedia: async function (req, res) {
    // must include a fully qualified path to the file.
    // otherwise, cloudinary assumes the path is relative to where server.js resides.
    // TO DO - turn Cloudinary call into middleware to keep from repeating code in multiple files.

    const postId = req.params.id;

    await cloudinary.uploader
      .upload(req.body.image)
      .then((uploadResult) => {
        db.Post.findOneAndUpdate(
          { _id: postId },
          {
            $set: {
              avatar: uploadResult.secure_url,
            },
          }
        ).catch((dbErr) => res.status(500).json(dbErr));
      })
      .then((saveResult) => {
        res
          .status(200)
          .json({
            message: "upload success",
            saveResult,
            // QUESTION: can we retrieve a thumbnail of the asset from cloudinary???
          })
          .catch((error) => {
            res.status(501).json({
              message: "upload failure",
              error,
            });
          });
      })
      .catch((ultimateError) => res.json(ultimateError));
  },
};
