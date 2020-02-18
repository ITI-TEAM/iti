const mongoose = require('mongoose');

const cprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
    default:"Enter your companyname"
  },
  careerobjective:{
    type:String,
    default:"Enter your careerobjective "
  },
  content:{
    type:String,
    default:"Enter your content "
  },
 email:{
    type:String,
    default:"Enter your Email"
  },
  address:{
    type:String,
    default:"Enter your addrees "
  },
  telephonenumber:{
    type:Number,
   // default:"Enter your telephonenumber"
  },
  datecreated:{
    type:Number,
    //default:"Enter your Date created"
  },
  field:{
    type:String,
    default:"Enter your field"
  },
  description:{
    type:String,
    default:"Enter your Description"
  },
});

const cprofile = mongoose.model('cprofile', cprofileSchema);

module.exports = cprofile;
