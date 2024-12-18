const express = require('express');
const router = express.Router();
const Exam = require('../models/exam.model');

// POST: Create a new exam
// router.post('/', async (req, res) => {
//   try {
//     const { examName } = req.body;

//     const newExam = new Exam({
//       examName,
//     });

//     const savedExam = await newExam.save();
//     res.status(201).json(savedExam);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
router.post('/', async (req, res) => {
    console.log(req.body);  // Check the incoming data
    try {
      const { examName } = req.body;
  
      const newExam = new Exam({
        examName,
      });
  
      const savedExam = await newExam.save();
      res.status(201).json(savedExam);
    } catch (error) {
      console.error(error);  // Log any error that occurs
      res.status(500).json({ message: error.message });
    }
  });
  
// GET: Get all exams
router.get('/', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*'); 
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Get a specific exam by ID
router.get('/:id', async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    res.status(200).json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT: Update an exam by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedExam = await Exam.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    res.status(200).json(updatedExam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Delete an exam by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedExam = await Exam.findByIdAndDelete(req.params.id);
    if (!deletedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    res.status(200).json({ message: 'Exam deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
