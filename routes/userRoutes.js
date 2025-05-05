const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

// Routes that require authentication (JWT)
router.post('/users', userController.signUp); // Only authenticated users can create a user
router.get('/users', auth, userController.getUsers);
router.get('/users/:id', auth, userController.getUserById);
router.put('/users/:id', auth, userController.updateUser);
router.delete('/users/:id', auth, userController.deleteUser);

// Login Route (No authentication required)
router.post('/login', auth,userController.login);

module.exports = router;
