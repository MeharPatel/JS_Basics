// Operators

// Arithmetic Operators
// +, -, *, /, %, ** (exponentiation), ++, --
let a = 10, b = 3;
console.log("Arithmetic:", a + b, a - b, a * b, a / b, a % b, a ** b); // 13, 7, 30, 3.333..., 1, 1000

// Assignment Operators
// =, +=, -=, *=, /=, %=, **=
let x = 5;
x += 2; // x = x + 2
console.log("Assignment:", x); // 7

// Comparison Operators
// == (loose equality), === (strict equality), !=, !==, >, <, >=, <=
console.log("Comparison:", 5 == "5", 5 === "5", 5 !== 3); // true, false, true

// Logical Operators
// && (AND), || (OR), ! (NOT)
let isTrue = true, isFalse = false;
console.log("Logical:", isTrue && isFalse, isTrue || isFalse, !isTrue); // false, true, false

// Bitwise Operators
// & (AND), | (OR), ^ (XOR), ~ (NOT), <<, >>, >>>
let bitA = 5, bitB = 3; // 5 = 0101, 3 = 0011
console.log("Bitwise:", bitA & bitB, bitA | bitB); // 1 (0001), 7 (0111)

// Ternary Operator
// condition ? exprIfTrue : exprIfFalse
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary:", status); // Adult

// Type Coercion and Strict Equality
console.log("Type Coercion:", "5" + 5, "5" * 2); // "55", 10
console.log("Strict Equality:", 5 === "5", 5 == "5"); // false, true