/* Specification */
function isEven(num) {
	if (num % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

/* Specification */
function factorial(num) {
	if (num == 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

/* Specification */
function kebabToSnake(str) {
	for (var i = 0; i < str.length; i++){
	if (str.charAt(i) == "-") {
		str = str.replace("-", "_");
	 	}
	}
	return str;
}