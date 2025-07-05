// TypeScript Integration
// Save as .ts and compile with `tsc TypeScriptIntegration.ts`

// Type Annotations
let username: string = "Alice";
let age: number = 30;
// username = 42; // Error: Type 'number' is not assignable to type 'string'

// Interfaces
interface Person {
    name: string;
    age: number;
    greet(): string;
}
const person: Person = {
    name: "John",
    age: 25,
    greet() {
        return `Hello, ${this.name}!`;
    }
};
console.log("Interface:", person.greet()); // Hello, John!

// Using TypeScript with JavaScript
// TypeScript can infer types in JavaScript files with JSDoc or .d.ts files.
/** @type {number} */
let count = 10;
console.log("JSDoc Type:", count * 2); // 20

// Example: Combining TypeScript and JavaScript
interface User {
    id: number;
    name: string;
}
function getUser(id: number): User {
    return { id, name: `User${id}` };
}
console.log("TypeScript Function:", getUser(1).name); // User1

// Best Practices
// Use TypeScript for type safety in large projects.
// Define interfaces for complex objects to ensure consistency.
// Use JSDoc in JavaScript for partial TypeScript benefits.
// Compile with `tsc --strict` for robust type checking.
// Test TypeScript code with both valid and invalid inputs.