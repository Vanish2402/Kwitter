var firebaseConfig = {
      apiKey: "AIzaSyDVMFp5Lp51VR-353DhTDMFU-mjdyUCK-g",
      authDomain: "kwitter-e1b7a.firebaseapp.com",
      databaseURL: "https://kwitter-e1b7a-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1b7a",
      storageBucket: "kwitter-e1b7a.appspot.com",
      messagingSenderId: "925386002259",
      appId: "1:925386002259:web:031ab30e372344dbeb5ba6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+">"
document.getElementById("output");
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room()

{
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}