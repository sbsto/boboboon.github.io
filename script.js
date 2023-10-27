// script.js

// Function to hide the loading animation when the page is fully loaded
function hideLoader() {
    var loader = document.querySelector(".loading");
    loader.style.display = "none";
}

// Add an event listener to trigger the hideLoader function when the page is fully loaded
window.addEventListener("load", hideLoader);
