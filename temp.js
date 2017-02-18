var button = document.getElementById("converter");
var output = document.getElementById("converted-temp");
var input = document.getElementById("number");
var clearBtn = document.getElementById("clearButton");

button.addEventListener("click", displayUserData);
button.addEventListener("checked", toCelsius);
button.addEventListener("checked", toFahrenheit);

function toCelsius(){
  var userInputC = input.value;
  var convertUserC = ((userInputC - 32) / 1.8);
   if (convertUserC < 32){
     output.style.color = "red";
   }else if(converUserC > 0){
     output.style.color = "blue";
   }else{
     output.style.color = "green";
   }
  output.innerHTML = convertUserC + " Degrees Celcius";
}


function toFahrenheit(){
  var userInputF = input.value;
  var convertUserF = ((userInputF * 1.8) + 32);
    if (convertUserF > 90){
      output.style.color = "red";
    }else if(convertUserF < 32){
      output.style.color = "blue";
    }else{
      output.style.color = "green";
    }
  output.innerHTML = convertUserF + " Degrees Fahrenheit";
}


function displayUserData () {
 if (document.getElementById("cels").checked) {
   toCelsius();
 } else if(document.getElementById("farh").checked) {
   toFahrenheit();
   console.log("fahrenheit checked");
 }
}
