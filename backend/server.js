const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const Url = require('./models/urlmodel');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)

// Rate limiting to prevent abuse
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});

app.use('/shorten', apiLimiter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// POST endpoint to shorten URL
app.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl) {
        return res.status(400).json({ message: 'Please provide a valid URL.' });
    }

    try {
        // Validate if the URL is correct
        const regex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
        if (!regex.test(longUrl)) {
            return res.status(400).json({ message: 'Invalid URL format' });
        }

        // Generate a unique short URL with "tiesmedia" prefix
        const shortUrl = `tiesmedia-${shortid.generate()}`;
        const newUrl = new Url({ longUrl, shortUrl });
        await newUrl.save();  // Save the new URL to the database

        console.log(`Short URL generated: ${shortUrl}`);
        return res.json({ shortUrl });
    } catch (err) {
        console.error('Error generating short URL:', err);
        return res.status(500).json({ message: 'Server error.' });
    }
});

// GET endpoint to redirect to the original URL
app.get('/redirect/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const urlRecord = await Url.findOne({ shortUrl });

        if (!urlRecord) {
            return res.status(404).json({ message: 'Short URL not found.' });
        }

        console.log(`Redirecting to original URL: ${urlRecord.longUrl}`);
        return res.redirect(urlRecord.longUrl);  // Redirect to the original URL
    } catch (err) {
        console.error('Error redirecting URL:', err);
        return res.status(500).json({ message: 'Server error.' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
