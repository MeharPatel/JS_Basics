// Promises Advanced and Async Patterns

// Promise.all: Resolves when all promises resolve, or rejects on first failure.
const promise1 = Promise.resolve("One");
const promise2 = new Promise(resolve => setTimeout(() => resolve("Two"), 1000));
const promise3 = Promise.resolve("Three");
Promise.all([promise1, promise2, promise3])
    .then(results => console.log("Promise.all:", results)); // ["One", "Two", "Three"]

// Promise.race: Resolves/rejects with the first settled promise.
Promise.race([promise2, Promise.reject("Error")])
    .then(result => console.log("Promise.race:", result))
    .catch(error => console.log("Promise.race Error:", error)); // Error

// Promise.any: Resolves with the first fulfilled promise.
Promise.any([Promise.reject("Fail"), promise2])
    .then(result => console.log("Promise.any:", result)); // Two

// Chaining Promises
fetch("https://jsonplaceholder.typicode.com/posts/1") // Simulated
    .then(response => response.json())
    .then(data => console.log("Chained Promise:", data.title))
    .catch(error => console.log("Promise Error:", error));

// Async Iterators
async function* asyncGenerator() {
    yield "First";
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield "Second";
}
(async () => {
    for await (const value of asyncGenerator()) {
        console.log("Async Iterator:", value); // First, Second
    }
})();

// Error Handling with Async/Await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid");
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Async Error:", error.message);
    }
}
fetchData();

// Best Practices
// Use Promise.all for parallel async operations.
// Use Promise.race for timeouts or first-response scenarios.
// Handle errors at each promise chain step or in async/await try-catch.
// Test async iterators with large datasets for performance.