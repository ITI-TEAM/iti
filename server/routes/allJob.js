const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  

const multer=require('multer');

const storage=multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads/')

  },
  
  filename: function(req,file,cb){
    cb(null,new Date().toISOString()+file.originalname);
  }

});


const upload=multer({storage:storage});

//  Model 
const allJob=require('../models/allJob');





router.post("/add",upload.single('jobImage'),(req,res,next)=>{
    console.log(req.file);
    
    const newJob = new allJob({
        name:req.body.name,
        dec:req.body.desc
      });
      newJob.save()
      .then(result => {
        console.log(result);
        return res.status(201).json({
          message: "Job created"
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });

      });

});

module.exports = router;