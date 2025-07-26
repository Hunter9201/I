// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "803161144360"
});

const messaging = firebase.messaging();
