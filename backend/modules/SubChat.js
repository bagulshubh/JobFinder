const  mongoose = require("mongoose");

const  subchatSchema = new mongoose.Schema({

    chat:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
    }

})


module.exports = mongoose.model("SubChat",subchatSchema);


