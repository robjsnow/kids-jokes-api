const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    _id: Number,
    type: String,
    question: String,
    answer: String,
});

module.exports = mongoose.model("kidjoke", jokeSchema);