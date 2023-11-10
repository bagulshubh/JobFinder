const Chat = require("../modules/Chat");
const SubChat = require("../modules/SubChat");
const User = require("../modules/User");

exports.sendMessage  = async(req,res)=>{

    try{

        const {senderId,chatId,body} = req.body;

        if(!chatId ||  !body){
            return res.status(402).json({
                success:"False",
                message:"All Fileds Required"
            })
        }

        //create a subchat
        const chatDetails = await SubChat.create({
            chat:body,
            date:Date.now(),
            sender:senderId,
        });

        //find perticular chat first
        const chat = await Chat.findByIdAndUpdate(chatId,{
            $push:{
                subChat:chatDetails._id,
            }
        });

        return res.status(200).json({
            success:"True",
            message:"Chat created Successfully",
            chat,
        })

    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
            location:"sendMessage Controller"
        })
    }


}

exports.createChat = async(req,res)=>{

    try{

        const {senderId,reciverId} = req.body;
        
        if(!senderId || !reciverId){
            return res.status(402).json({
                success:"False",
                message:"All Filds are required"
            })
        }

        //create first message
        const subchatDetails = await SubChat.create({
            chat:"Congratulations you are Accepted.",
            date:Date.now(),
            sender:senderId,
        })

        const sender = await User.findById(senderId);
        const reciver = await User.findById(reciverId);

        //create chat
        const chatDetails = await Chat.create({
            sender:sender.fname,
            reciver:reciver.fname,
            subChat:[],
        })

        await Chat.findByIdAndUpdate(chatDetails._id,{
            $push:{
                subChat:subchatDetails._id,
            }
        },{new:true})


        //find both sender and reciver
        await User.findByIdAndUpdate(senderId,{
            $push:{
                messages:chatDetails._id,
            }
        },{new:true})        

        await User.findByIdAndUpdate(reciverId,{
            $push:{
                messages:chatDetails._id,
            }
        },{new:true})  

        return res.status(200).json({
            success:"True",
            message:"Chat Initialised Successfully",
            chatDetails,
        })

    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
            location:"createChat controller"
        })
    }

}

