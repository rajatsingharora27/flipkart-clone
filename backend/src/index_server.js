//__________IMPORT_FILES______
const express=require('express');
const env=require('dotenv');
const bodyParser=require('body-parser');
const mongoose = require("mongoose");
const app=express();
// ____________________________________________



// ___________________CONNECTING TO THE DATABASE_______________

//tell where the local database is stored and it returns a promise
//connection creation
//database is present then it will use it
//else make new database ex:my-database
mongoose
  .connect("mongodb://localhost:27017/root")
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log("NOT ESTABLISHED");
  });





//Middleware
app.use(bodyParser.json());




//_____________ROUTING________________
app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Hello from server",
    })
})

app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message:req.body,
    })
})





//environmant variable
env.config();
let port=process.env.PORT;

app.listen(port,(err)=>{
    if(err){
        console.log("error connecting to server");
    }
    else{
        console.log(`running on port ${port}`);
    }
})


