function handleCredentialResponse(response) {
    // Decode the Google ID token
    const userCredential = jwt_decode(response.credential);

    // Log user info to the console (for debugging)
    console.log("User signed in:", userCredential);

    // Optionally, save user data in localStorage or send to backend
    localStorage.setItem("user", JSON.stringify({
        name: userCredential.name,
        email: userCredential.email,
        picture: userCredential.picture
    }));

    // Redirect to the dashboard
    window.location.href = "https://toonigy.github.io/world-of-life/dashboard.html";
}

// Load jwt-decode library dynamically
(async function loadJwtDecode() {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jwt-decode/3.1.2/jwt-decode.min.js";
    document.head.appendChild(script);
})();
