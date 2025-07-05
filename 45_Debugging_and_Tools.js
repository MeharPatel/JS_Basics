// Debugging and Tools

// Browser DevTools
// Use console.log, console.error, console.table for debugging.
console.table([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);

// Debugging Async Code
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log("Async Data:", await response.json());
    } catch (error) {
        console.error("Async Error:", error);
    }
}
fetchData();

// Source Maps
// Enable source maps in DevTools to debug transpiled code.
// Example Babel config with source maps:
/*
{
    "presets": ["@babel/preset-env"],
    "sourceMaps": true
}
*/

// Best Practices
// Use breakpoints in DevTools for step-through debugging.
// Log complex objects with console.table for clarity.
// Enable source maps for minified/transpiled code.
// Test async code with mock responses to simulate failures.