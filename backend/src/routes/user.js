const express=require('express');
const router=express.Router();
const User =require('../models/user')

router.post('/signin',(req,res)=>{
    res.send('from routes');
});

router.post('/signup',(req,res)=>{
    //finding if user already exist
    User.findOne({ email:req.body.email })
    .exec((err,user)=>{
        if(user){
            return res.status(400).json({
                message:`User already exist`,
            });
        }
        
        // const { 
        //     first_name,
        //     last_name,
        //     email,
        //     password}=req.body;

        const _user=new User({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            username:Math.random().toString(),
            password:req.body.password
        });

        _user.save((error,data)=>{
            if(error){
                return res.status(400).json({
                    message:"Something went wrong"
                })
            }

            if(data) {
                return res.status(201).json({
                    user:data
                })
            }

        });

    });  
});






module.exports=router;