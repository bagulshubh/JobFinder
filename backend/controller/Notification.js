const Notification = require("../modules/Notification");

exports.createNotification =async(req,res)=>{

    try{

        const {from,to,body} = req.body;

        if(!from || !to || !body){
            return res.status(404).json({
                success:"False",
                message:"All Fileds  are required"
            })
        }

        const notification  = await Notification.create({
            from:from,
            to:to,
            body:body
        })

        return res.status(201).json({
            success:"True",
            message:"Notification Created",
            body:notification
        })

    } catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message
        })
    }

}







