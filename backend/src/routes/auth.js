const express = require('express');
const { requireSignin } = require('../common-middleware');
const { signup, signin, } = require('../controller/auth');
const { isSignupValidated, isRequestValidated, isSigninValidated } = require('../validator/auth');

const router = express.Router();



router.post('/signin',isSigninValidated,isRequestValidated,signin);
router.post('/signup',isSignupValidated,isRequestValidated,signup);


router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({
        user: "profile"
    });
})






module.exports = router;