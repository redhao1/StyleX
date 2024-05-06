//Importing necessary modules and models
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Authroute = require("./routes/AuthRoute")
const Item = require('./models/Item')


require('dotenv').config();
// Database Connection
// Replace <username>, <password>, <cluster>, and <dbname> with your MongoDB Atlas credentials.
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  // Setting a higher limit for request headers
  serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds
})
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection failed", err));
// Starting the Application

// Middleware Configuration
// Body-parser to parse incoming request bodies as JSON
app.use(bodyParser.json());
// Cookie-parser for handling cookies
app.use(cookieParser());
// CORS for enabling Cross-Origin Resource Sharing
app.use(cors());
// Routing
// Mounting authentication-related routes under the '/api' endpoint
app.use("/api", Authroute);

app.post('/api/upload', async (req, res) => {
    const { itemName, itemDescription } = req.body;
    try {
        // Create a new item instance using the data from the request body
        const newItem = new Item({ itemName, itemDescription });
        // Save the new item to the database
        await newItem.save();
        // Respond with the newly created item
        res.status(201).json(newItem);
    } catch (error) {
        // If an error occurs, respond with a 500 error status and an error message
        console.error('Error uploading item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});