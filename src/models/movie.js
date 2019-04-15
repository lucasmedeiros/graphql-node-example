const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: String,
    genre: String,
    year: Number
});

module.exports = mongoose.model('Movie', movieSchema);