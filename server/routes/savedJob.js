const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const allJob = require('../models/allJob');
const SavedJob=require('../models/savedJob');


// Handle incoming GET requests to /orders
// router.get("/", (req, res, next) => {
//   SavedJob.find()
//     .select("time jobs type _id")
//     .populate('jobs', 'companyID')
//     .exec()
//     .then(docs => {
//       res.status(200).json(docs);
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// });






//insert saved job

router.post("/save", (req, res, next) => {
 
  allJob.findById(req.body._id)
    .then(job => {
      if (!job) {
        return res.status(404).json({
          message: "job not found"
        });
      }
      const savedJob = new SavedJob({
        _id: mongoose.Types.ObjectId(),
        time: req.body.time,
        jobs: req.body._id,
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
        res.status(200).json(job);
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });










module.exports = router;