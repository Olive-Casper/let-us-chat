//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDHD_IwQTTQn442f_EkjH3vyVilXXqKgAg",
      authDomain: "kwitter-f4b8e.firebaseapp.com",
      databaseURL: "https://kwitter-f4b8e-default-rtdb.firebaseio.com",
      projectId: "kwitter-f4b8e",
      storageBucket: "kwitter-f4b8e.appspot.com",
      messagingSenderId: "966336823218",
      appId: "1:966336823218:web:d3d3f75fbb0c71300faeab"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });
      document.getElementById("msg").value ="";
}