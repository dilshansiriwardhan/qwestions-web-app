const mongoose = require('mongoose');
const Organization = require('./organization.model');

const mentorSchema = new mongoose.Schema({
	clerkUserId: {
		type: String,
		ref: 'User',
		required: true,
	},
	name: { type: String, required: true },
	email: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	organization: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Organization',
	},
});

const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;
