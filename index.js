document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const loginToggle = document.getElementById("login-toggle");
    const signupToggle = document.getElementById("signup-toggle");

    loginToggle.addEventListener("click", function() {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginToggle.classList.add("active");
        signupToggle.classList.remove("active");
    });

    signupToggle.addEventListener("click", function() {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        loginToggle.classList.remove("active");
        signupToggle.classList.add("active");
    });

    const loginButton = document.querySelector("#login button");
    const signupButton = document.querySelector("#signup button");

    loginButton.addEventListener("click", function(e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        // Add your login logic here
    });

    signupButton.addEventListener("click", function(e) {
        e.preventDefault();
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;
        // Add your sign-up logic here
    });
});
