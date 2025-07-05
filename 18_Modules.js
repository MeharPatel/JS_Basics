// Modules

// ES6 Modules (Browser/Node.js 13+)
// Exporting (in a separate file, e.g., math.js):
/*
export const add = (a, b) => a + b;
export const PI = 3.14;
*/

// Importing (Node.js: save as module.mjs or set "type": "module" in package.json)
import { add, PI } from './math.mjs';
console.log("ES6 Add:", add(2, 3)); // 5
console.log("ES6 PI:", PI); // 3.14

// CommonJS Modules (Node.js)
const math = require('./math.js'); // Assuming math.js: module.exports = { add, PI };
console.log("CommonJS Add:", math.add(2, 3)); // 5

// Default Exports
// export default function multiply(x, y) { return x * y; }
// import multiply from './math.mjs';
const multiply = (x, y) => x * y; // Simulated for this file
console.log("Default Multiply:", multiply(4, 5)); // 20

// Module Bundlers
// Tools like Webpack bundle modules for browser compatibility.
// Example Webpack config (conceptual):
/*
module.exports = {
    entry: './index.js',
    output: { filename: 'bundle.js' }
};
*/

// Best Practices
// Use ES6 modules for modern JavaScript projects.
// Ensure "type": "module" in Node.js package.json for ES6 modules.
// Organize code into small, reusable modules.
// Use bundlers for large projects to optimize loading.
// Test module imports/exports in both browser and Node.js environments.