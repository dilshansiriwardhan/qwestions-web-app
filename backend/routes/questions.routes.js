const express = require('express');
const Question = require('../models/question.model'); // Ensure correct path to your model
const router = express.Router();

// Create a new Question
router.post('/', async (req, res) => {
	try {
		const { question, answers, examId } = req.body;
		const newQuestion = new Question({
			question,
			answers,
			examId,
		});

		await newQuestion.save();
		res.status(201).json(newQuestion); // Respond with the created question
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Create Questions from array
router.post('/many', async (req, res) => {
	try {
		// Get the array of questions from the request body
		const questions = req.body;

		// Validate the questions and insert them into the database
		const createdQuestions = await Question.insertMany(questions);

		// Send a success response
		res.status(200).json({
			message: 'Questions added successfully',
			questions: createdQuestions,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error adding questions', error });
	}
});

// Get all Questions
router.get('/', async (req, res) => {
	try {
		const questions = await Question.find().populate('examId', 'examName'); // Populate the examName for examId
		res.status(200).json(questions); // Respond with all questions
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get all Questions by ExamId
router.get('/:examId', async (req, res) => {
	try {
		const { examId } = req.params;
		const questions = await Question.find({ examId });

		if (questions.length === 0) {
			return res
				.status(404)
				.json({ message: 'No questions found for this exam' });
		}

		res.status(200).json(questions); // Respond with all questions
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// // Get a single Question by ID
// router.get('/:id', async (req, res) => {
// 	try {
// 		const question = await Question.findById(req.params.id).populate(
// 			'examId',
// 			'examName'
// 		);

// 		if (!question) {
// 			return res.status(404).json({ message: 'Question not found' });
// 		}

// 		res.status(200).json(question); // Respond with the specific question
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });

// Update a Question by ID
router.put('/:id', async (req, res) => {
	try {
		const updatedQuestion = await Question.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true } // Return the updated question
		);

		if (!updatedQuestion) {
			return res.status(404).json({ message: 'Question not found' });
		}

		res.status(200).json(updatedQuestion); // Respond with the updated question
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Delete a Question by ID
router.delete('/:id', async (req, res) => {
	try {
		const deletedQuestion = await Question.findByIdAndDelete(req.params.id);

		if (!deletedQuestion) {
			return res.status(404).json({ message: 'Question not found' });
		}

		res.status(200).json({ message: 'Question deleted successfully' }); // Confirm deletion
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
