const db = require("../models/index");

module.exports = {
  findAll: function (req, res) {
    db.PostLike.find()
      .then((dbModel) => {
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.PostLike.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: async function (req, res) {
    // console.log(req.body.data);
    let postId = [];
    // console.log(user_id);

    // db.PostLike.find({})
    //   .populate("user_id")
    //   .exec(function (err, user_id) {
    //     if (err) return console.log(err);
    //     console.log("hi", user_id);
    //   });
    await db.PostLike.create(req.body.data)
      .then((dbModel) => {
        // res.json(dbModel))

        postId = dbModel._id.toString();
        console.log(typeof postId);
      })
      .catch((err) => res.status(422).json(err));
    console.log(postId);
    db.Post.findByIdAndUpdate(
      { _id: req.body.data.post_id },
      { $set: { like: postId } }
    )
      .then((dbModel) => console.log(dbModel))
      .catch((err) => console.log(err));
  },
  update: function (req, res) {
    db.PostLike.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => {
        console.log("dbmodel", dbModel);
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.PostLike.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
