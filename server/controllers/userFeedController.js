const db = require("../models/index");

module.exports = {
  findAll: function (req, res) {
    db.UserFeed.find()
      .then((dbModel) => {
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.UserFeed.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.UserFeed.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.UserFeed.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => {
        console.log("dbmodel", dbModel);
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.UserFeed.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
