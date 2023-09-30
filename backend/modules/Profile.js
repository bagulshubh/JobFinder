const  mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({

    gender:{
        type:String,
        },
    dateOfBirth:{
        type:String,
    },
    mobileNo:{
        type:Number,
        
    },
    about:{
        type:String,
        trim:true,
    },
    companyName:{
        type:String,
        trime:true
    },
    collageName:{
        type:String,
        trime:true,
    },
    gYear:{
        type:String,
        trime:true,
    },
    percentage:{
        type:Number,
    },
    resume:{
        type:String,
    },

    //there  is  some  much more  we  can add  as going  forward  in  development 

})


module.exports = mongoose.model("Profile",profileSchema);