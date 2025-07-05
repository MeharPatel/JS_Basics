// Testing JavaScript
// Assumes Jest is installed (`npm install jest`)

// Unit Testing with Jest
function add(a, b) {
    return a + b;
}
// Jest Test (save as test file, e.g., add.test.js):
/*
describe("add", () => {
    test("adds two numbers", () => {
        expect(add(2, 3)).toBe(5);
    });
});
*/
console.log("Add:", add(2, 3)); // 5 (for demo)

// Mocking
function fetchData(callback) {
    callback("Mocked data");
}
// Jest Mock Test:
/*
test("fetchData calls callback", () => {
    const mockCallback = jest.fn();
    fetchData(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith("Mocked data");
});
*/
fetchData(data => console.log("Mocked:", data)); // Mocked: Mocked data

// Testing Async Code
async function getUser() {
    return { id: 1, name: "Alice" };
}
// Jest Async Test:
/*
test("getUser returns user", async () => {
    const user = await getUser();
    expect(user).toEqual({ id: 1, name: "Alice" });
});
*/
getUser().then(user => console.log("Async User:", user.name)); // Alice

// Best Practices
// Use Jest or Mocha for unit testing JavaScript code.
// Write tests for all public functions and edge cases.
// Mock external dependencies (e.g., APIs) for consistent tests.
// Test async code with async/await or Promise methods.
// Run tests with `npm test` in CI/CD pipelines.