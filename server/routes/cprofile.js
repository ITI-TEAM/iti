const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongo =require ('mongodb').MongoClient;
const objectId =require ('mongodb').ObjectID;



//  Model 
const User = require('../models/user');
const Cprofile=require('../models/cprofile');


// list all
router.get("/list",(req,res,next)=>{
    Cprofile.find()
    .exec()
    .then
    (data => {
      console.log(data)
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
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

router.put('/edit/:userID',function(req,res,next){
    var item={
        name:req.body.name,
        telephonenumber:req.body.telephonenumber,
        careerobjrctive:req.bady.careerobjrctive,
        content:req.body.content,
        email:req.bady.email,
        address:req.bady.address,
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
});






module.exports = router;