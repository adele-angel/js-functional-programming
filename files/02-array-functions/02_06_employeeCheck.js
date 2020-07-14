// Exercise 02_06 - combining functions

const _ = require('lodash');

const employees = [
	{ name: 'John', salary: 60000, age: 27, gender: 'M' },
	{ name: 'Mary', salary: 110000, age: 50, gender: 'F' },
	{ name: 'Susan', salary: 50000, age: 21, gender: 'F' },
	{ name: 'Greg', salary: 100000, age: 45, gender: 'M' },
	{ name: 'Jerry', salary: 90000, age: 39, gender: 'M' },
	{ name: 'Barbara', salary: 95000, age: 36, gender: 'F' },
];

let males = _.filter(employees, function (employee) {
	return employee.gender === 'M';
});
let maleAges = _.map(males, function (male) {
	return male.age;
});
let maleAgeTotal = _.map(maleAges, function (acc, age) {
	return acc + age;
});
let maleAgeAverage = maleAgeTotal / males.length;

console.log(maleAgeAverage);
