const mongoose = require('mongoose');


const allJobSchema = new mongoose.Schema({

    
    //jobImage:{type:String,required:true}
    companyID:{type:String,required:true},
    title:{type:String},
    salary:{type:String},
    location:{type:String},
    type:{type:String},
    languages:{type:String},
    exper:{type:String},
    desc:{type:String},
    qual:{type:String,},
    studentApplied:{type:[],default:[]}
  
});

const allJob = mongoose.model('allJob', allJobSchema);

module.exports = allJob;
