const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Contact
let Contact = new Schema({
  person_name: {
    type: String
  },
  contact_name: {
    type: String
  },
  contact_gst_number: {
    type: Number
  }
},{
    collection: 'contact'
});

module.exports = mongoose.model('Contact', Contact);