// Functional Programming with JavaScript
// Exercise 01 - rename builtin functions to improve code readability

// Without parenthesis
const line1 = console.log;

line1();
line1('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
line1('Praesent aliquet justo feugiat aliquet vestibulum.');
line1('Maecenas consectetur commodo eros, ac tempus massa tincidunt a.');
line1('Suspendisse potenti. Quisque tristique sapien eget ligula sagittis, sit amet molestie quam suscipit.');
line1('Curabitur vitae libero non enim ornare maximus.');
line1();

// With parenthesis
const line2 = console.log(); // undefined