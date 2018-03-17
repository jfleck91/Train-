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

  var database = firebase.database();

//button for adding trains
$("#add-train-btn").on("click", function(event) {
    event.preventDefault()

//get user input
var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var trainTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
var trainFrequency = $("#frequency-input").val().trim();

//object for holding data
var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency
  };

//push to database
database.ref().push(newTrain);

//log to console
console.log(train.name);
console.log(train.destination);
console.log(train.time);
console.log(train.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

  // Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFrequency);

  // Current Time ????????????????????
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  // To calculate the next arrival ????????????????
  var nextArrival = trainTime + trainFrequency
  console.log(nextArrival);

  // Calculate Minutes Away ????????????????????????
  var minutesAway = currentTime - nextArrival
  console.log(minutesAway);

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  trainTime + "</td><td>" + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");
});


// set up firebase?????????????