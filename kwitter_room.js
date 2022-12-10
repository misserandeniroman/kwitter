var firebaseConfig = {
    apiKey: "AIzaSyDfsYCDHCeVUJy_CWlduZvE7nDZh0Z90xE",
    authDomain: "redsocial-796f3.firebaseapp.com",
    databaseURL: "https://redsocial-796f3-default-rtdb.firebaseio.com",
    projectId: "redsocial-796f3",
    storageBucket: "redsocial-796f3.appspot.com",
    messagingSenderId: "500893998101",
    appId: "1:500893998101:web:86a563403b8e31f2b1421c",
    measurementId: "G-2M93M6EYW4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "hola "+user_name+"!";  

  function addRoom(){    
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location.replace("kwitter_page.html");
    
    }
    

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
     Room_names = childKey;
    //Inicio del código

    //Final del código
    });});}

getData();
function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location.replace("index.html");
    
}

function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location.replace("kwitter_page.html");
}
