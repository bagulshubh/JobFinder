const mongoose = require('mongoose');
require("dotenv").config();

exports.connect =()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(()=>{
        console.log("DB connected successfully");
    })
    .catch((e)=>{
        console.log("Error occured in DB connection",e);
        process.exit(1);
    })

};







