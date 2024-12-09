// Select the form element
const form = document.getElementById('urlForm');

// Select the input element for the long URL
const longUrlInput = document.getElementById('longUrl');

// Select the result div where the shortened URL will be displayed
const resultDiv = document.getElementById('shortenedUrl');

// Create a loading div to show while the request is being processed
const loadingDiv = document.createElement('div');
loadingDiv.style.display = 'none';
loadingDiv.textContent = 'Loading...';
form.appendChild(loadingDiv);

// Select the content section where the list of shortened URLs will be displayed
const contentSection = document.getElementById('content-section');

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get the trimmed value of the long URL input
    const longUrl = longUrlInput.value.trim();
    if (!longUrl) return;

    // Show the loading div
    loadingDiv.style.display = 'block';

    // Clear the result div
    resultDiv.innerHTML = '';

    try {
        // Send a POST request to the server to shorten the URL
        const response = await fetch('http://localhost:3000/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ longUrl }),
        });

        // Parse the response JSON
        const data = await response.json();

        if (response.ok) {
            // Get the shortened URL from the response
            const shortenedUrl = data.shortUrl;

            // Check if the shortened URL already exists in the content section
            const existingUrls = document.querySelectorAll('.content-item');
            let urlExists = false;
            existingUrls.forEach((url) => {
                if (url.innerHTML.includes(shortenedUrl)) {
                    urlExists = true;
                }
            });

            if (!urlExists) {
                // Update the input box with the shortened URL
                longUrlInput.value = shortenedUrl;

                // Display the shortened URL in the result div
                resultDiv.innerHTML = `
                    <div class="shortened-url-container">
                        <a href="http://localhost:3000/redirect/${shortenedUrl}" target="_blank" class="shortened-url">${shortenedUrl}</a>
                        <button class="copy-button" data-clipboard-text="http://localhost:3000/redirect/${shortenedUrl}">Copy</button>
                    </div>
                `;

                // Add smooth transition for result display
                resultDiv.style.opacity = 0;
                resultDiv.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    resultDiv.style.opacity = 1;
                }, 10);

                // Add copy to clipboard functionality
                document.querySelectorAll('.copy-button').forEach(button => {
                    button.addEventListener('click', function() {
                        const textToCopy = this.getAttribute('data-clipboard-text');
                        navigator.clipboard.writeText(textToCopy).then(() => {
                            alert('Link copied to clipboard!');
                        }).catch(err => {
                            console.error('Failed to copy text: ', err);
                        });
                    });
                });

                // Add the new content to the content section
                contentSection.innerHTML += `
                    <div class="content-item">
                        <p>Original URL: ${longUrl}</p>
                        <p>Shortened URL: <a href="http://localhost:3000/redirect/${shortenedUrl}" target="_blank">${shortenedUrl}</a></p>
                    </div>
                `;
            } else {
                // Alert the user if the shortened URL already exists
                alert('This shortened URL already exists in the list.');
            }
        } else {
            // Display an error message if the response is not OK
            resultDiv.textContent = data.message || 'Error occurred.';
        }
    } catch (err) {
        // Display a generic error message if an exception occurs
        resultDiv.textContent = 'An error occurred. Please try again.';
    } finally {
        // Hide the loading div
        loadingDiv.style.display = 'none';
    }
});
