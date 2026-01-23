import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, writeBatch, collection } from "firebase/firestore";

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
export const auth = getAuth();

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const googleSignInWithPopup = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        await addUserInDocument(user.uid, user.displayName, user.email);
    } catch (error) {
        throw new Error(`Code: ${error.code} - ${error.message}`);
    }
}

export const logOut = async () => {
    return signOut(auth);
}

const addUserInDocument = async (uid, displayName, email) => {
    const userRef = doc(db, "users", uid);
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
        await setDoc(userRef, {
            displayName,
            email,
            createdAt: Date.now()
        })
    }
}

export const addCategoriesAndDocuments = async (categories) => {
    const batch = writeBatch(db);

    categories.forEach((category) => {
        const categoryRef = doc(db, 'categories', category.title.toLowerCase());

        batch.set(categoryRef, {
            title: category.title,
            imageUrl: category.imageUrl,
            products: category.products
        });
    });

    try {
        await batch.commit();
        console.log("Success: Toutes les catégories ont été importées !");
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getCategories = async () => {
    try {
        const categoriesRef = collection(db, "categories");
        const categoriesSnapshot = await getDocs(categoriesRef);

        const categoriesList = categoriesSnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        });

        return categoriesList;
        
    } catch (error) {
        throw new Error(`No categories returned: ${error.message}`);
    }
}