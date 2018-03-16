//initialize firebase
var config = {
    apiKey: "AIzaSyC7mP2LgT0usXVe8h6XcjNfmw2F1udyDI4",
    authDomain: "trains-30fc5.firebaseapp.com",
    databaseURL: "https://trains-30fc5.firebaseio.com",
    projectId: "trains-30fc5",
    storageBucket: "trains-30fc5.appspot.com",
    messagingSenderId: "1048033303126"
  };
  firebase.initializeApp(config);

//button for adding trains
$("#add-train-btn").on("click", function(event) {
    event.preventDefault()

//get user input
var empName = $("#train-name-input").val().trim();
var empDestination = $("#destination-input").val().trim();
var empTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
var empFrequency = $("#frequency-input").val().trim();

//object for holding data
var newEmp = {
    name: empName,
    destination: empDestination,
    time: empTime,
    frequency: empFrequency
  };

//push to database
database.ref().push(newEmp);

//log to console
console.log(newEmp.name);
console.log(newEmp.destination);
console.log(newEmp.time);
console.log(newEmp.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});