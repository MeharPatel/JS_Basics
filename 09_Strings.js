// Strings

// Creating Strings
const greeting = "Hello, World!";
const name = 'Alice';

// String Methods
// slice, substring
console.log("Slice:", greeting.slice(0, 5)); // Hello
console.log("Substring:", greeting.substring(7, 12)); // World

// replace
console.log("Replace:", greeting.replace("World", "JavaScript")); // Hello, JavaScript!

// split
const words = greeting.split(" ");
console.log("Split:", words); // ["Hello,", "World!"]

// Template Literals
const user = "John";
const message = `Welcome, ${user}!`;
console.log("Template Literal:", message); // Welcome, John!

// String Concatenation
const fullName = name + " Smith";
console.log("Concatenation:", fullName); // Alice Smith

// Example: Combining Methods
const text = "   JavaScript is fun!   ";
console.log("Trimmed and Upper:", text.trim().toUpperCase()); // JAVASCRIPT IS FUN!