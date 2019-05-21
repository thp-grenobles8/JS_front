// Exo 1
let footer = document.getElementsByTagName("footer")[0];
let clicks = 0;

footer.addEventListener("click", addClick);

function addClick() {
	clicks ++;
	console.log(`Click number ${clicks}`);
};

// Exo 2
let menu = document.querySelector("button.navbar-toggler");
menu.addEventListener("click", collapse);

function collapse() {
	navbarHeader = document.getElementById("navbarHeader");
  	navbarHeader.classList.toggle("collapse");
}

// Exo 3
let firstCard = document.getElementsByClassName("card")[0];
let editFirstCard = firstCard.getElementsByTagName("button")[1];
editFirstCard.addEventListener("click", redCard)

function redCard() {
  firstCard.style.color = "red";
}
// Exo 4
let secondCard = document.getElementsByClassName("card")[1];
let editSecondCard = secondCard.getElementsByTagName("button")[1];

editSecondCard.addEventListener("click", greenCard)

function greenCard() {
  	if (secondCard.style.color === 'green'){ 
		secondCard.style.color = '' ; 
	} else {
		secondCard.style.color = 'green';
	}
}	
// Exo 5
let navbar = document.getElementsByClassName("navbar")[0];
let style_link = document.getElementsByTagName("head")[0].getElementsByTagName("link")[0];
navbar.addEventListener('dblclick', noStyle);

function noStyle() {
  if (style_link.disabled) {
    style_link.disabled = false;
  } else {
    style_link.disabled = true;
  }
}