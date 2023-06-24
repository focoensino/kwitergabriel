// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8r4k0LthWyy226y65kMrMF5vgerMMOF0",
    authDomain: "vamos-conversar-fe476.firebaseapp.com",
    databaseURL: "https://vamos-conversar-fe476-default-rtdb.firebaseio.com",
    projectId: "vamos-conversar-fe476",
    storageBucket: "vamos-conversar-fe476.appspot.com",
    messagingSenderId: "637136549956",
    appId: "1:637136549956:web:96a74b44a897eeb9d1a411"
  };

  //inicializar firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "bem-vindo(a)" + user_name + "!";

//função para criar sala no firebase

function addRoom(){

   room_name = document.getElementById("room_name").value;
   
   firebase.database().ref("/").child(room_name).update({
   purpose : "adicionar nome da sala"
}) 
 
  localStorage.getItem("room_name",room_name);

}
