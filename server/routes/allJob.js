const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  

const multer=require('multer');

const storage=multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads');

  },
  
  filename: function(req,file,cb){
    //cb(null,new Date().toISOString()+file.originalname);
    cb(null, Date.now() + file.originalname); 
  }

});

const fileFilter=(req,file,cb)=>{
  //accept file
  if (file.mimetype==='image/jpeg'|| file.mimetype==='image/png' || file.mimetype==='image/jpg')
  {
    cb(null,true);
  }
   //reject file
  else{
    cb(null,false);
  }
};

const upload=multer({
   storage:storage,
   limits:{fieldSize: 1024*1024*5},
   fileFilter:fileFilter
 

});

//  Model 
const allJob=require('../models/allJob');

/*
router.post("/add",upload.single('jobImage'),(req,res,next)=>{
    
    const newJob = new allJob({
        name:req.body.name,
        dec:req.body.desc,
        jobImage:req.file.path
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


router.get("/",(req,res,next)=>{
    
  allJob.find()
  .select("name desc jobImage")
  .exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });


});
*/


// create new job
router.post("/add/:companyID",(req,res,next)=>{
    
  const newJob = new allJob({
    companyID:req.params.companyID,
    title:req.body.title,
    salary:req.body.salary,
    location:req.body.location,
    type:req.body.type,
    languages:req.body.languages,
    exper:req.body.exper,
    qual:req.body.qual,
    desc:req.body.desc
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


// get all jobs
router.get("/",(req,res,next)=>{
    
  allJob.find()
  .exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });


});


// get job details
router.get("/details/:_id",(req,res,next)=>{
    
  allJob.find({_id:req.params._id})
  .exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});


// delete job (post)

router.delete("/delete/:_id",(req,res,next)=>{
    
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


  });



  
// get all jobs
router.get("/companyjobs/:ID",(req,res,next)=>{
    
  allJob.find({companyID:req.params.ID})
  .exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });


});



module.exports = router;