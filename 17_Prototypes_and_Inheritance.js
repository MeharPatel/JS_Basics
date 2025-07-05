// Prototypes and Inheritance

// Prototype Chain
// Every object has a prototype, accessible via __proto__ or Object.getPrototypeOf().
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    return `Hello, ${this.name}!`;
};
const john = new Person("John");
console.log(john.greet()); // Hello, John!
console.log(Object.getPrototypeOf(john) === Person.prototype); // true

// Prototypal Inheritance
function Employee(name, role) {
    Person.call(this, name); // Inherit properties
    this.role = role;
}
Employee.prototype = Object.create(Person.prototype); // Inherit methods
Employee.prototype.constructor = Employee;
Employee.prototype.work = function() {
    return `${this.name} is working as a ${this.role}.`;
};
const alice = new Employee("Alice", "Developer");
console.log(alice.greet()); // Hello, Alice!
console.log(alice.work()); // Alice is working as a Developer.

// Object.create
const base = { baseProp: "Base" };
const derived = Object.create(base);
derived.derivedProp = "Derived";
console.log(derived.baseProp); // Base
console.log(derived.derivedProp); // Derived

// Best Practices
// Use Object.create for clean prototypal inheritance.
// Reset constructor after modifying prototype to avoid issues.
// Avoid deep prototype chains for performance and clarity.
// Test inheritance chains to ensure correct property access.