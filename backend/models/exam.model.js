const mongoose = require('mongoose');

const examSchema = new mongoose.Schema(
  {
    examName: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;