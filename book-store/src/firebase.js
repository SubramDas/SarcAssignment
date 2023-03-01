// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// import admin, { credential } from "firebase-admin"
// import credentials from "./credentials.json"

// admin.initializeApp({
//   credential:admin.credential.cert(credentials)
// });

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRXUdZB3NRNssTQq2oNytylLDvn6oOMRg",
  authDomain: "book-store-cb665.firebaseapp.com",
  projectId: "book-store-cb665",
  storageBucket: "book-store-cb665.appspot.com",
  messagingSenderId: "83544742662",
  appId: "1:83544742662:web:a16d92a4cdb6f42a199c87"
};

// Initialize Firebase

// function getAccessToken() {
//   return new Promise(function(resolve, reject) {
//     const key = require('../placeholders/service-account.json');
//     const jwtClient = new google.auth.JWT(
//       key.client_email,
//       null,
//       key.private_key,
//       SCOPES,
//       null
//     );
//     jwtClient.authorize(function(err, tokens) {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(tokens.access_token);
//     });
//   });
// }

// const currentToken=getToken(messaging, {vapidKey: "BPRGMFtMm7qYR--4SzG1SSyU5hYeYNxUYB8gTicLxz6ycl81ST_ikQDmKo3HBQ_J83q8FEx968s7t8vvBY7qv1w"})
// if(currentToken){

// }
// else{
//     console.log("No Token")
// }


export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);