import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_tCIdf225vzT3kO6ZKkUx5q0MNRFrozc",
  authDomain: "gahproj.firebaseapp.com",
  projectId: "gahproj",
  storageBucket: "gahproj.appspot.com",
  messagingSenderId: "353487786989",
  appId: "1:353487786989:web:553830fe77bf65ddaf8de4",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
