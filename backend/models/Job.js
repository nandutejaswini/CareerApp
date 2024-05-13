const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  // Additional fields as necessary
});

module.exports = mongoose.model('Job', jobSchema);
