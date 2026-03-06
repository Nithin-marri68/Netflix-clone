// routes/index.js
const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');
const { requireAuth } = require('../middleware/auth');

// ---------- Main Pages ----------
router.get('/', pagesController.home);
router.get('/sign', pagesController.sign); // Keep for backward compatibility

// ---------- Browse Pages (Protected) ----------
router.get('/browse', requireAuth, pagesController.browse);
router.get('/browse/telugu', requireAuth, pagesController.telugu);
router.get('/browse/hindi', requireAuth, pagesController.hindi);
router.get('/browse/english', requireAuth, pagesController.english);

// ---------- Movie Page (Protected) ----------
router.get('/movie/:id', requireAuth, pagesController.movie);

module.exports = router;