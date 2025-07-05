// Object-Oriented Programming (OOP)

// Classes and Constructors
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}
const john = new Person("John", 30);
console.log(john.greet()); // Hello, John!

// Inheritance
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    work() {
        return `${this.name} is a ${this.role}.`;
    }
}
const alice = new Employee("Alice", 25, "Developer");
console.log(alice.greet()); // Hello, Alice!
console.log(alice.work()); // Alice is a Developer.

// Encapsulation with Getters/Setters
class Account {
    #balance = 0; // Private field
    constructor(owner) {
        this.owner = owner;
    }
    get balance() {
        return this.#balance;
    }
    set balance(amount) {
        if (amount < 0) throw new Error("Negative balance not allowed.");
        this.#balance = amount;
    }
}
const account = new Account("Bob");
account.balance = 100;
console.log("Balance:", account.balance); // 100

// Best Practices
// Use classes for clear OOP structure in modern JavaScript.
// Leverage private fields (#) for encapsulation.
// Extend classes for inheritance, but avoid deep hierarchies.
// Test getters/setters for edge cases (e.g., invalid inputs).