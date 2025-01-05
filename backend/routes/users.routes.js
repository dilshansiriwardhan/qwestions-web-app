const express = require('express');
const { createUser } = require('../controllers/user.controller');
const User = require('../models/user.model.js');

const router = express.Router();

router.post('/', createUser);
router.get('/', async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
