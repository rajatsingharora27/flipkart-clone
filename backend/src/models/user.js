const mongoose=require('mongoose');
var validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema =new mongoose.Schema({

    first_name:{
        type:String,
        required:true,
        trim:true,
        min:1,
        max:30
    },
    last_name:{
        type:String,
        required:true,
        trim:true,
        min:1,
        max:30
    },
    username:{
        type:String,
        required:true,
        trim:true,
        min:1,
        max:30,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please Enter the email correctly");
            }
        },
        required:true,
        unique:true,
    },

    hash_password:{
        required:true,
        type:String,
        validate(value){
            if(validator.isStrongPassword(value)){
                // alert("Password is weak")
                message:"Password is weak";
            }
        }
    },

    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    constact_number:{
        type:String,
        trim:true,
    },
    profile_picture:{
        type:String,
    },

}, { timestamps: true });



userSchema.virtual('password')
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10);
})

userSchema.methods ={
    authenticate : function(password){
        return bcrypt.compareSync(password, this.hash_password);
    }
}



module.exports=mongoose.model('User',userSchema);