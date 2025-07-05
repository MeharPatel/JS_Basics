// Numbers and Math

// Number Methods
const price = 19.999;
console.log("toFixed:", price.toFixed(2)); // 19.99
console.log("parseInt:", parseInt("42px")); // 42
console.log("parseFloat:", parseFloat("3.14")); // 3.14

// Math Object
console.log("Math.random:", Math.random()); // Random float between 0 and 1
console.log("Math.floor:", Math.floor(5.7)); // 5
console.log("Math.ceil:", Math.ceil(5.2)); // 6
console.log("Math.round:", Math.round(5.5)); // 6
console.log("Math.max:", Math.max(1, 5, 3)); // 5
console.log("Math.min:", Math.min(1, 5, 3)); // 1

// Example: Generate Random Integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random Integer (1-10):", getRandomInt(1, 10));

// Example: Format Price
const total = 1234.5678;
console.log("Formatted Price:", total.toFixed(2)); // 1234.57