 const express=require('express');
const app= express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

//MIDELWARES FOR ROUTES
const userRoutes=require('./routes/user');
const sprofileRoutes=require('./routes/sprofile');
const cprofileRoutes=require('./routes/cprofile');
const eventRoutes=require('./routes/event');



//BODY-PARSER 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB connection
mongoose.connect('mongodb+srv://iti-team:iti@2020@cluster0-dtn8c.mongodb.net/ITI_DB?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=> console.log("-------------------------"))
.then(()=>console.log("Database Connected"));


// ALLOW CORS ORIGIN

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

  // ROUTES
  app.use('/users',userRoutes);
  app.use('/sprofile',sprofileRoutes);
  app.use('/cprofile',cprofileRoutes);
  app.use('/event',eventRoutes);

  app.use(express.static(__dirname));
  app.use('/uploads',express.static('uploads'));


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


app.listen(3000,()=>{
    console.log("SERVER RUN ON PORT : 3000");
});