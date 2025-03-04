/**
 * Firebase configuration and initialization module
 *
 * This module centralizes all Firebase service initializations and exports
 * the necessary instances for authentication and data storage.
 * Environment variables are used to protect sensitive configuration details.
 */
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// Firebase configuration object sourced from environment variables
// These are injected by Vite during the build process
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase app with configuration
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Authentication service
const auth: Auth = getAuth(app);

// Initialize Google Authentication Provider
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore Database
const db: Firestore = getFirestore(app);

export { auth, googleProvider, db };
