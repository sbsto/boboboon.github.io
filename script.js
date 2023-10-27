// script.js

// Function to add animated text elements
function addAnimatedText() {
    var main = document.querySelector("main");

    // Create a div for the animated text
    var animationDiv = document.createElement("div");
    animationDiv.classList.add("continuous-animation");
    animationDiv.textContent = "Welcome to Your Website!"; // Change this text as needed

    // Append the animated text to the main content
    main.appendChild(animationDiv);
}

// Add the animated text when the page is loaded
window.addEventListener("load", addAnimatedText);
