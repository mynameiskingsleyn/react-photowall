import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBh_IrpB8_E7uZvD_xKHqBILMW2c1KZSsY",
    authDomain: "photowall-7cc79.firebaseapp.com",
    databaseURL: "https://photowall-7cc79.firebaseio.com",
    projectId: "photowall-7cc79",
    storageBucket: "photowall-7cc79.appspot.com",
    messagingSenderId: "292981975108",
    appId: "1:292981975108:web:a99153f14de141a4adf411"
};

firebase.initializeApp(firebaseConfig);

export default firebase;