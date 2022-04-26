const express=require('express');
const { signin } = require('../controller/auth');
const router=express.Router();


router.post('/signin',(req,res)=>{
    res.send('from routes');
});

router.post('/signup',signin);






module.exports=router;