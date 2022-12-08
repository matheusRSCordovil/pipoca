//npm install firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { toast } from "react-toastify";
import API from "../services";
import jwt_decode from "jwt-decode";

const firebaseConfig = {
  apiKey: "AIzaSyD-pbzCp4dqLhq0J4uYib8b8TBk4sfFQqs",
  authDomain: "e-atopic.firebaseapp.com",
  projectId: "e-atopic",
  storageBucket: "e-atopic.appspot.com",
  messagingSenderId: "339766652048",
  appId: "1:339766652048:web:59be7f2e1e025e4e907c15",
  measurementId: "G-7YHL51FQKN",
};
let app;
// eslint-disable-next-line no-unused-vars
let analytics;
let messaging;

const getUserId = () => {
  let token = localStorage.getItem("token");
  let decoded = jwt_decode(token);
  return decoded.UserId;
};

export const inicializarFirebase = () => {
  app = initializeApp(firebaseConfig);
  messaging = getMessaging(app);
  analytics = getAnalytics(app);
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // Toast bonito para a app
    toast(
      "title: " +
        payload.notification.title +
        "\n" +
        "body: " +
        payload.notification.body +
        "\n" +
        "icon: " +
        payload.notification.icon
    );
  });
  pedirPermissaoParaReceberNotificacoes();
};

export const pedirPermissaoParaReceberNotificacoes = async () => {
  console.log("Requesting permission...");
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        getToken(messaging, {
          vapidKey:
            "BDel8mRf7VywpHqyosMm3q0dFL9ijNSI4Xl5Un4PyLVHuVilDCf6HqqktjvbkGqfgOH2P2HkOY8exs1pRy8SX9A",
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("current token for client: ", currentToken);
              // Track the token -> client mapping, by sending to backend server
              //aqui enviar o token e o id do usuario para o back
              //api/usuario/FcmToken/{id}
              // token
              API.put(`usuario/FcmToken/${getUserId()}`, {
                token: currentToken,
              })
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              console.log(
                "No registration token available. Request permission to generate one."
              );
              // shows on the UI that permission is required
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // catch error while creating client token
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
