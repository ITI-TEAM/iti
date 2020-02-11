const mongoose = require('mongoose');

const sprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
    default:"test-student"
  },
  age:{
    type:String,
    default:"22"
  }
});

const sprofile = mongoose.model('sprofile', sprofileSchema);

module.exports = sprofile;
