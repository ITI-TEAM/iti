const mongoose = require('mongoose');

const cprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
    default:"test-comapny"
  },
  address:{
    type:String,
    default:"cairo"
  }
});

const cprofile = mongoose.model('cprofile', cprofileSchema);

module.exports = cprofile;
