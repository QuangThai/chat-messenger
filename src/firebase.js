import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "firebase/storage";

var config = {
   apiKey: "AIzaSyA1oasOPm2B-kDDNfTBxzuU7BRt_pxLvuU",
   authDomain: "chat-box-react-4f05f.firebaseapp.com",
   databaseURL: "https://chat-box-react-4f05f.firebaseio.com",
   projectId: "chat-box-react-4f05f",
   storageBucket: "chat-box-react-4f05f.appspot.com",
   messagingSenderId: "169079498423",
   appId: "1:169079498423:web:2507841bcbacb86ed78f32",
   measurementId: "G-L885W4W6KK"
};
firebase.initializeApp(config);

export default firebase;
