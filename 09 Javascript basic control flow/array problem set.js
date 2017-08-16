console.log("Print reverse of an array");

function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		last = array.pop();
		console.log(last);
	}
}

console.log("Accept an array and Return true if all the elements in the array are identical");
function isUniform(array) {
	var first = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] !== first) {
			return false;
		}
	}
	return true;
}

console.log("Accept an array and Returns the sum of all numbers in the array");
function sumArray(array) {
	var total = 0
	array.forEach(function(elem) {
		total += elem;
	});
	return total;
}

console.log("Accept an array and Returns the maximum number in the array");
function max(array) {
	var max = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}