const express = require('express');
const Organization = require('../models/organization.model');
const router = express.Router();

// Create a new organization
router.post('/', async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;

    // Create and save the new organization
    const newOrganization = new Organization({ name, email, phoneNumber });
    await newOrganization.save();
    res.status(201).json(newOrganization);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all organizations
router.get('/', async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single organization by ID
router.get('/:id', async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    res.status(200).json(organization);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an organization by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;

    const updatedOrganization = await Organization.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber },
      { new: true, runValidators: true }
    );

    if (!updatedOrganization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    res.status(200).json(updatedOrganization);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an organization by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedOrganization = await Organization.findByIdAndDelete(req.params.id);
    if (!deletedOrganization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    res.status(200).json({ message: 'Organization deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
