// script.js

// Function to fetch and display the APOD
async function fetchAndDisplayAPOD() {
    const apiKey = await fetch('file:///C:/Users/Intel%20NUC/Desktop/nasa_api_key.txt')
        .then(response => response.text())
        .catch(error => {
            console.error('Error fetching API key:', error);
            return '';
        });

    const apodContainer = document.getElementById('apod-container');
    const apodImage = document.getElementById('apod-image');
    const apodDescription = document.getElementById('apod-description');

    if (apiKey) {
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.url && data.explanation) {
                    apodImage.src = data.url;
                    apodDescription.textContent = data.explanation;
                } else {
                    console.error('Invalid response from APOD API:', data);
                    apodContainer.innerHTML = '<p>Unable to fetch APOD.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching APOD:', error);
                apodContainer.innerHTML = '<p>Unable to fetch APOD.</p>';
            });
    } else {
        console.error('API key is missing or invalid.');
        apodContainer.innerHTML = '<p>Unable to fetch APOD.</p>';
    }
}

// Add the event listener to fetch and display the APOD when the page is loaded
window.addEventListener('load', fetchAndDisplayAPOD);
