// Exercise 03_01 - callbacks

const fs = require('fs');

fs.readFile('message.txt', 'utf8', function (err, data) {
	if (err) throw err;
	console.log(data);
});
