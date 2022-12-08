// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyD-pbzCp4dqLhq0J4uYib8b8TBk4sfFQqs",
    authDomain: "e-atopic.firebaseapp.com",
    projectId: "e-atopic",
    storageBucket: "e-atopic.appspot.com",
    messagingSenderId: "339766652048",
    appId: "1:339766652048:web:59be7f2e1e025e4e907c15",
    measurementId: "G-7YHL51FQKN"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});