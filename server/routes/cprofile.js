const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Model 
const User = require('../models/user');
const Cprofile=require('../models/cprofile');



router.get("/:userID",(req,res,next)=>{

    Cprofile.find({ID:req.params.userID})
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