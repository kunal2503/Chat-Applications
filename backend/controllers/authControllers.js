const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncWrapper = require("../utils/asyncWrapper");

//Register User 
const registerUser = asyncWrapper( async (req,res)=>{
    
})

// Login User
const loginUser = asyncWrapper( async (req,res)=>{

})

module.exports = {registerUser,loginUser};