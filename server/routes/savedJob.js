const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const allJob = require('../models/allJob');
const SavedJob = require('../models/savedJob');


router.post("/save/:jobID/:studentID", (req, res, next)=>{
  allJob.find({jobID:req.params.jobID})
  .populate('jobID')
  .exec()
  .then(job => {
    if (job.length >= 1) {
      return res.status(409).json({
        message: 'job already saved'
      });
    }if (!job) {
      return res.status(404).json({
        message: "job not found"
      });
    }
    else{
      const newSaved=new SavedJob({
        jobID:req.params.jobID,
        studentID:req.params.studentID
    });
    newSaved.save()
    .then(result => {
      console.log(result);
      return res.status(200).json({result})
    })
    .catch(err => {
      console.log(err);
      res.status(501).json({
        error: err
      });
    });
    }
 
});
});


router.get("/list/:studentID", (req, res, next)=>{

  SavedJob.find({studentID:req.params.studentID})
  .exec()
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  
    });

});



module.exports = router;
