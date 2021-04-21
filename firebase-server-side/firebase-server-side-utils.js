const admin = require("firebase-admin");

const firebase = require("firebase/app");
require("dotenv").config();


admin.initializeApp({
    credential: admin.credential.cert('./firebase-server-side/mvp-rent-a-pet-dev-firebase-service-account.json'),
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
});
   

module.exports = { admin };
