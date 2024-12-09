# FREE URL Shortener Project

# URL Shortener

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description
This is a URL shortener service that allows users to generate short URLs for their long URLs. The service is built using Node.js for the backend and a simple HTML/CSS/JavaScript frontend.

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Pruthavirajsingh/URL-Shortner.git
   cd URL-Shortner
   ```

2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**
   - Due to sensitive credentials, the `.env` file is not included in the repository. You need to create your own `.env` file in the `backend` directory and add the following variables:
     ```sh
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```
   - Replace `your_mongodb_connection_string` with your actual MongoDB connection string.(I used MongoDB Atlas)

5. **Start the backend server:**
   ```sh
   cd backend
   npm start
   ```

6. **Start the frontend server:**
   ```sh
   cd ../frontend
   npm start
   ```

## Usage
1. **Shorten a URL:**
   - Open your browser and navigate to `http://localhost:3000`.
   - Enter a long URL in the input field and click the "Shorten" button.
   - The shortened URL will be displayed.

2. **Redirect to the original URL:**
   - Click on the shortened URL to be redirected to the original URL.

## Contributing
Contributions are welcome! Please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please contact:
- **Email:** mathsxpruthaviraj@gmail.com
- **GitHub:** [Pruthavirajsingh](https://github.com/Pruthavirajsingh)
