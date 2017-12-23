var colors = generateRandomColors(6);

var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");

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
		arr.push(randomColor());
		// get random color and push into array
	}
	// return array
	return arr;
}

function randomColor(){
	//pick red, green, blue from 0 - 255
	var R = Math.floor(Math.random() * 256);
	var G = Math.floor(Math.random() * 256);
	var B = Math.floor(Math.random() * 256);
	return "rgb(" + R + "," + G + "," + B + ")";
}