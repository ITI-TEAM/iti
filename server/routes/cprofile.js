const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




//  Model 
const User = require('../models/user');
const Cprofile=require('../models/cprofile');

// const multer=require('multer');

const storage=multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads');

  },
  
  filename: function(req,file,cb){
    cb(null,new Date().toISOString()+file.originalname);
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



router.get("/:userID",(req,res,next)=>{

    Cprofile.findOne({ID:req.params.userID})
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

router.post('/edit/:userID',function(req,res,next){
    var item={
        name:req.body.name,
        telephonenumber:req.body.telephonenumber,
        careerobjrctive:req.body.careerobjrctive,
        content:req.body.content,
        email:req.body.email,
        address:req.body.address,
        datecreated:req.body.datecreated,
        field:req.body.field,
        description:req.body.description
    }
    Cprofile.findOneAndUpdate({ID:req.params.userID}, {$set:item}, {new: true})
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