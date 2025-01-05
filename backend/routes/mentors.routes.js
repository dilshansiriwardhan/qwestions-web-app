const express = require('express');
const Mentor = require('../models/mentor.model');
const Organization = require('../models/organization.model'); 
const router = express.Router();

// Create a new mentor
router.post('/', async (req, res) => {
  try {
    const { name, email, phoneNumber, organization } = req.body;

    // Validate organization ID only if provided
    if (organization) {
      const orgExists = await Organization.findById(organization);
      if (!orgExists) {
        return res.status(400).json({ error: 'Invalid organization ID' });
      }
    }

    // Create and save the new mentor
    const newMentor = new Mentor({ name, email, phoneNumber, organization });
    await newMentor.save();
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find().populate('organization');
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single mentor by ID
router.get('/:id', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id).populate('organization');
    if (!mentor) {
      return res.status(404).json({ error: 'Mentor not found' });
    }
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a mentor by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, email, phoneNumber, organization } = req.body;

    // Validate organization ID only if provided
    if (organization) {
      const orgExists = await Organization.findById(organization);
      if (!orgExists) {
        return res.status(400).json({ error: 'Invalid organization ID' });
      }
    }

    const updatedMentor = await Mentor.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber, organization },
      { new: true, runValidators: true }
    ).populate('organization');

    if (!updatedMentor) {
      return res.status(404).json({ error: 'Mentor not found' });
    }

    res.status(200).json(updatedMentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a mentor by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedMentor = await Mentor.findByIdAndDelete(req.params.id);
    if (!deletedMentor) {
      return res.status(404).json({ error: 'Mentor not found' });
    }
    res.status(200).json({ message: 'Mentor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
