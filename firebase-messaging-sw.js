importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js');

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

messaging.onBackgroundMessage((payload) => {
  console.log('🦁 Background message:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'https://i.ibb.co/zVxt3D2Y/LDC-LEGAL-COMPANION.jpg',
  });
});
