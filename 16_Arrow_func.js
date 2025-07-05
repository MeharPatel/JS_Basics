// Arrow Functions

// Syntax
// Concise syntax for functions, no `function` keyword.
const add = (a, b) => a + b;
console.log("Add:", add(5, 3)); // 8

// Single parameter, no parentheses
const square = x => x * x;
console.log("Square:", square(4)); // 16

// No parameters
const sayHello = () => "Hello!";
console.log(sayHello()); // Hello!

// Multiple statements require curly braces and return
const greet = name => {
    const message = `Welcome, ${name}!`;
    return message;
};
console.log(greet("Alice")); // Welcome, Alice!

// Differences from Regular Functions
// No `this` binding; inherits `this` from surrounding scope.
const person = {
    name: "John",
    regularGreet: function() {
        return this.name;
    },
    arrowGreet: () => this.name // Uses global this, not person
};
console.log("Regular:", person.regularGreet()); // John
console.log("Arrow:", person.arrowGreet()); // undefined or globalThis.name

// Use Cases
// Ideal for short, functional operations (e.g., array methods).
const numbers = [1, 2, 3];
console.log(numbers.map(n => n * 2)); // [2, 4, 6]

// Best Practices
// Use arrow functions for concise callbacks and non-method functions.
// Avoid arrow functions in object methods or when `this` binding is needed.
// Use curly braces for clarity in complex arrow functions.
// Test arrow function behavior in async contexts (see later topics).