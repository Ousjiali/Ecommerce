// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA4qlLfP0lJjI-FFqKSyKUAeMCRtxLDO1c',
  authDomain: 'shopping-cart-d4b64.firebaseapp.com',
  databaseURL: 'https://shopping-cart-d4b64.firebaseio.com',
  projectId: 'shopping-cart-d4b64',
  storageBucket: 'shopping-cart-d4b64.appspot.com',
  messagingSenderId: '143082157129',
  appId: '1:143082157129:web:2a1826f2c226d3847b3b98',
  measurementId: 'G-93B9CM347E',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }
