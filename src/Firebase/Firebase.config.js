// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsK2XMggN9HTVEVD8wy-e-49CNdKiu7Tk",
  authDomain: "ma-er-ranna.firebaseapp.com",
  projectId: "ma-er-ranna",
  storageBucket: "ma-er-ranna.appspot.com",
  messagingSenderId: "275039024171",
  appId: "1:275039024171:web:e0815e8de99cf12ea9a66e",
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
