var firebaseConfig = {
    apiKey: "AIzaSyBV5Hkf1YjhfMvMNTpzNh28nT2Z0qq7dhs",
    authDomain: "web-app-1d503.firebaseapp.com",
    databaseURL: "https://web-app-1d503-default-rtdb.firebaseio.com",
    projectId: "web-app-1d503",
    storageBucket: "web-app-1d503.appspot.com",
    messagingSenderId: "361191433220",
    appId: "1:361191433220:web:4214a772a7db8b54df0151",
    measurementId: "G-SZXY3EZPHV"
  };
  

firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
}