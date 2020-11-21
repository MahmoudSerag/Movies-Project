// requirement modules
const express = require('express');
const getCollection = require('../controller/user');
const router = express.Router();

// get all genres;
router.get('/api/genres', getCollection.getGenre);

// post new genres;
router.post('/api/genres', getCollection.postgenre);

module.exports = router;