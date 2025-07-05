// ES6+ Features

// Spread Operator
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log("Spread:", combined); // [1, 2, 3, 4]
const obj1 = { a: 1 };
const obj2 = { b: 2 };
console.log("Spread Object:", { ...obj1, ...obj2 }); // { a: 1, b: 2 }

// Rest Operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Rest:", sum(1, 2, 3, 4)); // 10

// Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!

// Optional Chaining
const user = { profile: { name: "Alice" } };
console.log("Optional Chaining:", user?.profile?.name); // Alice
console.log("Optional Chaining (undefined):", user?.address?.city); // undefined

// Nullish Coalescing
const value = null ?? "Default";
console.log("Nullish Coalescing:", value); // Default

// Destructuring Assignments
const { profile: { name } } = user;
console.log("Destructuring:", name); // Alice
const [first, second] = arr1;
console.log("Array Destructuring:", first, second); // 1, 2

// Best Practices
// Use spread/rest for flexible array/object manipulation.
// Leverage optional chaining to safely access nested properties.
// Use nullish coalescing for default values when handling null/undefined.
// Combine destructuring with defaults for concise code.