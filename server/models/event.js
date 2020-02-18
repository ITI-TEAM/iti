const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

  title: {
    type: String,
    
  },
  date: {
    type: Date,
    
  },
  imge: {
    type: String,
    
  },
  details: {
    type: String,
    
   
  }, 
  
  
});

const event = mongoose.model('event', eventSchema);

module.exports = event;
