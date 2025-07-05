<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web APIs</title>
</head>
<body>
    <h1>Web APIs Demo</h1>
    <p id="output"></p>

    <script>
        // Web APIs

        // Fetch API
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => {
                document.getElementById("output").textContent = data.title;
            })
            .catch(error => console.log("Fetch Error:", error));

        // LocalStorage
        localStorage.setItem("username", "Alice");
        console.log("LocalStorage:", localStorage.getItem("username")); // Alice

        // SessionStorage
        sessionStorage.setItem("sessionKey", "12345");
        console.log("SessionStorage:", sessionStorage.getItem("sessionKey")); // 12345

        // Geolocation (if supported)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => console.log("Geolocation:", position.coords.latitude, position.coords.longitude),
                error => console.log("Geolocation Error:", error.message)
            );
        }

        // Best Practices
        // Use Fetch API for modern HTTP requests over XMLHttpRequest.
        // Store only non-sensitive data in LocalStorage/SessionStorage.
        // Handle browser compatibility for APIs like Geolocation.
        // Test API calls with mock data for reliability.
    </script>
</body>
</html>