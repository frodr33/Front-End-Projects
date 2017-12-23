var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares= document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode button event listeners
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset()

		});
	}

	for (var i = 0; i <squares.length; i++){
		// add square event listeners
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
		});
	}
	// colors
	reset();
}



function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares); 
	// pick new color from array
	pickedColor = pickColor();
	// change color display
	colorDisplay.textContent = pickedColor;
	// Change background of header back to original
	h1.style.backgroundColor = "steelblue";
	// change colors of squares
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block"; // unhide
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click", function(){
	reset();

})

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