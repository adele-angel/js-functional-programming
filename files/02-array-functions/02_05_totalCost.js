// Exercise 02_04 - reduce

const _ = require('lodash');

const shoppingList = [
	{ name: 'Eggs', price: 4.99 },
	{ name: 'Milk', price: 3.99 },
	{ name: 'Bananas', price: 2.79 },
	{ name: 'Beer', price: 6.99 },
];

let totalCost = _.reduce(
	shoppingList,
	function (acc, item) {
		return acc + item.price;
	},
	0
);

console.log(totalCost);