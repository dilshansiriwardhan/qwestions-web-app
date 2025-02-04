const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  students: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
      studentName: { type: String },
    },
  ],
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
