const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const allJob = require('../models/allJob');
const SavedJob=require('../models/savedJob');

//insert saved job

router.post("/save", (req, res, next) => {
 
  allJob.findById(req.body.jobId)
    .then(job => {
      if (!job) {
        return res.status(404).json({
          message: "job not found"
        });
      }
      const savedJob = new SavedJob({
        _id: mongoose.Types.ObjectId(),
        time: req.body.time,
        jobs: req.body.jobId,
        type: req.body.type
      });
      return savedJob.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json(result
      //   {
      //   // message: "Job saved",
      //   // createdJob: {
      //   //   _id: result._id,
      //   //   time: result.time,
      //   //   jobs: result.jobs,
      //   //   type: result.type
      //   // }
      // }
      );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});







//get all saved jobs
router.get("/list/:jobId", (req, res, next) => {
    SavedJob.findById(req.params.jobId)
      .populate('jobs')
      .exec()
      .then(job => {
        if (!job) {
          return res.status(404).json({
            message: "job not found"
          });
        }
        res.status(200).json({
            job: job
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });










module.exports = router;