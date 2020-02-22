const mongoose = require('mongoose');

const sprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
    default:"Your Name ?"
  }
  ,
  age:{
    type:String,
    default:"Age ?"
  },
  title:{
    type:String,
    default:"Titile ?"
  },
  about:{
    type:String,
    default:"About You ?"
  },
  email:{
    type:String,
    default:"your email ?" 
  },
  phone:{
    type:String,
    default:"Phone number ?"
    
  },
  englishLevel:{
    type:String,
    default:"what's your english level"
  },
  workLink:{
    type:[],
    default:"works links ?"
  },
  availability:{
    type:String,
    default:"what's your availability ?"
  },
  Bio:{
    type:String,
    default:"Your Bio ?"
  },
  skills:{
    type:[],
    default:"what's your Skills ?"
  },
  experience:{
    type:[],
    default:"enter your Experience..."
  },
  certifications:{
    type:[],
    default:"certifications ?"
  },
  university:{
    type:String,
    default:"what's your university ?"
  },
  faculty:{
    type:String,
    default:"what's your faculty ?"
  },
  graduationYear:{
    type:String,
    default:"graduationYear ?"
  },
 image:{
  type:String,
  default:"uploads\default.jpg"
}

});

const sprofile = mongoose.model('sprofile', sprofileSchema);

module.exports = sprofile;
