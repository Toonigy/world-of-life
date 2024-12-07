function handleCredentialResponse(response) {
    const userCredential = jwt_decode(response.credential);
    console.log("User signed in:", userCredential);
    // Store user info in localStorage or make requests to your backend
    alert(`Welcome ${userCredential.name}!`);
}

// Load jwt-decode library
(async function loadJwtDecode() {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jwt-decode/3.1.2/jwt-decode.min.js";
    document.head.appendChild(script);
})();
