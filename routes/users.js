const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { requireAuth } = require('../middleware/auth');

router.get('/profile', requireAuth, usersController.profile);

module.exports = router;