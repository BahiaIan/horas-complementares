import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDX0vhROgrEw98djG7_v-_E06rsAPambDc",
    authDomain: "horas-complementares-firebase.firebaseapp.com",
    databaseURL: "https://horas-complementares-firebase-default-rtdb.firebaseio.com",
    projectId: "horas-complementares-firebase",
    storageBucket: "horas-complementares-firebase.appspot.com",
    messagingSenderId: "186348458751",
    appId: "1:186348458751:web:6a33b1e751b8245a3af2ca",
    measurementId: "G-0ZJL32J7BY"
};

const app = initializeApp(firebaseConfig);
export default app

const db = getDatabase(app);
export { db };

const auth = getAuth();
export { auth };

// export default getAnalytics(app);