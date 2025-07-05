// Security in JavaScript

// Preventing XSS (Cross-Site Scripting)
function sanitizeInput(input) {
    return input.replace(/[&<>"']/g, (match) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;"
    }[match]));
}
const unsafeInput = "<script>alert('XSS')</script>";
console.log("Sanitized:", sanitizeInput(unsafeInput)); // &lt;script&gt;alert(&#x27;XSS&#x27;)&lt;/script&gt;

// CSRF Protection (Conceptual)
function addCsrfToken() {
    // Server should generate and validate CSRF tokens
    return '<input type="hidden" name="_csrf" value="random-token">';
}
console.log("CSRF Token:", addCsrfToken());

// Secure API Calls
async function secureFetch(url) {
    const response = await fetch(url, {
        headers: {
            "Authorization": "Bearer secure-token",
            "Content-Type": "application/json"
        },
        credentials: "same-origin" // Prevent cross-origin issues
    });
    return response.json();
}
secureFetch("https://api.example.com/data")
    .then(data => console.log("Secure API:", data))
    .catch(console.error);

// Best Practices
// Sanitize all user inputs before rendering to DOM.
// Use CSRF tokens for POST requests in web forms.
// Set HTTP-only cookies for sensitive data to prevent JavaScript access.
// Use HTTPS for all API calls to ensure encryption.
// Validate and sanitize data on both client and server.