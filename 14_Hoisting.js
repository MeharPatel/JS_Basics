// Hoisting

// Variable Hoisting
// var declarations are hoisted to the top of their scope, initialized as undefined.
console.log(varVar); // undefined
var varVar = "I'm hoisted";
console.log(varVar); // I'm hoisted

// Function Hoisting
// Function declarations are fully hoisted (name and body).
sayHello(); // Hello!
function sayHello() {
    console.log("Hello!");
}

// let/const are not fully hoisted; they cause a Temporal Dead Zone (TDZ).
// console.log(letVar); // Error: Cannot access 'letVar' before initialization
let letVar = "I'm not fully hoisted";

// Function Expressions are not hoisted (only the variable declaration is).
// sayHi(); // Error: sayHi is not a function
var sayHi = function() {
    console.log("Hi!");
};

// Example: Hoisting with var vs. let
function testHoisting() {
    console.log(a); // undefined
    var a = 10;
    // console.log(b); // Error: Cannot access 'b' before initialization
    let b = 20;
}
testHoisting();

// Best Practices
// Avoid relying on hoisting for clarity; declare variables/functions before use.
// Use let/const instead of var to avoid unexpected hoisting behavior.
// Understand TDZ when using let/const to prevent runtime errors.
// Place function declarations at the top of their scope for readability.