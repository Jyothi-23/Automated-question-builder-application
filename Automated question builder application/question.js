const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    text: String
});

const questionSchema = new mongoose.Schema({
    text: String,
    answers: [answerSchema]
});

module.exports = mongoose.model('Question', questionSchema);