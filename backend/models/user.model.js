const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  clerkUserId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'student', 'organization', 'mentor'],
    default: 'student',
  },
});

const User = model('User', userSchema);

module.exports = User;
