const { response } = require("express");
const db = require("../models/index"),
  cloudinary = require("cloudinary").v2;
const firebaseAdmin = require("../../firebase-server-side/firebase-server-side-utils");
const admin = require("firebase-admin");

/** INDEX route - returns all Users */

module.exports = {
  findAll: function (req, res) {
    db.User.find()
      .then((dbModel) => {
        // console.log(dbModel);
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
    db.User.findById(req.params.id)
      // .populate("BankingInformation")
      // .populate("PaymentInformation")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  /**
   * Creates a new user record in the database.
   * @param {*} req
   * @param {*} res
   */
  create: function (req, res) {
    // console.log(req.body);
    let info = req.body;

    // let username = req.body.email.split("@").slice(0, 1).join("");

    // let newUser = {
    //   email: req.body.email,
    //   password: req.body.password,
    //   displayName:
    // }
    // var newUid;

    // var email_address = req.body.email_address;
    // var first_name = req.body.first_name;
    // var last_name = req.body.last_name;
    // var user_type = req.body.user_type;
    // var displayName = `${first_name} ${last_name}`;

    // const newFirebaseUserRecord = {
    //   email: email_address,
    //   emailVerified: false,
    //   password: req.body.password,
    //   displayName: `${first_name} ${last_name}`,
    //   disabled: false,
    // };

    // // step 1:  create new user in Firebase.  Don't think this is optimal but doing this to avoid getting stuck
    // // alternative is to turn this call into middleware.

    if (req.body.type === "Email") {
      admin
        .auth()
        .createUser({
          email: info.email,
          password: info.password,
        })
        .then((userCredential) => {
          console.log(userCredential.uid, info.email, info.username);

          db.User.create({
            email_address: info.email,
            _id: userCredential.uid,
            username: info.username,
          })
            .then((dbModel) => res.status(200).json(dbModel))
            .catch((err) => res.status(422).json(err));
        })
        .catch((err) => console.log(err));
    } else {
      db.User.create({
        email_address: info.email,
        display_name: info.display,
        _id: info.uid,
        username: info.username,
      })
        .then((dbModel) => res.status(200).json(dbModel))
        .catch((err) => res.status(422).json(err));
    }

    // admin
    //   .auth()
    //   .createUser(newFirebaseUserRecord)
    //   .then((userRecord) => {
    //     console.log("New User Record", userRecord);
    //     console.log("Successfully created new user:", userRecord.uid);
    //     newUid = userRecord.uid;

    //     // step 2: create the new user in our database.

    //     const newUser = {
    //       first_name: first_name,
    //       last_name: last_name,
    //       email_address: email_address,
    //       user_type: user_type,
    //       status: "active",
    //       firebase_uid: newUid,
    //       username: username,
    //       display_name: displayName,
    //     };
    //     console.log(`New user Object: ${newUser}`);

    //     /**
    //      * The request may include the following
    //      * UserProfile: {fName, LName, emailAddress, uid},
    //      * PetPreferences: {species, age, gender},
    //      * BankingDetails: {abaNumber, accountNumber},
    //      * PaymentDetails: {cardNumber, expirationDate, billingZipCode}
    //      *
    //      * First save the User, then call the controller to save the other elements in their respective tables.
    //      */

    //     db.User.create(newUser)
    //       .then((dbModel) => res.status(200).json(dbModel))
    //       .catch((err) => res.status(422).json(err));
    //   })
    //   .catch((error) => {
    //     console.log("Error creating new user: ", error);
    //     res.status(422).json(error);
    //   });
  },

  /**
   * Update user record in the database.
   * @param {*} req
   * @param {*} res
   */
  update: async function (req, res) {
    let newInfo = {
      username: req.body.username,
      display_name: req.body.display_name,
      about: req.body?.about,
      website: req.body?.website,
    };
    // // console.log(newInfo);
    // // console.log(req.params.id);

    if (req.body.avatar.length > 100) {
      const avatarStr = req.body.avatar;
      const avatarResponse = await cloudinary.uploader.upload(avatarStr, {
        upload_preset: "ml_default",
      });

      newInfo.avatar = avatarResponse.public_id;
    }

    if (req.body.background.length > 100) {
      const backgroundStr = req.body.background;
      const backgroundResponse = await cloudinary.uploader.upload(
        backgroundStr,
        {
          upload_preset: "ml_default",
        }
      );
      newInfo.background = backgroundResponse.secure_url;
    }

    db.User.findByIdAndUpdate({ _id: req.params.id }, newInfo)
      .then((dbModel) => {
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
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // **Upload Avatar **//
  uploadAvatar: async function (req, res) {
    // must include a fully qualified path to the file.
    // otherwise, cloudinary assumes the path is relative to where server.js resides.
    // TO DO - turn Cloudinary call into middleware to keep from repeating code in multiple files.

    /**
     *
     * UnhandledPromiseRejectionWarning
     * This means that a promise you called rejected, but there was no catch used to handle the error. Add a catch after the offending then to handle this properly.
     */

    const userId = req.params.id;

    console.log(req.body);

    // await cloudinary.uploader
    //   .upload(req.body.image)
    //   .then((uploadResult) => {
    //     db.User.findOneAndUpdate(
    //       { _id: userId },
    //       {
    //         $set: {
    //           avatar: uploadResult.secure_url,
    //         },
    //       }
    //     ).catch((dbErr) => res.status(500).json(dbErr));
    //   }) // I think the missing catch should go here.
    //   .catch((findErr) => {
    //     res.status(402).json({
    //       message: "User not found",
    //       findErr,
    //     });
    //   })
    //   .then((saveResult) => {
    //     res
    //       .status(200)
    //       .json({
    //         message: "upload success",
    //         saveResult,
    //         // QUESTION: can we retrieve a thumbnail of the asset from cloudinary???
    //       })
    //       .catch((error) => {
    //         res.status(501).json({
    //           message: "upload failure",
    //           error,
    //         });
    //       });
    //   })
    //   .catch((ultimateError) => res.json(ultimateError));
  },
};
