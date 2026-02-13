const jwt = require("jsonwebtoken");

exports.authMiddleware = (req,res,next) =>{
    const token = req.cookies.token;
    console.log(token)
    if(!token){
        return res.status(401).json({message : "Unauthorized access"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message : "Invalid token"});
        }
        req.user = decoded
        console.log(req?.user);
        next();
    } catch(error){
        return res.status(401).json({message : "Authentication failed"});
    }
}