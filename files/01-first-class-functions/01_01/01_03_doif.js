// Functional Programming with JavaScript
// Exercise 03 - abstract a pattern into its own function

// A function that takes a condition and a function as its arguments
// if the condition is true it calls the function
function doIf(condition, func) {
	if (condition) {
		func();
	}
}

const x = 1;

// -----------------------------------------------------------------
// Option 2 - Anonymous functions
// -----------------------------------------------------------------

doIf(x === 1, function () {
	console.log('x is equal to 1');
});

doIf(x === 'Potato', function () {
	console.log('x is equal to "Potato"');
});

doIf(x < 10 && x > 0, function () {
	console.log('x is between 0 and 10');
});

// -----------------------------------------------------------------
// Option 1
// -----------------------------------------------------------------

// doIf(x === 1, sayXis1);

// doIf(x === 'Potato', sayXisPotato);

// doIf(x < 10 && x > 0, sayXisBetween0And10);

// function sayXis1() {
// 	console.log('x is equal to 1');
// }

// function sayXisPotato() {
// 	console.log('x is equal to "Potato"');
// }

// function sayXisBetween0And10() {
// 	console.log('x is between 0 and 10');
// }

// -----------------------------------------------------------------
// Initial
// -----------------------------------------------------------------

// if (x === 1) {
// 	sayXis1();
// }

// if (x === 'Potato') {
// 	sayXisPotato();
// }

// if (x < 10 && x > 0) {
// 	sayXisBetween0And10();
// }

// function sayXis1() {
// 	console.log('x is equal to 1');
// }

// function sayXisPotato() {
// 	console.log('x is equal to "Potato"');
// }

// function sayXisBetween0And10() {
// 	console.log('x is between 0 and 10');
// }
