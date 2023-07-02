
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD4z0HAkXFF0tC2KOgdn0p__67Q12ic2Ns",
  authDomain: "reactauth-a60ec.firebaseapp.com",
  databaseURL: "https://reactauth-a60ec-default-rtdb.firebaseio.com",
  projectId: "reactauth-a60ec",
  storageBucket: "reactauth-a60ec.appspot.com",
  messagingSenderId: "427535529258",
  appId: "1:427535529258:web:04efa89e24613c97f41a53"
};
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth= getAuth(app);




