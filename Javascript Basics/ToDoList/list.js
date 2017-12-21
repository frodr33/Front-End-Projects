var resp = prompt("Hello, what do you want to do?");
var toDoList = [];

while (resp != "quit") {
	if (resp == "new"){
		var newitem = prompt("What do you want to add?");
		toDoList.push(newitem);
	} else if (resp == "list") {
		console.log(toDoList);
	} else {
		alert("That is not a valid response!")
	}
	resp = prompt("What do you want to do next?");
}