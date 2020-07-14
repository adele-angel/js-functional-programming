// Exercise 02_02 - filtering

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];

const evensFromNumbers = _.filter(numbers, function (element) {
	return element % 2 === 0;
});

console.log(numbers);
console.log(evensFromNumbers);

// const evensFromNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
// 	let element = numbers[i];
// 	if (element % 2 === 0) {
// 		evensFromNumbers.push(element);
// 	}
// }
