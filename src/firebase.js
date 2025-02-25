import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCw8lIg0kiKy-ayTbiMPxH28HbC3Ag-jac",
    authDomain: "todo-list-554c3.firebaseapp.com",
    projectId: "todo-list-554c3",
    storageBucket: "todo-list-554c3.firebasestorage.app",
    messagingSenderId: "948795880474",
    appId: "1:948795880474:web:8c4e11dc3a892d0ac9cda3"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);