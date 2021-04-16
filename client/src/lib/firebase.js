import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file
// do not un-comment!!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCZgLIjLrcRuVCgAFqI18rpUJzc0rhPEZM",
    authDomain: "rap-layout.firebaseapp.com",
    projectId: "rap-layout",
    storageBucket: "rap-layout.appspot.com",
    messagingSenderId: "1050851533217",
    appId: "1:1050851533217:web:41ef9c7ebf540591422be0"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


// call seed file only once here
// do not un-comment and run again!!
// seedDatabase(firebase);


export { firebase, FieldValue};