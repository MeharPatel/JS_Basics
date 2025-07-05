// Microfrontends

// Building Modular Frontends
// Example: Framework-agnostic microfrontend using iframe
function loadMicrofrontend(containerId, url) {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    document.getElementById(containerId)?.appendChild(iframe);
}
// loadMicrofrontend("app", "https://microfrontend.example.com"); // Simulated

// Module Federation (Webpack, conceptual):
/*
module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            remotes: { app2: "app2@http://localhost:3001/remoteEntry.js" }
        })
    ]
};
*/
const loadRemoteModule = async (url) => {
    // Simulated remote module loading
    return { default: () => console.log("Loaded remote module") };
};
loadRemoteModule("http://example.com/module").then(module => module.default());

// Framework-Agnostic Microfrontends
function renderMicrofrontend(containerId, component) {
    const container = document.getElementById(containerId);
    if (container) container.innerHTML = component();
}
renderMicrofrontend("app", () => "<div>Microfrontend Content</div>");

// Best Practices
// Use Module Federation for modern microfrontends in Webpack.
// Ensure clear boundaries between microfrontends for independence.
// Test cross-team dependencies and communication.
// Use iframes as a last resort for isolation.