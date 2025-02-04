const mongoose = require('mongoose');

const examOptionsSchema = new mongoose.Schema({
	time: { type: String }, // format: "hh:mm"
	randomize: { type: Boolean },
	cannotCopy: { type: Boolean },
	grading: [
		{
			grade: { type: String },
			minimum: { type: Number }, // minimum percentage
			pass: { type: Boolean },
		},
	],
	resultInfo: {
		points: { type: Boolean },
		percentage: { type: Boolean },
		grade: { type: Boolean },
		correctAnswers: { type: Boolean },
		passOrFail: { type: Boolean},
	},
	feedback: {
		email: { type: Boolean },
		reviews: { type: Boolean },
	},
});

const ExamOptions = mongoose.model('ExamOptions', examOptionsSchema);

module.exports = ExamOptions;
