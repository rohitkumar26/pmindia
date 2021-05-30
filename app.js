const express= require('express');
const app=express();
const path=require('path');


var cors = require('cors');
var morgan = require('morgan');
const helmet = require("helmet");

//use middleware
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(express.static('public'));


app.use('/api/pm',require('./route/pm.router'))



//enabling cors for get request
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})

app.use((req,res,next)=>{
    
    res.send("Didn't find anything go to route page / ")
   
})

module.exports=app;
