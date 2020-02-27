const mongoose = require('mongoose');

const cprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
  },
  image:{
    type:String,
    default:" "
  },
  careerobjrctive:{
    type:String,
    default:"careero bjrctive ?"
  },
  content:{
    type:String,
    default:"content ? "
  },
 email:{
    type:String,
    default:"Email ?"
  },
  address:{
    type:String,
    default:"address ?"
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
    default:"field ?"
  },
  description:{
    type:String,
    default:"description"
  },
  image:{
    type:String,
    default:'uploads'+'//'+'default.jpg'
  }
});

const cprofile = mongoose.model('cprofile', cprofileSchema);

module.exports = cprofile;
