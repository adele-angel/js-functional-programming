// Exercise 06 - private variables

function createCounter() {
	let count = 0;
	return {
		increment: function () {
			count++;
		},
		currentValue: function () {
			return count;
		},
	};
}

const myCounter = createCounter();

console.log(myCounter.currentValue());

myCounter.increment();
myCounter.increment();

console.log(myCounter.currentValue());

// count cannot be accessed
myCounter.count = 999;

console.log(myCounter.currentValue());

// -----------------------------------------------------------------
// Initial
// -----------------------------------------------------------------

// const myCounter = {
// 	count: 0,
// 	increment: function () {
// 		this.count += 1;
// 	},
// 	currentValue: function () {
// 		return this.count;
// 	},
// };

// console.log(myCounter.currentValue());

// myCounter.increment();
// myCounter.increment();

// console.log(myCounter.currentValue());

// myCounter.count = 999; // count should be private

// console.log(myCounter.currentValue());
