import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';

// Firebase web config for the kmhs-deca-website project.
// These are PUBLIC client-side identifiers (they ship in the browser bundle and
// are safe to commit) — see https://firebase.google.com/docs/projects/api-keys.
export const firebaseConfig = {
  apiKey: 'AIzaSyBtLbGUhY9y_Y0XL9haE-PUlMfD_hcDFeI',
  authDomain: 'kmhs-deca-website.firebaseapp.com',
  projectId: 'kmhs-deca-website',
  storageBucket: 'kmhs-deca-website.firebasestorage.app',
  messagingSenderId: '561984085987',
  appId: '1:561984085987:web:354e1bbe1f42ae01494ad6',
  measurementId: 'G-515FWP6HHT',
};

export function getFirebaseApp(): FirebaseApp {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}
