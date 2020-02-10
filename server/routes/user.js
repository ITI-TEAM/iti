const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// user Model 
const User = require('../models/user');

// REGISTER NEW USER
router.post("/signup",(req,res,next)=>{

    User.find({email:req.body.email})
        .exec()
        .then(user=>{
            if(user.length >= 1){
                return res.status(409).json({
                    message:'email already exist'
                });
            }
            else{
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err){
                        return res.status(500).json({
                            error:err
                        });
                    } 
                    else{
                        const user=new User({
                            email:req.body.email,
                            password:hash,
                            type:req.body.type
                        });
                        user.save()
                        .then(result=>{
                            console.log(result);
                            return res.status(201).json({
                                message:"user created"
                            })
                        })
                        .catch(err=>{
                            console.log(err);
                            res.status(500).json({
                                error:err
                            });
                            
                        });
                    }
                });

            }
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            });
            
        });
});




//LOGIN USER

router.post("/login",(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length < 1 ){
            return res.status(401).json({
                message:"Auth failed"
            });
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    message:"Auth failed"
                });
            }

            if(result){
             const token= jwt.sign({
                    email:user[0].email,
                    userID:user[0]._id
                },
                'secret',{expiresIn:'5h'}
                )
                return res.status(200).json({
                    message:"Auth succesful",
                    token:token,
                    type:user[0].type
                });
            }
            res.status(401).json({
                message:"Auth failed"
            });
                
            
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
        
    });

});




//DELETE USER

router.delete("/delete/:userID",(req,res,next)=>{
    User.remove({_id:req.params.userID})
            .exec()
            .then(result=>{
                res.status(200).json({
                    message:"user deleted"
                });
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json({
                    error:err
                });
                
            });
});
module.exports = router;