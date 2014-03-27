// Now lets start examinig the DOM from Javascript.
// 	Notice that getElementsByClassName returns an array!
// 	Also notice that the javacript script tag comes after all the html!

//console.log(document.getElementsByClassName('author')[0].innerHTML);

//console.log(document.getElementById('first').innerHTML);

// Now lets try to actually change the html file!

// Change the author's html
document.getElementsByClassName('author')[0].innerHTML = "Pito Salas";

document.getElementsByClassName('author')[0].style.color = "red";

document.getElementsByClassName('author')[0].style.fontStyle = "italic";

document.getElementsByClassName('author')[0].style.fontSize = "200%";

console.log(document.getElementsByClassName('stanza').length);


