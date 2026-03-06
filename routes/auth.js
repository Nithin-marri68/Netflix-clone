const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { requireGuest } = require('../middleware/auth');

// Login page (only accessible if not logged in)
router.get('/login', requireGuest, authController.showLogin);

// Login POST handler
router.post('/login', requireGuest, authController.login);

// Register page
router.get('/register', requireGuest, authController.showRegister);

// Register POST handler
router.post('/register', requireGuest, authController.register);

// Logout
router.post('/logout', authController.logout);
router.get('/logout', authController.logout);

module.exports = router;