//Out value Div
var convertedTemp = document.getElementById("convertedTemp");
//User input field
var myNumber = document.getElementById("number");
//Celius radio button
var celRadio = document.getElementById("cels");
//Fahrenheit radio
var fahrRadio = document.getElementById("fahr");
//Convert button
var convertButton = document.getElementById("converter");
//Clear button
var clearButton = document.getElementById("clearButton");
//Entire Form
var formClear = document.getElementById("entireForm");


// FUNCTIONS
//rounding off user input to a whole number
function userInput (input){
  return input = Math.round(input);
}
//conversion from fahrenheit to celcius
function toCelsius (c) {
  var celcius =  (9/5) * (c + 32);
  return = Math.round(celcius);
}
//conversion from celcius to fahrenheit
function toFahrenheit (f) {
  var fahrenheit = (5/9) * (f - 32);
  return = Math.round(fahrenheit);
}
//out fahrenheit colors
function determineFahrColor(color){
  if(){

  }else if(){

  }else{

  }
}
//output celcius colors
function determineCelcColor(color){
  if(){

  }else if(){

  }else{

  }
}

function converter (userValue){
  var inputTemp = userInput.getElementById("number").value;
  if(isNaN(inputTemp)){
    return convertedTemp.innerHTML = "Please enter in a number value.";
  }
}
//output information to div element
function outputTemp(output){
  convertedTemp.innerHTML =
}



// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
