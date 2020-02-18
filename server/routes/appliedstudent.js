const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const AppliedStudent=require('../models/appliedstudent');
const User = require('../models/user');


router.post("/apply/:studentID/:jobID",(req,res,next)=>{

 AppliedStudent.find({ jobID:req.params.jobID, studentID:req.params.studentID })
  .exec()
  .then(student => {
    if (student.length >= 1) {
      return res.status(409).json({
        message: 'user already aplied'
      });
    } else {
      const newApply = new AppliedStudent({
        studentID:req.params.studentID,
        jobID:req.params.jobID
       
        });
        newApply.save()
        .then(doc=>{
          res.status(200).json({
            message:"Applied"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
      
        });
    }

  });

});




module.exports = router;