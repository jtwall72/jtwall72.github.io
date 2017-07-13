/*
This is a javascript file that I am simply messing with to get to understand the language better.
*/

//This is the section for variables
var x = 2;


//This is the section for functions
function changeElement1() {
  document.getElementById("cha").innerHTML = "I changed this text";
}

function changeElement2() {
  document.getElementById("cha").innerHTML = "It was changed back?????";
}

function changeElement3() {
  document.getElementById("num").innerHTML = x;
}

function add2() {
  x = x + 2;
  document.getElementById("num").innerHTML = x;
}

function displayElement() {
  document.getElementById("dis").style.display = "block";
}

function displayButton() {
  document.getElementById("but").style.display = "block";
}

function showMessage() {
  window.alert("This is just me messing with JavaScript. No judgment please.");
}