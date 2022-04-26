const User = require('../models/user');
var jwt = require('jsonwebtoken');


module.exports.signin = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({
                    message: "Not a Valid user",
                });
            }
            if (user) {
                //user.autheticate is coming from the models
                // where we have used the hash password 
                // and then comparing the hashed password stored in database with the entered password
                if (user.authenticate(req.body.password)) {
                    // make jwt token for the user so that can be userd for the endtire session
                    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' });
                    const {_id, first_name, last_name, email, fullname,role } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id,
                            first_name,
                            last_name,
                            email,
                            fullname,
                            role
                        }
                    });

                }else{
                    return res.status(400).json({
                        message: "Wrong Password"
                    });
                }

            }
            else {
                return res.status(400).json({
                    message: "Something went wrong"
                });
            }
        })





}

module.exports.signup = (req, res) => {
    //finding if user already exist
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (user) {
                return res.status(400).json({
                    message: `User already exist`,
                });
            }

            // const { 
            //     first_name,
            //     last_name,
            //     email,
            //     password}=req.body;

            const _user = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                username: Math.random().toString(),
                password: req.body.password
            });

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: "Something went wrong"
                    })
                }

                if (data) {
                    return res.status(201).json({
                        message: `${data.email} created successfully`
                    })
                }

            });

        });
}





// 