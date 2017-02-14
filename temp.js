var button = document.getElementById("converter");
var output = document.getElementById("converted-temp");
var input = document.getElementById("number");
var clearBtn = document.getElementById("clearButton");

button.addEventListener("click", displayUserData);
button.addEventListener("checked", toCelsius);
button.addEventListener("checked", toFahrenheit);


function displayUserData () {
 if (document.getElementById("cels").checked) {
   toCelsius();
 } else if(document.getElementById("farh").checked) {
   toFahrenheit();
   console.log("fahrenheit checked");
 }
}









function toCelsius(){
  var userInputC = input.value;
  var convertUserC = ((userInputC - 32) / 1.8);
  output.innerHTML = convertUserC + " Degrees Celcius";
 console.log("cels test", convertUserC);
}


function toFahrenheit(){
  var userInputF = input.value;
  var convertUserF = ((userInputF * 1.8) + 32);
  output.innerHTML = convertUserF + " Degrees Fahrenheit";
 console.log("fahr test", convertUserF);
}
