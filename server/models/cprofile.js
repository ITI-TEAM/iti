const mongoose = require('mongoose');

const cprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
    default:""
  },
  image:{
    type:String,
    default:" "
  },
  careerobjrctive:{
    type:String,
    default:" "
  },
  content:{
    type:String,
    default:" "
  },
 email:{
    type:String,
    default:""
  },
  address:{
    type:String,
    default:" "
  },
  telephonenumber:{
    type:Number,
    default:123456789
  },
  datecreated:{
    type:Number,
    default:2020
  },
  field:{
    type:String,
    default:""
  },
  description:{
    type:String,
    default:""
  },
});

const cprofile = mongoose.model('cprofile', cprofileSchema);

module.exports = cprofile;
