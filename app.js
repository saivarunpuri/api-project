const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use /api as the prefix for all user routes
app.use('/api', userRoutes); // Now the routes will be available as /api/users

module.exports = app;
