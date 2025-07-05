// Introduction to JavaScript

// What is JavaScript?
// JavaScript is a high-level, interpreted programming language primarily used for adding interactivity to web pages.
// It is a client-side scripting language but can also run server-side with Node.js.
// Supports event-driven, functional, and object-oriented programming paradigms.

// History and Evolution
// Created in 1995 by Brendan Eich at Netscape, initially named "Mocha," then "LiveScript," and finally "JavaScript."
// Standardized as ECMAScript (ES) in 1997; modern versions include ES6 (2015) with significant updates.
// Evolved from simple scripting to a robust language for web apps, server-side development, and more.

// JavaScript Engines and Runtimes
// JavaScript engines (e.g., V8 in Chrome/Node.js, SpiderMonkey in Firefox) compile and execute JavaScript code.
// Runtimes like browsers (with DOM APIs) or Node.js (with file system APIs) provide environments to run JavaScript.
// Example: V8 compiles JavaScript to machine code for fast execution.

// Example: Basic JavaScript Output
console.log("Hello, JavaScript!"); // Prints to console in Node.js or browser

// Example: Simple Calculation
const yearCreated = 1995;
const currentYear = 2025;
console.log(`JavaScript is ${currentYear - yearCreated} years old.`);

// Example: Browser vs. Node.js Context
// In a browser, you can access window object:
if (typeof window !== 'undefined') {
    console.log("Running in a browser environment.");
} else {
    console.log("Running in Node.js environment.");
}