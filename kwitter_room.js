const firebaseConfig = {

      apiKey: "AIzaSyDQXGZ_-7WSosvoBjtcFQQymeffXVp-1-Y",
    
      authDomain: "kwitter-44f89.firebaseapp.com",
    
      databaseURL: "https://kwitter-44f89-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-44f89",
    
      storageBucket: "kwitter-44f89.appspot.com",
    
      messagingSenderId: "954391274466",
    
      appId: "1:954391274466:web:8d063dc24dcae9cb648fbb"
    
    };
     firebase.initializeApp(firebaseConfig);
function logout()
{
      window.location=("index.html");
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
