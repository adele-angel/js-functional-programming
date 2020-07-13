// Exercise 09 - precondition check
// incorporating returning function into this validation

// A function that converts our functions into another function
// that will automatically check the parameters passed on to it
function createSafeVersion(func) {
	return function (n, message) {
		if (n != null && typeof n === 'number') {
			if (message != null && typeof message === 'string') {
				return func(n, message);
			}
		}
		return null;
	};
}

function printMessageNTimes(n, message) {
	for (let i = 0; i < n; i++) {
		console.log(message);
	}
}

function getNthLetter(n, string) {
	return string.charAt(n);
}

function getSubstringOfLength(n, string) {
	return string.substring(0, n);
}

const printMessageNTimesSafe = createSafeVersion(printMessageNTimes);
const getNthLetterSafe = createSafeVersion(getNthLetter);
const getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength);

printMessageNTimesSafe(4, 'Potato'); // "Potato Potato Potato Potato"
getNthLetterSafe(2, 'JavaScript'); // "v"
getSubstringOfLengthSafe(5, 'Hello and welcome'); // "Hello"

getNthLetterSafe('two', 'JavaScript'); // null
