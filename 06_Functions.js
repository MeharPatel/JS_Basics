// Functions

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John")); // Hello, John!

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Add:", add(5, 3)); // 8

// Parameters and Return
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log("Total:", calculateTotal(10, 2)); // 20

// Default Parameters
function welcome(user = "Guest") {
    return `Welcome, ${user}!`;
}
console.log(welcome()); // Welcome, Guest!
console.log(welcome("Alice")); // Welcome, Alice!

// Anonymous Functions
const multiply = function(x, y) {
    return x * y;
};
console.log("Multiply:", multiply(4, 5)); // 20

// Example: Function with Multiple Parameters
function describePerson(name, age = 18) {
    return `${name} is ${age} years old.`;
}
console.log(describePerson("Bob", 25)); // Bob is 25 years old.