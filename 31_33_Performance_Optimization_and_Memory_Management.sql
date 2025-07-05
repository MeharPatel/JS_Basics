// Performance Optimization and Memory Management

// Performance Optimization
// Debouncing: Limits function execution rate (e.g., for event handlers).
function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}
const logSearch = debounce((query) => console.log("Search:", query), 300);
logSearch("test"); // Executes after 300ms if no further calls

// Throttling: Ensures function executes at most once per interval.
function throttle(fn, interval) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn(...args);
        }
    };
}
const logScroll = throttle(() => console.log("Scrolled"), 1000);
logScroll(); // Executes once per second at most

// Efficient DOM Manipulation
// Batch updates to minimize reflows and repaints.
function updateDOM(items) {
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        fragment.appendChild(li);
    });
    document.getElementById("list")?.appendChild(fragment);
}
// Example usage (browser-only): updateDOM(["Item 1", "Item 2"]);

// Memory Management
// Garbage Collection: JavaScript automatically frees memory when objects are no longer referenced.
let obj = { data: "Heavy data" };
obj = null; // Eligible for garbage collection
console.log("Object set to null:", obj);

// Memory Leaks: Avoid retaining references unnecessarily.
function createLeak() {
    let array = [];
    return () => array.push(new Array(1000000).fill(0)); // Keeps growing
}
const leaker = createLeak();
leaker(); // Increases memory usage

// WeakMap and WeakSet: Hold weak references, allowing garbage collection.
const weakMap = new WeakMap();
let key = { id: 1 };
weakMap.set(key, "Value");
console.log("WeakMap:", weakMap.get(key)); // Value
key = null; // Key can be garbage collected
console.log("WeakMap after null:", weakMap.has(key)); // false

// Best Practices
// Use debouncing/throttling for frequent events (e.g., scroll, resize).
// Batch DOM updates with fragments to reduce reflows.
// Nullify unused references to aid garbage collection.
// Use WeakMap/WeakSet for temporary key-value storage.
// Monitor memory usage with browser DevTools or Node.js tools.