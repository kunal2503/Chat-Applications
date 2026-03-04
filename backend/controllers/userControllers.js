const User = require("../model/user");



exports.getUserInfo = async(req,res)=>{
    try{
        console.log(req.cookies);
        console.log(req.cookies.token);

        res.status(200).json({message : "cookies readed"})
    }  catch(error){
        res.status(500).json({message : "Internal server error"});
    }
}

exports.getContactDetails = async(req,res) =>{
    try{
        const userId =  req.user.id ;
        const userExists = await User.findById(userId);
        if(!userExists){
            return res.status(404).json({message : "User Not Found"});
        }
        
        //Temporary return all the user Data 
        const contactList = await User.find({});
        res.status(201).json({contactList});
    } catch(error){
        res.status(500).json({message : "Internal server error"});
    }
}