import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "@/config/keys";

const firebaseConfig = {
  apiKey: config.apikey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
