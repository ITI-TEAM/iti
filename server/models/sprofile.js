const mongoose = require('mongoose');

const sprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
    default:"test-student"
  }
  ,
  age:{
    type:String,
    default:"enter your age..."
  },
  email:{
    type:String,
    default:"enter your Email..." 
  },
  phone:{
    type:Number,
    default:01000000 
  },
  skills:{
    type:String,
    default:"enter your skill..."
  },
  experience:{
    type:String,
    default:"enter your Experience..."
  },
  certifications:{
    type:String,
    default:"enter your Certifications..."
  },
  university:{
    type:String,
    default:"enter your university..."
  },
  faculty:{
    type:String,
    default:"enter your faculty..."
  },
  grade:{
    type:String,
    default:"enter your grade..."
  },
  graduationYear:{
    type:Number,
  },
  hourRate:{
    type:Number
  }

});

const sprofile = mongoose.model('sprofile', sprofileSchema);

module.exports = sprofile;
