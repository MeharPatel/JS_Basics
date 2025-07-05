// JavaScript in Node.js and Databases
// Requires Node.js and MongoDB driver (`npm install mongodb`)

// Node.js Runtime and Modules
const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, Node.js!");
});
server.listen(3000, () => console.log("Server running on port 3000"));

// File System Operations
const fs = require("fs");
fs.writeFileSync("example.txt", "Hello, File System!");
console.log("File Content:", fs.readFileSync("example.txt", "utf8"));

// Building REST API (Simplified)
const express = require("express"); // Assumes `npm install express`
const app = express();
app.use(express.json());
app.get("/api/users", (req, res) => res.json([{ id: 1, name: "Alice" }]));
// app.listen(3001, () => console.log("API running on port 3001"));

// Connecting to MongoDB
const { MongoClient } = require("mongodb");
async function connectToMongo() {
    const client = new MongoClient("mongodb://localhost:27017");
    try {
        await client.connect();
        const db = client.db("testdb");
        await db.collection("users").insertOne({ name: "Bob" });
        const users = await db.collection("users").find().toArray();
        console.log("MongoDB Users:", users);
    } finally {
        await client.close();
    }
}
connectToMongo().catch(console.error);

// Best Practices
// Use Node.js for server-side JavaScript and APIs.
// Handle file system errors with try-catch or callbacks.
// Use ORMs like Mongoose for MongoDB or Sequelize for SQL databases.
// Secure APIs with middleware (e.g., helmet, cors).
// Test Node.js apps with tools like Jest or Supertest.