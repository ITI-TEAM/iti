const mongoose = require('mongoose');

const sprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
    default:""
  }
  ,
  age:{
    type:String,
    default:""
  },
  title:{
    type:String,
    default:""
  },
  about:{
    type:String,
    default:""
  },
  email:{
    type:String,
    default:"" 
  },
  phone:{
    type:Number,
    
  },
  englishLevel:{
    type:String,
    default:""
  },
  workLink:{
    type:[],
    default:""
  },
  availability:{
    type:String,
    default:""
  },
  Bio:{
    type:String,
    default:""
  },
  skills:{
    type:[],
    default:""
  },
  experience:{
    type:[],
    default:"enter your Experience..."
  },
  certifications:{
    type:[],
    default:""
  },
  university:{
    type:String,
    default:""
  },
  faculty:{
    type:String,
    default:""
  },
  grade:{
    type:String,
    default:""
  },
  graduationYear:{
    type:Number,
  },
  hourRate:{
    type:Number
  },
  StudentImage:{ type: String, required: false }

});

const sprofile = mongoose.model('sprofile', sprofileSchema);

module.exports = sprofile;
