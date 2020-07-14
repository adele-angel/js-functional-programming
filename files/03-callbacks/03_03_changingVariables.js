// Exercise 03_03 - callbacks

let x = 1;

console.log('x is originally', x);

setTimeout(() => {
	x = 99;
	console.log('x has been changed to', x);
}, 3000);

console.log('x is originally', x);