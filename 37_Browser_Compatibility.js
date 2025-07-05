// Browser Compatibility

// Polyfills: Add missing features for older browsers.
if (!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
        return this.indexOf(value) !== -1;
    };
}
const arr = [1, 2, 3];
console.log("Polyfill includes:", arr.includes(2)); // true

// Transpilers (Babel): Convert modern JavaScript to older syntax.
// Example Babel config (conceptual):
/*
{
    "presets": ["@babel/preset-env"]
}
*/
// Transpiled code (simulated):
const add = (a, b) => a + b; // Becomes: function add(a, b) { return a + b; }
console.log("Transpiled Add:", add(2, 3)); // 5

// Feature Detection
if ("geolocation" in navigator) {
    console.log("Geolocation supported");
} else {
    console.log("Geolocation not supported");
}

// Cross-Browser Testing (Conceptual)
function checkBrowser() {
    const ua = navigator.userAgent;
    return /chrome/i.test(ua) ? "Chrome" : /firefox/i.test(ua) ? "Firefox" : "Other";
}
console.log("Browser:", checkBrowser());

// Best Practices
// Use polyfills for critical features (e.g., Promise, fetch).
// Configure Babel with @babel/preset-env for broad compatibility.
// Use feature detection over browser sniffing.
// Test on multiple browsers (e.g., Chrome, Firefox, Safari) using tools like BrowserStack.
// Maintain a fallback for unsupported features.