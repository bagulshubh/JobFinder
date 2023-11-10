const  mongoose = require("mongoose");

const  subchatSchema = new mongoose.Schema({

    chat:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    }

})


module.exports = mongoose.model("SubChat",subchatSchema);


