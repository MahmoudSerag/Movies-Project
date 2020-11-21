// requirement modules;
const express = require('express');
const getAndPost = require('./routes/getAndPost');
const delAndPutAndGetWithID = require('./routes/del&Put&GetWithID');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Connect to DB;
mongoose.connect(`mongodb+srv://mahmoud:22058420qW@mahmoudserag.kpkjl.mongodb.net/moviesGenres?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected To MongoDB...'))
.catch((err) => console.error(err.message));

// understanding json files from user;
app.use(express.json());

// Using body-parser to print output in the console;
app.use(bodyParser.urlencoded({extended: true}));

// use routing page;
app.use(getAndPost);
app.use(delAndPutAndGetWithID);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));