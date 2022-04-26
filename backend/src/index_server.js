//__________IMPORT_FILES______
const express=require('express');
const env=require('dotenv');
const bodyParser=require('body-parser');
const mongoose = require("mongoose");
const app=express();

//Middleware
app.use(bodyParser.json());



//importing the routers
const authRouter= require('./routes/auth')
const adminRouter=require('./routes/admin/auth');


// ____________________________________________



// ___________________CONNECTING TO THE DATABASE_______________

//tell where the local database is stored and it returns a promise
//connection creation
//database is present then it will use it
//else make new database ex:my-database
// mongodb+srv://rajat:<password>@cluster0.ka4r5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb://localhost:27017/root

mongoose
  .connect("mongodb://localhost:27017/root",{
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true,
    // useFindAndModify: false,

  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log("NOT ESTABLISHED");
  });












//_____________ROUTING________________

//why doing app.use()? -> beacuse we are saying that all the GET,POST
//Request are being handled you just USE this path this 

app.use('/api',authRouter);
app.use('/api',adminRouter);








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


