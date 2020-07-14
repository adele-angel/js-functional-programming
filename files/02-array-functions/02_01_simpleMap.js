// Exercise 02_01 - mapping

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const numbersCubed = _.map(numbers, function (element) {
	return element * element * element;
});

console.log(numbers);
console.log(numbersCubed);

// const numbersCubed = [];

// for (let i = 0; i < numbers.length; i++) {
// 	let element = numbers[i];
// 	numbersCubed.push(element * element * element);
// }
