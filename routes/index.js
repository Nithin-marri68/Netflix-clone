// routes/index.js
const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');

// ---------- Main Pages ----------
router.get('/', pagesController.home);
router.get('/sign', pagesController.sign);

// ---------- Browse Pages ----------
router.get('/browse', pagesController.browse);
router.get('/browse/telugu', pagesController.telugu);
router.get('/browse/hindi', pagesController.hindi);
router.get('/browse/english', pagesController.english);

// ---------- Movie Page ----------
router.get('/movie/:id', pagesController.movie);

module.exports = router;
