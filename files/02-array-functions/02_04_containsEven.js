// Exercise 02_04 - every/some

const _ = require('lodash');

const numbers = [2, 4, 6, 7, 10, 12];

let arrayContainsSomeEven = _.some(numbers, function (element) {
	return element % 2 === 0;
});

let arrayContainsAllEven = _.every(numbers, function (element) {
	return element % 2 === 0;
});

console.log(arrayContainsSomeEven);
console.log(arrayContainsAllEven);
