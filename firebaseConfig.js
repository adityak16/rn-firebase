import firebase from 'firebase';

  const config = firebase.initializeApp({
    apiKey: "AIzaSyAHusIAkiEr2kY9EpsXlJalQSXi9zXZCCY",
    authDomain: "techtalkapp-817a5.firebaseapp.com",
    databaseURL: "https://techtalkapp-817a5.firebaseio.com",
    projectId: "techtalkapp-817a5",
    storageBucket: "techtalkapp-817a5.appspot.com",
    messagingSenderId: "1065363805178"
  });

export {
  config
}
