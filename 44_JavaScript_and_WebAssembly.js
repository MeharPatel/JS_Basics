// JavaScript and WebAssembly

// Interfacing with WebAssembly
// WASM module (conceptual, save as add.wasm):
/*
(module
  (func $add (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add)
  (export "add" (func $add))
)
*/
async function loadWasm() {
    const response = await fetch("add.wasm");
    const buffer = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(buffer);
    return instance.exports.add;
}
loadWasm().then(add => console.log("WASM Add:", add(2, 3))).catch(console.error); // 5

// Performance Benefits
// Example: JavaScript vs. WebAssembly for computation
function jsSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += i;
    return sum;
}
console.log("JS Sum:", jsSum(1000000)); // Compare performance with WASM equivalent

// Best Practices
// Use WebAssembly for performance-critical tasks (e.g., computations).
// Compile WASM modules with tools like Emscripten.
// Ensure browser compatibility for WebAssembly.
// Test WASM integration with JavaScript for correctness.