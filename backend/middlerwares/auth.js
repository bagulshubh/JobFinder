//basically this middleware is used each time to  check the authentication of the user 

const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require('../modules/User');

//main authentication
exports.auth = async (req,res,next)=>{

    try{

        //extracting the token which we  placed in user  at  the  time of login
        const token= req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", ""); ;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is  missing",
            })
        }

        //verifying the  token
        try{

            const  decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user = decode;

        }
        catch(err){
            return res.status(401).json({
                success:false,
                message:"Tokine is  invalid"
            })
        }
        //this is used  to go to  next  middleware
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }

}

exports.isSeeker = async(req,res,next)=>{
    try{

        if(req.user.role!=="seeker"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for seeker only"
            })
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}


exports.isEmployeer= async(req,res,next)=>{
    try{

        if(req.user.role!=="Employeer"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for employeer only"
            })
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}




