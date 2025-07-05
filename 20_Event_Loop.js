// Event Loop

// How JavaScript Handles Asynchronous Operations
// Event Loop manages the call stack, task queue, and microtask queue for async execution.
// Call Stack: Executes synchronous code.
// Task Queue: Handles callbacks (e.g., setTimeout).
// Microtask Queue: Handles promises (higher priority).

// Example: Synchronous vs. Asynchronous
console.log("Start");
setTimeout(() => console.log("Timeout"), 0); // Task queue
Promise.resolve().then(() => console.log("Promise")); // Microtask queue
console.log("End");
// Output: Start, End, Promise, Timeout

// Example: Multiple Async Operations
setTimeout(() => console.log("Timeout 1"), 1000);
setTimeout(() => console.log("Timeout 2"), 500);
Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));
// Output: Promise 1, Promise 2, Timeout 2, Timeout 1

// Best Practices
// Understand task vs. microtask priority for predictable async behavior.
// Avoid blocking the event loop with heavy synchronous tasks.
// Use async/await for cleaner async code flow.
// Monitor event loop performance in Node.js with tools like `process.hrtime`.