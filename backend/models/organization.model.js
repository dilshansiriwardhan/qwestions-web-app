const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
	clerkUserId: {
		type: String,
		ref: 'User',
		required: true,
		unique: true,
	},
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, unique: true },
	phoneNumber: { type: String },
});

const Organization = mongoose.model('Organization', organizationSchema);
module.exports = Organization;
