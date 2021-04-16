const db = require("../models/index");

module.exports = {
  findAll: function (req, res) {
    db.UserFollower.find()
      .then((dbModel) => {
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.UserFollower.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.UserFollower.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.UserFollower.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => {
        console.log("dbmodel", dbModel);
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.UserFollower.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
