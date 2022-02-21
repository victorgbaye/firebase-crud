import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBbLUIxdQLQw9k84tBleKuA3sb7EKaTQBo",
    authDomain: "crud-firebase-38ef1.firebaseapp.com",
    projectId: "crud-firebase-38ef1",
    storageBucket: "crud-firebase-38ef1.appspot.com",
    messagingSenderId: "1055380109970",
    appId: "1:1055380109970:web:00bc7333dbdf783197844b",
    measurementId: "G-K9ZZ576QMR"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)