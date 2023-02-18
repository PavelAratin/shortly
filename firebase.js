
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBrVL_yVV7otgKoEhXqWt9gPXTECJJ2qGc",
  authDomain: "shortlink-3e08a.firebaseapp.com",
  projectId: "shortlink-3e08a",
  storageBucket: "shortlink-3e08a.appspot.com",
  messagingSenderId: "949140551451",
  appId: "1:949140551451:web:9356e1d8234b0a300b85be"
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
}