var enter = prompt("Guess a Number to Enter the page:");
var guess = Number(enter);



if (guess < 8) {
	var guess = prompt("Your number is too low, guess again");

} else if (guess > 8) {
	var guess = prompt("Your number is too high, guess again");

} else {
	alert("Congrats you got the number!");
}