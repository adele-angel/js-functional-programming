// Functional Programming with JavaScript
// Exercise 02 - print statements to the console for debugging purposes
// Messages should only show up when we are debugging, otherwise they can clutter up the console

// Environment variable to indicate whether or not we're in debug mode
const DEBUG_MODE_ENABLED = true;

let debug;

// Option 1
function debug(message) {
	if (DEBUG_MODE_ENABLED) {
		console.log(message);
	}
}

// Option 2
// For cases of passing functions as arguments
// Dynamically assign different functions at runtime
// Benefits in terms of flexibility and readability
if (DEBUG_MODE_ENABLED) {
	debug = printDebugMessage;
} else {
	debug = doNothing;
}

debug('Some debug message');

function printDebugMessage(message) {
	console.log('\nDEBUG:', message);
}

function doNothing() {}
