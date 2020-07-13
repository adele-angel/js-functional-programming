// Functional Programming with JavaScript
// Exercise 05 - passing multiple functions

// Function takes a condition and 2 function as arguments
function ifElse(condition, func1, func2) {
	if (condition) {
		func1();
	} else {
		func2();
	}
}

const x = 1;

ifElse(
	x === 1,
	function () {
		console.log('x is 1');
	},
	function () {
		console.log('x is not 1');
	}
);
