import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMZ_BpgO17Ep4wUDfVtWwLYYYaVa3SYOA",
  authDomain: "arvrtise-nba.firebaseapp.com",
  projectId: "arvrtise-nba",
  storageBucket: "arvrtise-nba.appspot.com",
  messagingSenderId: "9784605128",
  appId: "1:9784605128:web:1546886f208d0f4ad1e8fd"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }