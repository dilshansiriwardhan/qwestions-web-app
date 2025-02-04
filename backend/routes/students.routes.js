const express = require('express');
const Student = require('../models/student.model.js');
const Mentor = require('../models/mentor.model.js');
const router = express.Router();

// Create a new student
router.post('/', async (req, res) => {
	try {
		const { name, email, phoneNumber, mentor } = req.body;

		// Validate mentor IDs only if provided
		if (mentor) {
			const mentors = await Mentor.find({ _id: { $in: mentor } });
			if (mentors.length !== mentor.length) {
				return res
					.status(400)
					.json({ error: 'Some mentor IDs are invalid' });
			}
		}

		// Create and save the new student
		const newStudent = new Student({ name, email, phoneNumber, mentor });
		await newStudent.save();
		res.status(201).json(newStudent);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get all students
router.get('/', async (req, res) => {
	try {
		const students = await Student.find().populate('mentor');
		res.status(200).json(students);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get a single student by ID
router.get('/:id', async (req, res) => {
	try {
		const student = await Student.findById(req.params.id).populate(
			'mentor'
		);
		if (!student) {
			return res.status(404).json({ error: 'Student not found' });
		}
		res.status(200).json(student);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Update a student by ID
router.put('/:id', async (req, res) => {
	try {
		const { name, email, phoneNumber, mentor } = req.body;

		// Validate mentor IDs only if provided
		if (mentor) {
			const mentors = await Mentor.find({ _id: { $in: mentor } });
			if (mentors.length !== mentor.length) {
				return res
					.status(400)
					.json({ error: 'Some mentor IDs are invalid' });
			}
		}

		const updatedStudent = await Student.findByIdAndUpdate(
			req.params.id,
			{ name, email, phoneNumber, mentor },
			{ new: true, runValidators: true }
		).populate('mentor');

		if (!updatedStudent) {
			return res.status(404).json({ error: 'Student not found' });
		}

		res.status(200).json(updatedStudent);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Delete a student by ID
router.delete('/:id', async (req, res) => {
	try {
		const deletedStudent = await Student.findByIdAndDelete(req.params.id);
		if (!deletedStudent) {
			return res.status(404).json({ error: 'Student not found' });
		}
		res.status(200).json({ message: 'Student deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
