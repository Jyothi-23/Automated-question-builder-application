onst express = require('express');
const router = express.Router();
const Question = require('../models/question');

// Create a new question
router.post('/', async (req, res) => {
    const { text, answers } = req.body;
    const question = new Question({ text, answers });
    await question.save();
    res.json(question);
});

// Get all questions
router.get('/', async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
});

// Get a single question by ID
router.get('/:id', async (req, res) => {
    const question = await Question.findById(req.params.id);
    res.json(question);
});
module.exports=router;