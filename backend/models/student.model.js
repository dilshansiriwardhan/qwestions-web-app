const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	clerkUserId: {
		type: String,
		ref: 'User',
		required: true,
		unique: true,
	},
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, unique: true },
	phoneNumber: { type: String },
	indexNumber: { type: String, unique: true },
	mentor: {
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Mentor',
			},
		],
	},
	groupIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
});

// Middleware to generate indexNumber automatically
studentSchema.pre('save', async function (next) {
	// Only generate indexNumber if it's not already set
	if (!this.indexNumber) {
		const lastStudent = await mongoose
			.model('Student')
			.findOne()
			.sort({ _id: -1 })
			.exec();

		// Extract the numerical part from the last indexNumber and increment
		const lastIndexNumber = lastStudent?.indexNumber?.slice(1) || '000000';
		const nextIndexNumber = (parseInt(lastIndexNumber, 10) + 1)
			.toString()
			.padStart(6, '0');

		this.indexNumber = `S${nextIndexNumber}`;
	}
	next();
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
