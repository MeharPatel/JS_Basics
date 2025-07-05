// Objects

// Creating Objects
// Object Literal
const person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hi, I'm ${this.name}!`;
    }
};
console.log(person.name); // John
console.log(person.greet()); // Hi, I'm John!

// Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.drive = function() {
        return `${this.brand} ${this.model} is driving.`;
    };
}
const myCar = new Car("Toyota", "Camry");
console.log(myCar.drive()); // Toyota Camry is driving.

// Object Destructuring
const { name, age } = person;
console.log("Destructured:", name, age); // John, 30

// Adding/Modifying Properties and Methods
person.job = "Developer";
person.updateAge = function(newAge) {
    this.age = newAge;
};
person.updateAge(31);
console.log("Updated person:", person.age); // 31