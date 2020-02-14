const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const User = require('../models/user');
const Sprofile=require('../models/sprofile');



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








module.exports = router;