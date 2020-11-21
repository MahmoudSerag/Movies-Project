// requirement modules
const express = require('express');
const router = express.Router();
const genresCollection = require('../controller/user');

// get genre with ID;
router.get('/api/genres/:id', genresCollection.getGenreWithID);


// update genre with ID;
router.put('/api/genres/:id', genresCollection.updateGenreWithID);


// delete genre with ID;
router.delete('/api/genres/:id', genresCollection.deleteGenreWithID);

module.exports = router;