/*
Some more goodies. Timers which may be useful for background work
*/

var myTimer = null;

function setTimer() {
	document.getElementById("status").innerHTML = "Started timer..."
	myTimer = setInterval(callBack, 1000);
}

function clearTimer() {
	document.getElementById("status").innerHTML = "Stopped timer..."
	clearInterval(myTimer);
}

function callBack() {
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("timer").innerHTML = t;
}

