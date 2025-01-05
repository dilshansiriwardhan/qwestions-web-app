const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      ref: 'User',
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },

  },

);

const Organization = mongoose.model('Organization', organizationSchema);
module.exports = Organization;