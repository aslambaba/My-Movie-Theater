const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
    Name: String,
    Discription: String,
    Image: String,
    Date: String,
});

const moviemodel = mongoose.model('UpcomingMovies', MovieSchema);
module.exports = moviemodel;
