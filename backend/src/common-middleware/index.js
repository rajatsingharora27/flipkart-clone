module.exports.requireSignin =(res,req,next)=>{

    // console.log(res.headers.authorization)
    // const decode=jwr.verify()
    const token=res.headers.authorization.split(" ")[1];
    const user=jwt.verify(token,process.env.SECRET_KEY);
    console.log(user);
    req.user=user;

    next();

}