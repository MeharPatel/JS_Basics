// Syntax and Structure

// Variables
// var: Function-scoped, can be redeclared (older, avoid in modern code).
// let: Block-scoped, can be reassigned.
// const: Block-scoped, cannot be reassigned (but object properties can be modified).
var globalVar = 10;
let blockVar = 20;
const constantVar = 30;

// Data Types
// Primitive: number, string, boolean, undefined, null, symbol, bigint
// Non-Primitive: object (includes arrays, functions, etc.)
let num = 42;
let str = "Hello";
let bool = true;
let undef = undefined;
let nul = null;
let sym = Symbol("id");
let obj = { key: "value" };

// Comments
// Single-line comment
/*
Multi-line
comment
*/

// Semicolons
// Optional in many cases due to Automatic Semicolon Insertion (ASI), but recommended for clarity.
let x = 5; let y = 10; // Semicolons separate statements

// Examples
console.log("Number:", num); // 42
console.log("Object:", obj.key); // value
console.log("Symbol:", sym); // Symbol(id)

// Variable Scope Example
if (true) {
    var varScope = "I'm everywhere"; // Function or global scope
    let letScope = "I'm block-scoped"; // Block scope
}
console.log(varScope); // Works
// console.log(letScope); // Error: letScope is not defined