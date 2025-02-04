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
	phoneNumber: { type: String },
	subjectCategories: [{ type: String, trim: true, unique: true }],
	organizations: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Organization',
		},
	],
	exams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exam' }],
});

const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;
