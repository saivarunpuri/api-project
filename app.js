const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Import the user routes
const app = express();

app.use(express.json());  // Middleware to parse JSON request bodies

// Use /api as the prefix for all user routes
app.use('/api', userRoutes); // Now the routes will be available as /api/users

module.exports = app;
