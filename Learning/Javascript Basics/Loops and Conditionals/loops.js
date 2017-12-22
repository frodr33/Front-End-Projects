
console.log("Print numbers from -10 - 19 using while loop")
var startNum = -10;
while (startNum <= 19) {
	console.log(startNum);
	startNum++;
}

console.log("Print numbers from -10 - 19 using for loop")
for (var num = -10; num <= 19; num++){
	console.log(num);
}

console.log("Print even numbers from 10 - 40 using while loop")
var startNum1 = 10;
while (startNum1 <= 40) {
	if (startNum1 % 2 == 0) {
		console.log(startNum1);
	}
	startNum1++;
}	

console.log("Print even numbers from 10 - 40 using for loop")
for (var num1 = 10; num1 <= 40; num1++){
	if (num1 % 2 == 0) {
		console.log(num1);
	}
}

console.log("Print odd numbers from 300 333 using while loop")
var startNum2 = 300;
while (startNum2 <= 333){
	if (startNum2 % 2 != 0) {
		console.log(startNum2);
	}
	startNum2++;
}

console.log("Print odd numbers from 300 333 using for loop")
for (var num2 = 300; num2 <= 333; num2++) {
	if (num2 % 2 == 1) {
		console.log(num2);
	}
}

console.log("Print multiples of 3 and 5 from 5 to 50 using while loop")
var startNum3 = 5;
while (startNum3 <= 50) {
	if (startNum3 % 5 == 0 && startNum3 % 3 == 0) {
		console.log(startNum3);
	}
	startNum3++;
}

console.log("Print multiples of 3 and 5 from 5 to 50 using for loop")
for (var num3 = 5; num3 <= 50; num3++){
	if (num3 % 5 == 0 && num3 % 3 == 0) {
		console.log(num3);
	}
}