const db = require("../models/index");
  cloudinary = require('cloudinary').v2;

/** INDEX route - returns all Pet */

module.exports = {
  findAll: function (req, res) {
    db.Pet.find()
      .then((dbModel) => {
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  /**
   * Returns user specified by the id parameter
   * @param {*} req
   * @param {*} res
   */
  findById: function (req, res) {
    db.Pet.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  /**
   * Creates a new user record in the database.
   * @param {*} req
   * @param {*} res
   */
  create: function (req, res) {
    db.Pet.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  /**
   * Update user record in the database.
   * @param {*} req
   * @param {*} res
   */
  update: function (req, res) {
    db.Pet.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => {
        console.log("dbmodel", dbModel);
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  /**
   * Remove the specified user from the database.
   * @param {*} req
   * @param {*} res
   */
  remove: function (req, res) {
    db.Pet.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
    // **Upload Avatar **//
    uploadAvatar: async function (req,res){
        // must include a fully qualified path to the file.
    // otherwise, cloudinary assumes the path is relative to where server.js resides.
    // TO DO - turn Cloudinary call into middleware to keep from repeating code in multiple files.

    const petId = req.params.id;
      

    await cloudinary.uploader.upload(
   req.body.image
   )
   .then((uploadResult) => {
     db.Pet
     .findOneAndUpdate(
       {_id: petId},
       {$set: 
         {
           avatar: uploadResult.secure_url
         }
       })
       .catch(dbErr => res.status(500).json(dbErr))
       
   })
   .then((saveResult) => {
     res.status(200).json({
     message: 'upload success',
     saveResult,
     // QUESTION: can we retrieve a thumbnail of the asset from cloudinary???
   })
   .catch((error) => {
     res.status(501).json({
       message: 'upload failure',
       error,
     });
   })
 })
 .catch(ultimateError => res.json(ultimateError));

    }
};




