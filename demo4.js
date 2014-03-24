/*
	Some more sample Javacript.
*/

// Prompting the user, which only works in the browser, not within node for example...
// var who = prompt("Please Enter Your Name", "name");
// alert("Who ARE you???");

//	Arrays can take different data type and can be created in different ways

var anArray=["Yes", "password", 1.0, 2, false];
var anotherArray = new Array(4,3);
var newArray = anArray.concat(anotherArray);

// document.write writes to the html stream
document.write(newArray.toString());
document.write("<br/>");
document.write("<br/>");
document.write(newArray.join("<br/>"));

// Loops are just like Java or C
for (var i=0; i<3; i++) {
  document.write("<p>Blah...</p>");
}

// Functions by themselves, can take arguments and return values
function helloWorld() {
  document.write("Hello World");
}

function greet(name) {
  document.write("Hello " + name);
  return name;
}

// for debugging you can write to the console or set breakponts etc.
console.log("I am debuggable. Look for me in the log of the debugger in the browser!");