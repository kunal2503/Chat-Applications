const mongoose = require("mongoose");


const User = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        min : 3,
        max : 20,
    },
    email : {
        type : String,
        required : true,
        max : 50, 
        unique : true
    },
    password : {
        type :  String,
        required :  true,
        min : 6
    },
    profilePicture : {
        type : String,
        default : "",
    },
},{timestamps :  true});

const UserModel = mongoose.model("users",User);

module.exports = UserModel;