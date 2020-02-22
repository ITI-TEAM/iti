const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const User = require('../models/user');
const Sprofile=require('../models/sprofile');

//multer
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




//get data from one student
router.get("/:userID",(req,res,next)=>{

    Sprofile.find({ID:req.params.userID})
            .then(data=>{
                res.status(200).json(data);
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json({
                    error:err
                });
                
            });
});


// update data 
router.post('/edit/:userID',function(req,res,next){
    var item = {
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        englishLevel:req.body.englishLevel,
        workLink:req.body.workLink,
        availability:req.body.availability,
        Bio:req.body.Bio,
        skills:req.body.skills,
        experience:req.body.experience,
        certifications:req.body.certifications,
        university:req.body.university,
        faculty:req.body.faculty,
        grade:req.body.grade,
        graduationYear:req.body.graduationYear,
        title:req.body.title,
        about:req.body.about
       // StudentImage:req.file.path
    }
    Sprofile.findOneAndUpdate({ID:req.params.userID},{$set:item},{new:true})
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        
    });

})







module.exports = router;