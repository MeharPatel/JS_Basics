// Asynchronous JavaScript

// Callbacks
function fetchData(callback) {
    setTimeout(() => callback("Data fetched"), 1000);
}
fetchData(data => console.log("Callback:", data)); // Data fetched (after 1s)

// Promises
const fetchPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved"), 1000);
    // setTimeout(() => reject("Promise rejected"), 1000); // For error case
});
fetchPromise
    .then(result => console.log(result)) // Promise resolved
    .catch(error => console.log(error))
    .finally(() => console.log("Promise completed"));

// Async/Await
async function fetchAsync() {
    try {
        const result = await new Promise(resolve => setTimeout(() => resolve("Async resolved"), 1000));
        console.log(result); // Async resolved
    } catch (error) {
        console.log(error);
    }
}
fetchAsync();

// Best Practices
// Prefer async/await for readable asynchronous code.
// Handle errors in promises and async/await to prevent uncaught exceptions.
// Use callbacks for simple, one-off tasks; avoid callback hell.
// Test async code with realistic delays and error scenarios.