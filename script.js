var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); //use .color bc it's a class
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
		body.style.background = "linear-gradient(to right, " 
							+ color1.value 
							+ ", "
							+ color2.value + ")";

		css.textContent = body.style.background + ";";
}

//can add 'oninput = 'setGradient()' to html'

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);