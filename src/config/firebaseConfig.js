import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyA2mufrZQTP0XsIIspRfibJZSFQIJEUPxM',
    authDomain: 'todo-app-crud-e0711.firebaseapp.com',
    projectId: 'todo-app-crud-e0711',
    storageBucket: 'todo-app-crud-e0711.appspot.com',
    messagingSenderId: '664156380710',
    appId: '1:664156380710:web:b27e8f1748a92d763350e7',
    measurementId: 'G-NWR9B4H3M3',
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const analytics = getAnalytics(app);

export { database, analytics };
