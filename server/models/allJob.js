const mongoose = require('mongoose');


const allJobSchema = new mongoose.Schema({

    name:String,
    desc:String

  
});

const allJob = mongoose.model('allJob', allJobSchema);

module.exports = allJob;
