const jwt= require('jsonwebtoken');
// const user= require('../models/user');

module.exports.requireSignin = (req, res, next) => {

    // console.log(res.headers.authorization)
    // const decode=jwr.verify()
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        next();
        
    }
    else{
        return res.status(400).json({message:'Authorization required'});
    }
    

    
}


exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(400).json({ message: "Admin access denied" });
    }
    next();
  };


// {
//   "email":"rajatsingharora27@gmail.com",
//   "password":"Rajatsingh13#"
// }