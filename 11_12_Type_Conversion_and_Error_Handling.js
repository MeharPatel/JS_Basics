// Type Conversion and Error Handling

// Type Conversion
// Implicit Conversion: JavaScript automatically converts types during operations.
console.log("Implicit:", "5" + 5); // "55" (string concatenation)
console.log("Implicit:", "5" * 2); // 10 (string to number)

// Explicit Conversion: Manually convert types using functions.
let str = "123";
let num = Number(str); // Explicitly convert string to number
console.log("Explicit Number:", num); // 123
console.log("String to Boolean:", Boolean("hello")); // true
console.log("Number to String:", String(42)); // "42"

// Converting Between Types
let bool = true;
console.log("Boolean to Number:", Number(bool)); // 1
console.log("Boolean to String:", String(bool)); // "true"
console.log("String to Number (parseInt):", parseInt("42px")); // 42
console.log("String to Number (parseFloat):", parseFloat("3.14")); // 3.14

// Error Handling
// try, catch, finally: Handle runtime errors gracefully.
try {
    let value = undefinedVariable; // Causes ReferenceError
    console.log(value);
} catch (error) {
    console.log("Caught Error:", error.message); // ReferenceError: undefinedVariable is not defined
} finally {
    console.log("Finally: Always executes.");
}

// Throwing Custom Errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("Custom Error:", error.message); // Division by zero is not allowed.
}

// Best Practices
// Use explicit conversion to avoid unexpected behavior (e.g., Number() instead of relying on coercion).
// Always include error handling for operations that may fail (e.g., parsing, external data).
// Use descriptive error messages for custom errors.
// Test edge cases (e.g., null, undefined, invalid inputs).