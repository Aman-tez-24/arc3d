"use client";

import { initializeApp, getApps, getApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxwyVXfX6Sg4kJ65bKZgB8sZ2FEjUtFV0",
  authDomain: "arc3d-in.firebaseapp.com",
  projectId: "arc3d-in",
  storageBucket: "arc3d-in.firebasestorage.app",
  messagingSenderId: "438806019581",
  appId: "1:438806019581:web:3cd16846a447f52becad94",
  measurementId: "G-MQW4MZRB7P",
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();