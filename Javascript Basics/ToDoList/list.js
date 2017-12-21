var resp = prompt("Hello, what do you want to do?");
var toDoList = [];

while (resp != "quit") {
	if (resp == "new"){
		var newitem = prompt("What do you want to add?");
		toDoList.push(newitem);
	} else if (resp == "list") {
		console.log("**********");
		toDoList.forEach(function(elem){
			console.log(toDoList.indexOf(elem) + ": " +  elem);
		});
		console.log("**********");
	} else  if (resp == "delete") {
		var index = prompt("Enter index of list to delete");

		// wtf why isnt this working
		// var slice1 = toDoList.slice(0, index);
		// var slice2 = toDoList.slice(index+1);
		// console.log(slice1);
		// console.log(slice2);
		// toDoList = slice1;
		// slice2.forEach(function(elem){
		// 	toDoList.push(elem);
		// });

		toDoList.splice(index, 1);
	} else {

		alert("That is not a valid response!")
	}
	resp = prompt("What do you want to do next?");
}