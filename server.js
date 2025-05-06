const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); // Import user routes

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use /api as the prefix for all user routes
app.use('/api', userRoutes); // Routes will be available as /api/users

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
