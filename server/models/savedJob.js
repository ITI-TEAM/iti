const mongoose = require('mongoose');

const SavedJobSchema = new mongoose.Schema({

  time:String,
  jobs:[{type:Schema.Types.ObjectId , ref: 'allJob' }],
  type:String
  
});

const SavedJob = mongoose.model('SavedJob', SavedJobSchema);

module.exports = SavedJob;
