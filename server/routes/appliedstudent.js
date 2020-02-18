const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const Sprofile=require('../models/sprofile');

const Alljobs=require('../models/allJob');






router.delete("/apply/:studentID",(req,res,next)=>{
    /*
    
    allJob.deleteOne({_id:req.params._id})
    .exec()
    .then(doc=>{
      res.status(200).json({
        message:"job Deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  
    });
  */
  
});




module.exports = router;