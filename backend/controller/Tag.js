const  Tag  =  require('../modules/Tag');

exports.createTag = async(req,res)=>{

    try{
        const  {tag} = req.body;

        if(!tag){
            return res.status(402).json({
                success:"false",
                message:"All fields are required",
            })
        }

        const alreadyTag = await Tag.findOne({name:tag});
        if(alreadyTag){
            return res.status(403).json({
                success:"true",
                message:"Tag already exits no need to  create again",
            })
        }

        const  entry = await Tag.create({name:tag});
        console.log(entry);
        return  res.status(200).json({
            success:"True",
            message:"Tag created succesfully",
        })
    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
        })
    }

}

exports.getAllTags = async(req,res)=>{
    try{

        const allTags  = await Tag.find({});

        return res.status(200).json({
            success:true,
            message:"All tags fetched",
            body:allTags
        })

    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message
        })
    }
}

exports.deleteTag = async(req,res)=>{
    try{

        const tag = req.tag;
        if(!tag){
            return res.status(402).json({
                success:"false",
                message:"All fields are required",
            })
        }

        await  Tag.findOneAndDelete({name:tag});

        return res.status(200).json({
            success:"True",
            message:"Tag is Deleted successfully"
        })

    }catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
        })
    }
}







