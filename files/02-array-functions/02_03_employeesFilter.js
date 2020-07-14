// Exercise 02_03 - filtering

const _ = require('lodash');

const employees = [
	{ name: 'John', salary: 50000 },
	{ name: 'Susan', salary: 60000 },
	{ name: 'Greg', salary: 100000 },
	{ name: 'Mary', salary: 120000 },
];

const dueForRaise = _.filter(employees, function (employee) {
	return employee.salary < 70000;
});

console.log(employees);
console.log(dueForRaise);
