const express = require('express');
const Question = require('../models/question.model');
const router = express.Router();

// Create a new Question
router.post('/', async (req, res) => {
	try {
		const { questionNumber,question, answers, examId } = req.body;
		const updatedQuestion = await Question.findOneAndUpdate(
			{ examId, questionNumber },
			{ questionNumber,question, answers, examId },
			{ new: true, upsert: true }
		);

		res.status(201).json(newQuestion);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Create Questions from array
router.put('/many', async (req, res) => {
	try {
	  const { questions, examId } = req.body;
  
	  // Validate the input
	  if (!questions || !Array.isArray(questions)) {
		return res.status(400).json({ error: 'Invalid request body' });
	  }
  
	  if (!examId) {
		return res.status(400).json({ error: 'examId is required' });
	  }
  
	  // Delete all existing questions for the examId
	  await Question.deleteMany({ examId });
  
	  // Prepare the new questions
	  const newQuestions = questions.map((question, index) => ({
		...question.data,
		questionNumber: index,
		questionId : question.id, 
		examId,
	  }));
  
	  // Insert the new questions
	  const insertedQuestions = await Question.insertMany(newQuestions);
  
	  // Respond with success
	  res.status(200).json({
		message: 'Questions replaced successfully',
		insertedQuestions,
	  });
	} catch (error) {
	  console.error('Error replacing questions:', error);
	  res.status(500).json({ error: 'Internal server error' });
	}
  });
  

// router.put('/many', async (req, res) => {
// 	try {
// 	  const { questions , examId} = req.body;
  
// 	  if (!questions || !Array.isArray(questions)) {
// 		return res.status(400).json({ error: 'Invalid request body' });
// 	  }
  
// 	  // Prepare bulk operations
// 	  const bulkOps = questions.map((question , index) => ({
// 		updateOne: {
// 		  filter: { questionId : question.id },
// 		  update: { $set: { ...question.data , questionNumber:index , examId } },
// 		  upsert: true,
// 		},
// 	  }));
  
// 	  // Execute bulkWrite
// 	  const result = await Question.bulkWrite(bulkOps);
  
// 	  res.status(200).json({
// 		message: 'Questions synced successfully',
// 		result,
// 	  });
// 	} catch (error) {
// 	  console.error('Error syncing questions:', error);
// 	  res.status(500).json({ error: 'Internal server error' });
// 	}
//   });



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

		// if (questions.length === 0) {
		// 	return res
		// 		.status(404)
		// 		.json({ message: 'No questions found for this exam' });
		// }

		res.status(200).json(questions); // Respond with all questions
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
