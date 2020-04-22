const mongoose = require('mongoose');

const ContactListSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: true
  },
  address2: {
    type: String
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ContactList = mongoose.model('contact', ContactListSchema);
