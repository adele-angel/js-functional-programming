// Exercise 08 - precondition check

function doIfSafe(n, message, func) {
	if (n != null && typeof n === 'number') {
		if (message != null && typeof message === 'string') {
			return func(n, message);
		}
	}
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

printMessageNTimes(4, 'Potato'); // "Potato Potato Potato Potato"
getNthLetter(2, 'JavaScript'); // "v"
getSubstringOfLength(5, 'Hello and welcome'); // "Hello"

// Using higher-order function
doIfSafe(4, 'Potato', printMessageNTimes); // "Potato Potato Potato Potato"
doIfSafe(2, 'JavaScript', getNthLetter); // "v"
doIfSafe(5, 'Hello and welcome', getSubstringOfLength); // "Hello"
