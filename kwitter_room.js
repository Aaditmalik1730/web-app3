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

 


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WElCOME "+user_name+"!!";

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names +"</div><hr>";
document.getElementById("output").innerHTML=row;
    });});}
getData();
function logout(){
 
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}





