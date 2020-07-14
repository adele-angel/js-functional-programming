# js-functional-programming

Functional programming with JavaScript study notes

## Core Concepts

#### Keeps functions and data separate

- FP stores its data in simple constructs like arrays or hashes and makes separate functions that take the data as an argument and return some sort of transformed version of the data
- The main benefit of using FP instead of using classes is immediate polymorphism with regards to the data

#### Avoid state change and mutable data

- The pattern often found in FP is to make all data immutable. Either through the use of constants or through treating data in an immutable way and not making unnecessary changes
- Makes debugging easier, by making it easier to keep track of all the state changes and improving code readability
- Since all the data is contained in simple structures, the cost of copying and transforming data in this manner is relatively inexpensive

#### Treats functions as first-class

- We can assign functions to variables
- First class functions give the ability to both pass functions as arguments to other functions and to return functions, which gives the program flexibility and allows to significantly increase code reusability in some cases

### Functional Programming VS Object-Oriented Programming (OOP)

|                    | Functional Programming                                                                                                                                                               | Object-Oriented Programming                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Initial definition | A single function                                                                                                                                                                    | Classes and objects, each has their own member variables which holds the data and internal methods to operate on the data |
| Creating data      | Data is contained in simple structures, not necessarily defining what it is and what it can do. Dealing with raw data and what operations and transformations can be preformed on it | Creating a new object for each piece of data. Defining which sort of object each piece of data represents                 |
| Immutability       | Creating a new variable and keeping original data intact                                                                                                                             | Mutates the original data (changes its state)                                                                             |

### 1. First-Class Functions

Function assignment

```javascript
/**
 * The function can be called from any position in the code
 * since the function is being hoisted and the compiler
 * moves it automatically to the top of the file
 */
function doSomething() {
	...
};

/**
 * As a function variable the function can only be used
 * only after it has been declared
 */
const doSomething = function () {
	...
};
```

```javascript
// Basic syntax
const greet = function () {
	console.log('Hello World!');
};

const greetUser = function (name) {
	return 'Hello ' + name;
};

greet(); // "Hello World!"
greetUser('John Doe'); // "Hello John Doe"
```

Function variables and Parentheses

```javascript
// With parentheses - represents the function return value
let user1 = greetUser('John Doe');
user1; // "Hello John Doe"

// Without parentheses - represents the function itself
let user2 = greetUser;
user2('Jane Doe'); // "Hello Jane Doe"
```

Passing functions as arguments

```javascript
/**
 * Passing values
 */
function add(x, y) {
	return x + y;
}

/**
 * Passing functions
 * Instead of passing values we're passing actions!
 */
const combine4and7 = function (someFunction) {
	return someFunction(4, 7);
};
```

Closure and returning functions

```javascript
// Basic syntax
function giveMeAFunction() {
	return function () {
		console.log("I'm a function");
	};
}

const aFunction = giveMeAFunction();

aFunction(); // "I'm a function"
giveMeAFunction()(); // "I'm a function"
```

Returning multiple functions in the form of a JavaScript object

```javascript
function return2Functions() {
	return {
		function1: function () {
			console.log("I'm the first function!");
		},
		function2: function () {
			console.log("I'm the second function!");
		},
	};
}

const twoFunctions = return2Functions();

twoFunctions.function1(); // "I'm the first function"
twoFunctions.function2(); // "I'm the second function"
```

Closures and capturing

```javascript
function someFunction() {
	let x = 5;
	return function () {
		console.log('x is', x); // "x is 5"
	};
}

const printValueOfX = someFunction();
printValueOfX(); // "x is 5"
```

Higher-order function - A function that takes a function as an argument, returns a function, or both

### 2. Array Functions

\_.map()

```javascript
// Takes all the elements in an array and convert them to some other value
// _.map() does not change the original array,
// but returns a copy that contains the return values
// of the function for each element
// The result have to be assigned to something
const elements = [1, 2, 3, 4, 5];
// _.map(elements, f) => [f(1), f(2), f(3), f(4), f(5)];
```

\_.filter()

```javascript
// Takes only the elements in an array that fits certain criteria
// _.filter() does not change the original array,
// return values of the function for each element are boolean
const elements = [element1, element2, element3, element4, element5];
// _.filter(elements, f) => [element1, element3, element4];
```

\_.every() \_.some();

Takes only the elements in an array that fits certain criteria
Returns a boolean - true if the function returns true for all/some of the elements in the array

\_.reduce();

Takes an array and based on a given function reduces the array down to a single value

```javascript
_.reduce(array, function(accumulatedValue, element)) {
	...
	return ...
}, startingValue)
```
