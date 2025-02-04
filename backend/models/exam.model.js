const mongoose = require('mongoose');

const examSchema = new mongoose.Schema(
	{
		examName: { type: String, required: true, trim: true },
		updatedAt: { type: Date, default: Date.now },
		instructions: [{ type: String, trim: true }],
		category: { type: String, trim: true },
		scheduledDate: { start: { type: Date }, end: { type: Date } },
		options: { type: mongoose.Schema.Types.ObjectId, ref: 'ExamOptions' },
		allowedGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
	},
	{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;
