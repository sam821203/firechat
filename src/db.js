// change path for new version : import firebase from 'firebase/app';        to this: import firebase from 'firebase/compat/app';
import firebase from "firebase/compat/app";
import "firebase/compat/database";


const config = {
  // API KEYS
  apiKey: "AIzaSyAlzGOGtiWkbuJ9D1LWErrZO01Hi8SK_3U",
  authDomain: "firechat-91f7c.firebaseapp.com",
  projectId: "firechat-91f7c",
  storageBucket: "firechat-91f7c.appspot.com",
  messagingSenderId: "401793549951",
  appId: "1:401793549951:web:884263e93aaa33dc95e14a",
  // update data url，default is us
  databaseURL: "https://firechat-91f7c-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const db = firebase.initializeApp(config);
export default db;