// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyABgKrFpiFqC9gndXaK09MvhAVhZHAGk78",
  authDomain: "lionhunterwebpush.firebaseapp.com",
  projectId: "lionhunterwebpush",
  storageBucket: "lionhunterwebpush.firebasestorage.app",
  messagingSenderId: "803161144360",
  appId: "1:803161144360:web:6d64c6c5c275d894a4891d",
  measurementId: "G-GTJFDE1592"
});

const messaging = firebase.messaging();
