const  mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    fname:{
        type:String,
        required:true,
        trim:true,
    },
    lname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        Enum:["Seeker" , "Employer"],
        required:true,
    },
    additionalInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    tags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",
    }],
    applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Application",
    }],
    saved:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Application",
    }],
    token:{
        type:String,
    },
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    }],
    image:{
        type:String,
    }
    
})


module.exports = mongoose.model("User",userSchema);