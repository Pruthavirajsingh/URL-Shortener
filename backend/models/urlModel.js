const mongoose = require('mongoose');

// Define the schema for the URL model
const urlSchema = new mongoose.Schema({
    // The original long URL
    longUrl: { type: String, required: true },
    // The generated short URL, must be unique
    shortUrl: { type: String, required: true, unique: true },
    // The creation date, defaults to the current date and time
    createdAt: { type: Date, default: Date.now }
});

// Export the URL model
module.exports = mongoose.model('Url', urlSchema);
