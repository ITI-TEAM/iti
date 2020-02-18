const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const User = require('../models/user');
const Sprofile=require('../models/sprofile');



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

//edit data  
router.put('/edit/:userID',function(req,res,next){
    var item = {
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        skills:req.body.skills,
        experience:req.body.experience,
        certifications:req.body.certifications,
        university:req.body.university,
        faculty:req.body.faculty,
        grade:req.body.grade,
        graduationYear:req.body.graduationYear,
        hourRate:req.body.hourRate,

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