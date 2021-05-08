const { response } = require('express');
const db = require('../models/index');
cloudinary = require('cloudinary').v2;

/**
 * TO-DO
 * 1. Remove route - remove media from Cloudinary and our database.
 * 2. Figure out logic behind 'updating' a piece of media.  Does this mean replacing it completely in Cloudinary?
 * 3. If create new media record in DB fails, delete the corresponding media from Cloudinary so it is not orphaned.
 */

/** INDEX route - returns all UserMedias */

module.exports = {
  findAll: function (req, res) {
    db.UserMedia.find()
      .then((dbModel) => {
        console.log(dbModel);
        return res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  /**
   * Returns UserMedia specified by the id parameter
   * @param {*} req
   * @param {*} res
   */
  findById: function (req, res) {
    db.UserMedia.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

/**
 * Creates a new UserMedia record in the database.
 * @param {*} req 
 * @param {*} res 
 */
  create: function(req, res) {

    let mediaLink;
    let newMedia = {
        name: req.body.media_name,
        description: req.body.media_description,
        media_link: mediaLink
    };

    // Step 1:  upload media to Cloudinary
    await cloudinary.uploader.upload(
        req.body.image
        )
        .catch((uploadError) => {
            res.status(402).json({
                message: 'Cloudinary upload failed',
                uploadError
            });
        })
        .then((uploadResult) => {
    // Step 2: create document in our UserMedia database collection.

          newMedia.media_link = uploadResult.secure_url;
          console.log('New Media Item', newMedia);

          db.UserMedia
          .create(newMedia)
          .catch(dbErr => res.status(500).json(dbErr))
            
        })
        .catch((createError) => {
            
          res.status(402).json({
            message: 'Create new media record failed',
            createError
          })
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



  },

  /**
   * Update UserMedia record in the database.
   * @param {*} req
   * @param {*} res
   */
//   update: function (req, res) {
//     // { following: `${req.body.info.followerId}` }
//     console.log(req.body.info.followerId);
//     console.log(req.params.id);
//     db.UserMedia.findByIdAndUpdate(
//       { _id: req.params.id },
//       { $push: { following: req.body.info.followerId } }
//     )
//       .then((dbModel) => {
//         console.log(dbModel);
//         return res.json(dbModel);
//       })
//       .catch((err) => res.status(422).json(err));
//   },
/**
 * Remove the specified UserMedia from the database.
 * @param {*} req 
 * @param {*} res 
 */
  remove: function(req, res) {
      

    db.UserMedia
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // **Upload Avatar **//
  uploadAvatar: async function (req,res){

    // must include a fully qualified path to the file.
    // otherwise, cloudinary assumes the path is relative to where server.js resides.
    // TO DO - turn Cloudinary call into middleware to keep from repeating code in multiple files.

    /**
     * 
     * UnhandledPromiseRejectionWarning
     * This means that a promise you called rejected, but there was no catch used to handle the error. Add a catch after the offending then to handle this properly.
     */

      const userId = req.params.id;
      

       await cloudinary.uploader.upload(
      req.body.image
      )
      .then((uploadResult) => {
        db.User
        .findOneAndUpdate(
          {_id: userId},
          {$set: 
            {
              avatar: uploadResult.secure_url
            }
          })
          .catch(dbErr => res.status(500).json(dbErr))
          
      })// I think the missing catch should go here.
      .catch((findErr) => {
        res.status(402).json({
          message: 'User not found',
          findErr
        })
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

}

