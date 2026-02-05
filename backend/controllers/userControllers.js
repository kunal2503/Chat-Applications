const User = require("../model/user");



exports.getUserInfo = async(req,res)=>{
    try{
        console.log(req.cookies);
        console.log(req.cookies.token);

        res.status(200).json({message : "cookies readed"})
    }  catch(error){
        return res.status(500).json({message : "Internal server error"});
    }
}