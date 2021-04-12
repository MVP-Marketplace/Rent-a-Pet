var admin = require("firebase-admin");

var firebase = require("firebase/app");
require("dotenv").config();

const firebaseApp = firebase.initializeApp(
    {
          apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
          authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
          projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
          storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
    }
  
);

// firebaseAdmin = admin.initializeApp({
//     credential: admin.credential.cert({
//         "project_id": process.env.REACT_APP_FIREBASE_PROJECT_ID,
//         "private_key": process.env.REACT_APP_FIREBASE_SERVICE_PRIVATE_KEY,  // throws invalid PEM formatted message 'Failed to parse private key'
//         "client_email": process.env.REACT_APP_FIREBASE_CLIENT_EMAIL
//         }),
    
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
// });

const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert('./firebase-server-side/mvp-rent-a-pet-dev-firebase-service-account.json'),
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
});
   

// export const something

// export default somethingElse

// export { firebaseApp, firebaseAdmin };
