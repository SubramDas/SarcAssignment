importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCRXUdZB3NRNssTQq2oNytylLDvn6oOMRg",
    authDomain: "book-store-cb665.firebaseapp.com",
    projectId: "book-store-cb665",
    storageBucket: "book-store-cb665.appspot.com",
    messagingSenderId: "83544742662",
    appId: "1:83544742662:web:a16d92a4cdb6f42a199c87"
  };

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload)=>{
    console.log("Received Message", payload)
    const notificationTitle = payload.notification.title
    const notificationOptions= {
        body: payload.notification.body,
        icon: payload.notification.icon
    }
    self.registration.showNotification(notificationTitle, notificationOptions)
})

