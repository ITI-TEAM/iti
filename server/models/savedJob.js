const mongoose = require('mongoose');

const SavedJobSchema = new mongoose.Schema({

 // jobs:[{type: mongoose.Schema.Types.ObjectId , ref: 'allJob' }],
  jobID:[{type: mongoose.Schema.Types.ObjectId , ref: 'allJob' }],
  studentID:String
  
});

const SavedJob = mongoose.model('SavedJob', SavedJobSchema);

module.exports = SavedJob;
