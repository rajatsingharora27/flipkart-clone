const { check, validationResult } = require('express-validator');

exports.isSignupValidated=[check('first_name')
.notEmpty()
.withMessage("First name cannot be empty"),

check('last_name')
.notEmpty()
.withMessage("Last name cannot be empty"),

check('email')
.notEmpty()
.withMessage("Email field cannot be empty")
.isEmail()
.withMessage("Not valid Email"),

check('password')
.notEmpty()
.withMessage("Password field cannot be empty")
.isLength({min:5})
.withMessage("Password lenght cannot be less the 5 characters") 
];


exports.isSigninValidated=[
    
check('email')
.notEmpty()
.withMessage("Email field cannot be empty")
.isEmail()
.withMessage("Not valid Email"),

check('password')
.notEmpty()
.withMessage("Password field cannot be empty")
.isLength({min:5})
.withMessage("Password lenght cannot be less the 5 characters") 
];



exports.isRequestValidated=(req,res,next)=>{
    const error= validationResult(req);
    if(error){
        if(error.array().length>0){
            return(res.status(400).json({
                error:error.array()[0].msg
            }))
        }
    }
    next();
}


// const error =validationResult(req);
// return res.status(404).json({
//     error:error.array()
// })
