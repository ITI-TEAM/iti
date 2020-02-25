const express=require('express');
const app= express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const http = require('http');
const socketIO = require('socket.io');


//models
const User = require('./models/user');
const allJob=require('./models/allJob');
const AppliedStudent=require('./models/appliedstudent');
const Sprofile = require('./models/sprofile');
const Cprofile = require('./models/cprofile');


//MIDELWARES FOR ROUTES
const userRoutes=require('./routes/user');
const sprofileRoutes=require('./routes/sprofile');
const cprofileRoutes=require('./routes/cprofile');
const allJobRoutes=require('./routes/allJob');
const eventRoutes=require('./routes/event');
const appliedstudentRoutes=require('./routes/appliedstudent');

//BODY-PARSER 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB connection
mongoose.connect('mongodb+srv://iti-team:iti@2020@cluster0-dtn8c.mongodb.net/ITI_DB?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=> console.log("-------------------------"))
.then(()=>console.log("Database Connected"));


// ALLOW CORS ORIGIN

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

//file for images
    app.use(express.static(__dirname));
   app.use('/uploads',express.static('uploads'));

  // ROUTES
  app.use('/users',userRoutes);
  app.use('/sprofile',sprofileRoutes);
  app.use('/cprofile',cprofileRoutes);
  app.use('/allJob',allJobRoutes);
  app.use('/event',eventRoutes);
  app.use('/appliedstudent',appliedstudentRoutes);




  //error handlling
app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
});
app.use((error,req,res,next)=>{
    
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});



const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', (socket) => {
    console.log('new connection made');


    /*    User.find({},(err,data)=>{
            if(!err)
            {
                io.emit("allUsers",data);
            }
            else{
                console.log(error);
                
            }
    
        });*/
    

  });





server.listen(3000, () => {
    console.log(`SERVR RUN ON PORT : 3000`);
});