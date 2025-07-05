// Scope and Closures

// Global Scope: Variables defined outside functions, accessible everywhere.
let globalVar = "I'm global";

// Local Scope: Variables defined inside functions, only accessible within.
function localScopeExample() {
    let localVar = "I'm local";
    console.log(localVar); // I'm local
    console.log(globalVar); // I'm global
}
localScopeExample();
// console.log(localVar); // Error: localVar is not defined

// Block Scope: Variables defined with let/const are scoped to blocks (e.g., if, for).
if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar); // I'm block-scoped
}
// console.log(blockVar); // Error: blockVar is not defined

// Lexical Scoping: Inner functions have access to outer function's variables.
function outer() {
    let outerVar = "Outer";
    function inner() {
        console.log(outerVar); // Outer
    }
    inner();
}
outer();

// Closures: Functions that retain access to their lexical scope even when executed outside.
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Use Case: Private Data with Closures
function createPerson(name) {
    let age = 30; // Private variable
    return {
        getName: () => name,
        getAge: () => age,
        setAge: (newAge) => age = newAge
    };
}
const person = createPerson("Alice");
console.log(person.getName()); // Alice
console.log(person.getAge()); // 30
person.setAge(31);
console.log(person.getAge()); // 31

// Best Practices
// Use let/const for block scoping to avoid var-related issues.
// Use closures for data privacy and stateful functions.
// Avoid excessive global variables to prevent namespace pollution.
// Test closures with multiple instances to ensure independence.