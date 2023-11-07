const Application = require('../modules/Application');
const User = require('../modules/User')

exports.createApplication = async(req,res)=>{

    try{

        const {
            title,
            company,
            tags,
            jobDescription,
            salary,
            conditions,
            status,
            location,
            exp,
            catagory,
        } = req.body;

        if(!title || !company  || !jobDescription || ! salary || !conditions || !status  || !location || !exp || !catagory){
            return res.status(404).json({
                status:"False",
                message:"All Fields are required"
            })
        }

        const applicationDetails = await Application.create({
            title:title,
            company:company,
            tags:tags,
            jobDescription:jobDescription,
            salary:salary,
            conditions:conditions,
            status:status,
            location:location,
            exp:exp,
            catagory:catagory,
            employer:req.user.id,
            date:Date.now(),
        });

        console.log(applicationDetails);

        await User.findByIdAndUpdate(
            {
                _id:req.user.id
            },
            {
                $push:{
                    applications:applicationDetails._id,
                    
                }
            },
            {new:true}
        )

        return res.status(200).json({
            success:"True",
            message:"Listing Created Succssfully",
            applicationDetails,
        })


    }catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
        })
    }


}

exports.deleteApplication = async (req,res)=>{

    try{

        const applicationId = req.body;

        if(!applicationId){
            return res.status(404).json({
                success:"False",
                message:"All fileds are required"
            })
        }

        await Application.findByIdAndDelete({_id:applicationId});

        return  res.status(200).json({
            success:"True",
            message:"Listing Deleted successfully"
        })

    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
        })
    }

}

exports.apply = async(req,res) =>{

    try{

        const applicationId = req.body.applicationId;
        const userId = req.user.id;

        if(!applicationId || !userId){
            return res.status(404).json({
                success:"False",
                message:"All fileds are required"
            })
        }


        await Application.findByIdAndUpdate({
            _id:applicationId,
        },
        {
            $push:{
                candidates:userId
            }
        }        
        )

        await User.findByIdAndUpdate(
            {_id:userId},
            {
                $push:{
                    applications:applicationId
                }
            },
            {new:true},
        )

        return res.status(200).json({
            success:"True",
            message:"Congrats Your application  sent successfully",
        })


    }catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
        })
    }

}

exports.save = async(req,res)=>{
    try{

        const applicationId = req.body.applicationId;
        const userId = req.body.id;

        await User.findByIdAndUpdate(
            {_id:userId},
            {
                $push:{
                    saved:applicationId,
                }
            },
            {new:true},
        )

        return res.status(200).json({
            success:"True",
            message:"Job Saved Successfully"
        })

    }
    catch(err){
        return res.status(500).json({
            success:'False',
            message:err.message,
        })
    }
}

exports.getAllApplications = async(req,res)=>{
    try{

        const applicatons = await Application.find({}).
        populate('employer')
        .exec();

        return res.status(200).json({
            success:"True",
            message:"Applications gatherd",
            body:applicatons,
        })

    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
        })
    }
}

exports.updateApp = async(req,res)=>{

    try{

        const {
            id = "",
            title = "",
            company = "",
            jobDescription = "",
            salary = "",
            conditions = "",
            status = "",
            location = "",
            exp = "",
            catagory= "",
        } = req.body;

        const response = await Application.findByIdAndUpdate(id,{
            title:title,
            company:company,
            jobDescription:jobDescription,
            salary:salary,
            conditions:conditions,
            status:status,
            location:location,
            exp:exp,
            catagory:catagory,
        })

        //await Application.save();

        return res.status(200).json({
            success:"True",
            message:"Application Updated Successfully",
            body:response,
        })



    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
        })
    }
}













