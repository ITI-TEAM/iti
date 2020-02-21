const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  Models 
const User = require('../models/user');
const Sprofile = require('../models/sprofile');
const Cprofile = require('../models/cprofile');


// REGISTER NEW USER
router.post("/signup", (req, res, next) => {

  User.find({
      email: req.body.email
    })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'email already exist'
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              email: req.body.email,
              password: hash,
              type: req.body.type
            });
            user.save()
              .then(result => {
                console.log(result);
                return res.status(201).json({
                  message: "user created"
                })
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });

              });
            if (req.body.type == 'student') {
              const sprofile = new Sprofile({
                ID: user._id
              });
              sprofile.save();
            }
            if (req.body.type == 'company') {
              const cprofile = new Cprofile({
                ID: user._id
              });
              cprofile.save();
            }

          }
        });

      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });

    });
});




//LOGIN USER

router.post("/login", (req, res, next) => {
  User.find({
      email: req.body.email
    })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }

        if (result) {
          const token = jwt.sign({
              email: user[0].email,
              userID: user[0]._id
            },
            'secret', {
              expiresIn: '1h'
            }
          )
          return res.status(200).json({
            message: "Auth succesful",
            token: token,
            type: user[0].type,
            userID:user[0]._id
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });


      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });

    });

});




//LIST USER TYPE STUDENT
router.get('/listStusent',(erq,resp,next)=>{

})






//DELETE USER

router.delete("/delete", (req, res, next) => {
  User.remove({
      _id: req.body.userID
    })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "user deleted"
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

    if (req.body.type == 'student')
       {
        Sprofile.remove({ID: req.body.userID})
        .exec()
        .then()
        .catch();
      }
      if (req.body.type == 'comapny')
       {
        Cprofile.remove({ID: req.body.userID})
        .exec()
        .then()
        .catch();
      }


});





module.exports = router;
