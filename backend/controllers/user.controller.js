const User = require('../models/user.model.js');
const Student = require('../models/student.model.js');
const { getAuth } = require('@clerk/express');

const createUser = async (req, res) => {
	try {
		const { userId: clerkUserId } = getAuth(req);

		if (!clerkUserId) {
			return res
				.status(401)
				.json({ error: 'Unauthorized: Clerk user ID is missing.' });
		}

		let user = await User.findOne({ clerkUserId });

		if (user) {
			return res.status(200).json({
				message: 'User already exists.',
				user,
			});
		} else {
			const { role, userName, email } = req.body;

			user = new User({ clerkUserId, role, userName, email });
			await user.save();

			let newStudent = null;
			if (role === 'student') {
				if (!userName || !email) {
					return res.status(400).json({
						error: 'Name and email are required for students.',
					});
				}

				newStudent = new Student({
					clerkUserId,
					userName,
					email,
				});
				await newStudent.save();
			}

			res.status(201).json({
				message: 'User created successfully!',
				user,
				student: newStudent || null,
			});
		}
	} catch (error) {
		console.error('Error creating or retrieving user:', error);
		res.status(500).json({ error: 'Internal server error.' });
	}
};

module.exports = { createUser };
