# FREE URL Shortener 🚀  

## Table of Contents
- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project 📝
The **URL Shortener** is a simple tool that allows users to convert long URLs into short, shareable links. 

- **Backend**: Built with Node.js.
- **Frontend**: Uses HTML, CSS, and JavaScript.
- **Database**: MongoDB (via MongoDB Atlas).

---

## Getting Started 🔧

Follow these steps to set up and run the project on your computer:

### 1. Clone the Repository
Download the project files to your local machine:
```sh
git clone https://github.com/Pruthavirajsingh/URL-Shortner.git
cd URL-Shortner
```

### 2. Set Up the Backend
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file inside the `backend` directory:
   ```sh
   touch .env
   ```
   Add the following lines to your `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB Atlas connection string.

4. Start the backend server:
   ```sh
   npm start
   ```

### 3. Set Up the Frontend
1. Navigate to the `frontend` folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```

---

## How to Use 🌐

### 1. Open the Application
- Once the servers are running, open your browser and go to:  
  [http://localhost:3000](http://localhost:3000)

### 2. Shorten a URL
- Enter a long URL into the input box and click the **"Shorten"** button.  
- A shortened URL will appear on the screen.

### 3. Use the Shortened URL
- Click the shortened URL to instantly redirect to the original website.

---

## Contributing 🤝

We welcome contributions from everyone!  
Here’s how you can help:
1. **Fork the project** to your own GitHub account.
2. **Create a new branch** for your changes:
   ```sh
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add feature description"
   ```
4. **Push to your branch**:
   ```sh
   git push origin feature-name
   ```
5. Open a **Pull Request** on GitHub.

---

## License 📜
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## Contact 📬
If you have any questions or feedback, feel free to reach out:

- **Email**: mathsxpruthaviraj@gmail.com  
- **GitHub**: [Pruthavirajsingh](https://github.com/Pruthavirajsingh)

---


