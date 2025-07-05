// Regular Expressions

// Creating Regex
const regex = /hello/i; // Case-insensitive
const str = "Hello, World!";
console.log("Test:", regex.test(str)); // true

// Common Patterns
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("Email Validation:", emailRegex.test("user@domain.com")); // true

// Search and Replace
const text = "The cat and the hat.";
console.log("Replace:", text.replace(/cat/gi, "dog")); // The dog and the hat.

// Match and Groups
const phoneRegex = /(\d{3})-(\d{3})-(\d{4})/;
const phone = "123-456-7890";
const match = phone.match(phoneRegex);
console.log("Match Groups:", match); // ["123-456-7890", "123", "456", "7890"]

// Best Practices
// Use regex for validation, parsing, and text manipulation.
// Test regex patterns with tools like regex101.com.
// Escape special characters (e.g., . or *) when needed.
// Optimize regex for performance with large strings.