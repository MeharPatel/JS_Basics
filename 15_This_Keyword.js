// this Keyword

// this in Global Context
// In non-strict mode, this refers to the global object (window in browsers, global in Node.js).
console.log(this === globalThis); // true (in Node.js or browser)

// this in Function Context
function checkThis() {
    console.log(this); // globalThis (non-strict), undefined (strict mode)
}
checkThis();

// this in Object Method
const person = {
    name: "Alice",
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};
console.log(person.greet()); // Hello, Alice!

// Binding this with call, apply, bind
function introduce(role) {
    return `${this.name} is a ${role}.`;
}
const user = { name: "Bob" };
console.log(introduce.call(user, "Developer")); // Bob is a Developer
console.log(introduce.apply(user, ["Engineer"])); // Bob is a Engineer
const boundIntroduce = introduce.bind(user);
console.log(boundIntroduce("Teacher")); // Bob is a Teacher

// this in Constructor
function Car(model) {
    this.model = model;
}
const myCar = new Car("Toyota");
console.log(myCar.model); // Toyota

// Best Practices
// Use strict mode to avoid unexpected global this binding.
// Use bind for consistent this in callbacks.
// Test this behavior in different contexts (e.g., event handlers, nested functions).
// Avoid arrow functions when this binding is needed (see next topic).