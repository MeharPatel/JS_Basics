// JSON

// Parsing JSON
const jsonString = '{"name": "John", "age": 30}';
const obj = JSON.parse(jsonString);
console.log("Parsed JSON:", obj.name, obj.age); // John, 30

// Stringifying JSON
const person = { name: "Alice", age: 25 };
const jsonStr = JSON.stringify(person);
console.log("Stringified JSON:", jsonStr); // {"name":"Alice","age":25}

// Working with APIs (Simulated)
const apiResponse = JSON.stringify([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]);
const posts = JSON.parse(apiResponse);
console.log("API Data:", posts.map(post => post.title)); // ["Post 1", "Post 2"]

// Error Handling with JSON
try {
    const invalidJson = "{name: 'John'}"; // Invalid JSON
    JSON.parse(invalidJson);
} catch (error) {
    console.log("JSON Error:", error.message); // Unexpected token n in JSON at position 1
}

// Best Practices
// Always validate JSON data before parsing.
// Use try-catch for JSON.parse to handle invalid JSON.
// Minimize JSON data size for performance in APIs.
// Test JSON serialization with complex objects (e.g., nested arrays).