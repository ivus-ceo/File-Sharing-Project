const mongoose = require('mongoose');

 /**
  * Model schema
  */
const Schema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  password: {
    type: String
  },
  downloads: {
    type: Number,
    required: true,
    default: 0
  }
});
 
 /**
  * Export of model
  */
module.exports = mongoose.model('File', Schema);