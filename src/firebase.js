// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtAcAIc8oNLiW4H5p5zTFIaM9Lpy1z5Mw",
  authDomain: "rymo-e7a16.firebaseapp.com",
  databaseURL: "https://rymo-e7a16-default-rtdb.firebaseio.com",
  projectId: "rymo-e7a16",
  storageBucket: "rymo-e7a16.appspot.com",
  messagingSenderId: "523414762690",
  appId: "1:523414762690:web:51dbce89d11d4ffab3375b",
  measurementId: "G-Z2RR6FDJV9"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCQqKjgS_BADmnR36PRha54O1EGbHnRtxs",
//   authDomain: "shoping-cart-371a6.firebaseapp.com",
//   databaseURL: "https://shoping-cart-371a6-default-rtdb.firebaseio.com",
//   projectId: "shoping-cart-371a6",
//   storageBucket: "shoping-cart-371a6.appspot.com",
//   messagingSenderId: "424769854871",
//   appId: "1:424769854871:web:cf5a5bceb0149638a078d2",
//   measurementId: "G-GCEQGR91B0"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const fetchData = (callback) => {
  onValue(ref(db), (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
