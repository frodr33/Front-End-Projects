var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function (){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3); 
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function (){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(6); 
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";

	}	
})


resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(6); 
	// pick new color from array
	pickedColor = pickColor();
	// change color display
	colorDisplay.textContent = pickedColor;
	// Change background of header back to original
	h1.style.backgroundColor = "#232323";
	// change colors of squares
	for (var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}

})


colorDisplay.textContent = pickedColor;

for (var i = 0; i <squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add event listeners
	squares[i].addEventListener("click", function() {
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// Compare color to picked color
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(pickedColor);
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "try again";
		}

	})
}


function changeColors(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for (var i = 0; i < num; i++){
		// get random color and push into array
		arr.push(randomColor());

	}
	// return array
	return arr;
}

function randomColor(){
	//pick red, green, blue from 0 - 255
	var R = Math.floor(Math.random() * 256);
	var G = Math.floor(Math.random() * 256);
	var B = Math.floor(Math.random() * 256);
	return "rgb(" + R + ", " + G + ", " + B + ")";
}