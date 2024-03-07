const mongoose = require("mongoose");


const notificationSchema = new mongoose.Schema({

    from:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    to:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    body:{
        type:String,
        req:true
    },
    readStatus:{
        type:Boolean,
        default:false
    },
    timeStamp:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model("Notification",notificationSchema)