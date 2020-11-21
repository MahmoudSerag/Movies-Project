const mongoose = require('mongoose');

// Create a schema to collection of DB;
const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20
  },
  genreFans: {
    type: Number,
    required: true,
    min: 10,
    max: 100
  },
  movies: {
    type: Array,
    required: true,
    minlength: 2,
    maxlength: 10,
  },
  rate: {
    type: String,
    required: true,
    enum: ['poor', 'good', 'very good', 'excellent'],
  }
});

// Add schema to in our collection in database;
const Genre = mongoose.model('Genre', genreSchema);

module.exports.Genre = Genre;