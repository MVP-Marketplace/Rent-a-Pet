const db = require("../models/index"),
cloudinary = require('cloudinary').v2; 


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
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Post.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => {
        console.log("dbmodel", dbModel);
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Post.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  uploadMedia: function async(req,res){
    try{
      const response = await cloudinary.uploader.upload(
        req.files.avatar.tempFilePath
      );
      req.post.media = response.secure_url;
      await req.post.save();
      res.json(response);
    }catch (error){
        res.status(400).json(err);
    }
  }
};
