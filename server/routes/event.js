const express= require('express')
const router = express.Router()
const multer = require('multer')
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
     

//Model
const Event = require('../models/event');

//Add Event
router.post("/addevent",upload.single('imge'), function (req, resp,next) {
    
    var new_event = new Event()
    new_event.title = req.body.title
    new_event.date = req.body.date
    new_event.details = req.body.details
    new_event.imge = req.file.path
    new_event.save(function (err,data) {
        if (!err){
            console.log(req.body);
             resp.json(data);
          
         }else{
             console.log(err);
             resp.json(err)
         }
    })
    
})

// List Events
router.get('/listevent',function(req,resp){
    Event.find(function(err,data){
        console.log(data)
        resp.send(data);
    })
})

//Delete Event
router.get('/deleteevent/:_id',function(req,resp){
    Event.deleteOne({_id:req.params.id},function(err,data){
        if(!err){
            console.log(req.params.id)
            resp.json(data)
        }else{
            console.log(err)
            resp.json(err)
        }

    })
})

module.exports = router;