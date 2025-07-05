// Functional Programming

// Pure Functions
// Same input always produces same output, no side effects.
const add = (a, b) => a + b;
console.log("Pure Function:", add(2, 3)); // 5 (always)

// Higher-Order Functions
// Functions that take or return other functions.
const withLogging = (fn) => (...args) => {
    console.log("Arguments:", args);
    return fn(...args);
};
const loggedAdd = withLogging(add);
console.log("Higher-Order:", loggedAdd(2, 3)); // Logs args, returns 5

// Immutability
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // Creates new array
console.log("Immutability:", numbers, doubled); // [1,2,3], [2,4,6]

// Currying
const multiply = (a) => (b) => a * b;
const double = multiply(2);
console.log("Currying:", double(5)); // 10

// Best Practices
// Write pure functions for predictability and testing.
// Use array methods (map, filter, reduce) for functional operations.
// Maintain immutability to avoid unintended side effects.
// Use currying for reusable, modular code.