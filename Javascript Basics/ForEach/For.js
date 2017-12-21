

// Could also use a foreach loop for all the following
function printReverse(arr) {
	for (var i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	var elem = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (elem != arr[i]){
			return false;
		}
		elem = arr[i];
	}
	return true;
}

function max(arr) {
	var currMax = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > currMax){
			currMax = arr[i];
		}
	}
	return currMax;
}