/* firebase-messaging-sw.js (site root) */
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyABgKrFpiFqC9gndXaK09MvhAVhZHAGk78",
  authDomain: "lionhunterwebpush.firebaseapp.com",
  projectId: "lionhunterwebpush",
  storageBucket: "lionhunterwebpush.firebasestorage.app",
  messagingSenderId: "803161144360",
  appId: "1:803161144360:web:6d64c6c5c275d894a4891d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || "Lion Hunt", {
    body: n.body || "",
    icon: n.icon || "https://i.ibb.co/zVxt3D2Y/LDC-LEGAL-COMPANION.jpg",
  });
});

});
