var answer = prompt("Are we there yet?");
var sub = answer.search("yes");

while (sub == -1) {
	var answer = prompt("Are we there yet?");
	var sub = answer.search("yes");
}