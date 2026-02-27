// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { gapi } from "gapi-script";
import { getMessaging } from 'firebase/messaging';


const firebaseConfig = {
  apiKey: "AIzaSyANLcMnmnEjKQIY5Yom4wqzI_s7XmzOC40",
  authDomain: "shindentech-3f8e0.firebaseapp.com",
  projectId: "shindentech-3f8e0",
  storageBucket: "shindentech-3f8e0.firebasestorage.app",
  messagingSenderId: "594506892931",
  appId: "1:594506892931:web:f98a50cca7ab276dc33db6",
  measurementId: "G-W8VL1NFHY6",
    databaseURL: "https://shindentech-3f8e0-default-rtdb.firebaseio.com/",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const messaging = getMessaging(app);


// src/utils/googleDrive.ts
export const initGoogleDrive = () => {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      apiKey: firebaseConfig.apiKey, // Replace with your API key
      clientId: "252613924014-vav5ql9rbhp45sou45pgal3na4m1ihb9.apps.googleusercontent.com", // Replace with your Client ID
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
      scope: "https://www.googleapis.com/auth/drive.readonly",
    });
  });
};

