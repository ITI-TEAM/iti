const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// user Model 
const user = require('../models/user');

router.get('/',(req,res,next)=>{

   

    res.status(200).json({
        message : 'Hi from NodeJs'
    });
        res.end();

});

module.exports = router;