// Exercise 07 - capturing arguments
// If the outer function has arguments,
// then the inner functions have access to them as well

function createCounter(count = 0) {
	return {
		increment: function () {
			count = count + 1;
		},
		currentValue: function () {
			return count;
		},
	};
}

const counterStartingAt5 = createCounter(5);
const counterStartingAtMinus2 = createCounter(-2);
const counterStartingAt0 = createCounter();

counterStartingAt5.increment();
console.log(counterStartingAt5.currentValue());

counterStartingAtMinus2.increment();
counterStartingAtMinus2.increment();
console.log(counterStartingAtMinus2.currentValue());

console.log(counterStartingAt0.currentValue());
