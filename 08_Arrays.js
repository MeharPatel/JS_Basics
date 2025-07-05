// Arrays

// Creating Arrays
const numbers = [1, 2, 3, 4, 5];
const mixed = ["apple", 10, true];

// Array Methods
// push, pop
numbers.push(6);
console.log("Push:", numbers); // [1, 2, 3, 4, 5, 6]
numbers.pop();
console.log("Pop:", numbers); // [1, 2, 3, 4, 5]

// slice, splice
const sliced = numbers.slice(1, 3);
console.log("Slice:", sliced); // [2, 3]
numbers.splice(2, 1, 10);
console.log("Splice:", numbers); // [1, 2, 10, 4, 5]

// map, filter, reduce
const doubled = numbers.map(n => n * 2);
console.log("Map:", doubled); // [2, 4, 20, 8, 10]
const evens = numbers.filter(n => n % 2 === 0);
console.log("Filter:", evens); // [2, 10, 4]
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce:", sum); // 22

// Array Destructuring
const [first, second] = numbers;
console.log("Destructured:", first, second); // 1, 2