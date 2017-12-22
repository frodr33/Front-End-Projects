var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetb = document.querySelector("#resetb");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var maxDisplay = document.querySelector("#max");
var maxScore = document.querySelector("#maxScore");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;



p1button.addEventListener("click", function(){
	if (!gameOver){
		p1score++;
		if (p1score ==  winningScore){
			gameOver = true;
			p1display.classList.toggle("maxreached");
		}
		p1display.textContent = p1score;
	}
});

p2button.addEventListener("click", function(){
	if (!gameOver){
		p2score++;
		if (p2score == winningScore){
			gameOver = true;
			p2display.classList.add("maxreached");
		}
		p2display.textContent = p2score;
	}
});

resetb.addEventListener("click", function(){
	reset();
});


function reset(){
	p1score = 0;
	p2score = 0;
	p1display.classList.remove("maxreached");
	p2display.classList.remove("maxreached");
	p1display.textContent = 0;
	p2display.textContent = 0;
	gameOver = false;
}

maxScore.addEventListener("change", function (){
	maxDisplay.textContent = maxScore.value;
	winningScore = maxScore.value;
	reset();
});