import { initializeApp } from "firebase/app";

import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwmV6LkhLaN8G337qQaKDb_CpyoRYf7JI",
  authDomain: "e-commerce-plateforme-a5991.firebaseapp.com",
  projectId: "e-commerce-plateforme-a5991",
  storageBucket: "e-commerce-plateforme-a5991.firebasestorage.app",
  messagingSenderId: "195725331814",
  appId: "1:195725331814:web:a58a027e2314e6d848cca7",
  measurementId: "G-16RJZ01RTC"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const googleSignInWithPopup = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        await addUserInDocument(user.uid, user.displayName, user.email);
    } catch (error) {
        throw new Error(`Code: ${error.code} - ${error.message}`);
    }
}

const addUserInDocument = async (uid, displayName, email) => {
    await setDoc(doc(db, "users", uid), {
        displayName,
        email,
        createdAt: Date.now()
    })
}