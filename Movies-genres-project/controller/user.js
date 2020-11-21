// requirement modules;
const genresCollection = require('../model/genresCollection');

// Post genre;
exports.postgenre = async (req, res) => {
  try {
    const genre = genresCollection.Genre({
      name: req.body.name,
      genreFans: req.body.genreFans,
      movies: req.body.movies,
      rate: req.body.rate
    });
    const result = await genre.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
}

// get genre;
exports.getGenre = async (req, res) => {
  try {
    const genre = await genresCollection.Genre.find();
    res.send(genre);
  } catch (error) {
    console.log(error.message);
  }
}


// get genre based on specifi ID;
exports.getGenreWithID = async (req, res) => {
  try {
    const genre = await genresCollection.Genre.findById(req.params.id);
    if (!genre) return res.status(404).send('No genre With this ID...');
    res.send(genre);
  } catch (error) {
    console.log(error.message);
  }
}

// update genre with ID;
exports.updateGenreWithID = async (req, res) => {
  try {
    let genre = await genresCollection.Genre.findById(req.params.id);
    if (!genre) return res.status(404).send('No genre With this ID...');
      
    genre.name = req.body.name;
    genre.genreFans = req.body.genreFans;
    genre.movies = req.body.movies;
    genre.rate = req.body.rate;
    
    const result = await genre.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
}


// Delete genre with ID;
exports.deleteGenreWithID = async (req, res) => {
  try {
    const genre = await genresCollection.Genre.findByIdAndRemove(req.params.id);
    if (!genre) return res.status(404).send('No Genre With This ID...');
    res.send(genre);
  } catch (error) {
    console.log(error.message);
  }
}