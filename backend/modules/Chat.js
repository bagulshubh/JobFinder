const  mongoose = require("mongoose");

const  chatSchema = new mongoose.Schema({

    sender:{
        type:String,
    },
    reciver:{
        type:String,
    },
    subChat:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubChat",
    }]


})


module.exports = mongoose.model("Chat",chatSchema);


