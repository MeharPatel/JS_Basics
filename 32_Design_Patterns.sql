// Design Patterns

// Singleton Pattern: Ensures a single instance of an object.
const Singleton = (function() {
    let instance;
    function createInstance() {
        return { name: "Singleton", getName: () => this.name };
    }
    return {
        getInstance: () => instance || (instance = createInstance())
    };
})();
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log("Singleton:", s1 === s2); // true

// Factory Pattern: Creates objects without specifying the exact class.
function CarFactory() {
    this.createCar = (type) => {
        switch (type) {
            case "sedan": return { type: "Sedan", drive: () => "Driving sedan" };
            case "suv": return { type: "SUV", drive: () => "Driving SUV" };
            default: return null;
        }
    };
}
const factory = new CarFactory();
console.log("Factory:", factory.createCar("sedan").drive()); // Driving sedan

// Observer Pattern: Allows objects to subscribe to events.
class Observer {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    notify(data) {
        this.observers.forEach(fn => fn(data));
    }
}
const subject = new Observer();
subject.subscribe(data => console.log("Observer:", data));
subject.notify("Event occurred"); // Observer: Event occurred

// Module Pattern: Encapsulates private data and exposes public API.
const Module = (function() {
    let privateVar = "Secret";
    return {
        getData: () => privateVar,
        setData: (value) => privateVar = value
    };
})();
console.log("Module:", Module.getData()); // Secret
Module.setData("New Secret");
console.log("Module Updated:", Module.getData()); // New Secret

// Best Practices
// Use Singleton for resources needing a single instance (e.g., config).
// Apply Factory for flexible object creation.
// Use Observer for event-driven systems (e.g., pub/sub).
// Leverage Module for data privacy and clear APIs.
// Test patterns for scalability in large applications.