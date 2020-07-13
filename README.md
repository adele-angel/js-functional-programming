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

Basic syntax

```javascript
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
