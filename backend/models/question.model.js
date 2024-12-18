const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
   question: { type: String, required: true },
   answers: {
      type: [
         {
            id: Number,
            correct: Boolean,
            answer: String,
         },
      ],
      required: true,
   },
   examId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam',
      required: true,
   },
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;