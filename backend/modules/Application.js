const  mongoose = require("mongoose");

const  applicationSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    tags:[{
      type:mongoose.Schema.Types.ObjectId,  
      ref:"Tag",
    }],
    jobDescription:{
        type:String,
    },
    salary:{
        type:String,
        required:true,
    },
    conditions:{
        type:String,
    },
    candidates:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    status:{
        type:String,
        enum:["Open"  , "Close"],
    },
    employer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    exp:{
        type:String,
        required:true,
    },
    catagory:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    }


})


module.exports = mongoose.model("Application",applicationSchema);





