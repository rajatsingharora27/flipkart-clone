const express=require('express');
const { signup, signin } = require('../../controller/admin/auth');
const { isSignupValidated, isRequestValidated, isSigninValidated } = require('../../validator/auth');
const router=express.Router();


router.post('/admin/signin',isSigninValidated,isRequestValidated, signin);
router.post('/admin/signup',isSignupValidated,isRequestValidated,signup);

// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({
//         user:"profile"
//     });
// })






module.exports=router;