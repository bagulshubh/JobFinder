const  mongoose = require("mongoose");

const  countSchema = new mongoose.Schema({

    jobs:{
        type:Number,
    },
    accepted:{
        type:Number
    },
    candidates:{
        type:Number
    },
    companies:[{
        type:String
    }],
    hires:{
        type:Number,
    }

})


module.exports = mongoose.model("Count",countSchema);


