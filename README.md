# URL Shortener

## Overview
This is a URL-shortening service built using Node.js and Express. It allows users to create short URLs that redirect to longer URLs.

## Features
- Generate short URLs from long URLs.
- Redirect users to the original URL when they visit the short URL.
- Track the number of visits to each short URL.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Pruthavirajsingh/URL-Shortener.git
   cd URL-Shortener
Install dependencies:

npm install
Set up environment variables:

Create a .env file in the backend directory and add the following:
PORT=3000
MONGO_URI=your_mongodb_connection_string
Start the server:

npm start
Usage
To create a short URL, send a POST request to /api/shorten with the long URL in the request body:

{
  "longUrl": "https://example.com"
}
To redirect to the original URL, visit the short URL:

http://localhost:3000/short-url
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
