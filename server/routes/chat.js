const express = require('express')
const router = express.Router()


//  Models 
const Chat = require('../models/chat');


/*
// get spesifice chat messges by chatID
router.get('/msg/:chatID',(req,res,nex)=>{
    Chat.find({chatID:req.params.chatID})
    .exec()
    .then(result => {
        console.log(result);
        return res.status(200).json({result})
      })
      .catch(err => {
        console.log(err);
        res.status(501).json({
          error: err
        });
      });
})
*/


// get all messge by studentID

router.get('/studentMSG/:studentID',(req,res,nex)=>{
    Chat.find({studentID:req.params.studentID})
    .exec()
    .then(result => {
        console.log(result);
        return res.status(200).json({result})
      })
      .catch(err => {
        console.log(err);
        res.status(501).json({
          error: err
        });
      });
})


// get all messge by companyID

router.get('/companyMSG/:companyID',(req,res,nex)=>{
    Chat.find({companyID:req.params.companyID})
    .exec()
    .then(result => {
        console.log(result);
        return res.status(200).json({result})
      })
      .catch(err => {
        console.log(err);
        res.status(501).json({
          error: err
        });
      });
})


// chat message  
router.get('/chatMSG/:companyID/:studentID',(req,res,next)=>{

  chatID=req.params.companyID+req.params.studentID;
    Chat.find({chatID:chatID})
      .exec()
      .then(result => {
        console.log(result.length);
        
        console.log(result);
        return res.status(200).json({result})
      })
      .catch(err => {
        console.log(err);
        res.status(501).json({
          error: err
        });
      });
});









// new message
router.post('/newMSG/:companyID/:studentID',(req,res,next)=>{

    var newChat = new Chat({
        companyID:req.params.companyID,
        studentID:req.params.studentID,
        chatID:req.params.companyID+req.params.studentID,
        msg:req.body.msg
        });
       
        newChat.save()
        .then(result => {
          console.log(result);
          return res.status(200).json({result})
        })
        .catch(err => {
          console.log(err);
          res.status(501).json({
            error: err
          });
        });
});



module.exports = router;
