const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  paid: {
    type: Boolean,
  },
  active: {
    type: Boolean,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Participant = mongoose.model('participant', ParticipantSchema);
