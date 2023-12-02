const Count =  require("../modules/Count");

exports.createCount = async(req,res)=>{

    try{
        await Count.create({
            companies:0,
            jobs:0,
            accepted:0,
            candidates:0,
            hires:0,
        })
        return res.status(200).json({
            success:"True",
            message:"First and Final time"
        })
    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
            location:"CreateCount"
        })
    }
}

exports.getCount = async(req,res)=>{

    try{

        const allCount = Count.find({});

        return  res.status(200).json({
            success:"true",
            messsage:"Count is fetched successfully",
            body:allCount,
        })

    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
            location:"GetCount Controller"
        })
    }

}

exports.countJobs = async(req,res)=>{

    try{

        const updatedCount = await Count.findById({_id:process.env.MASTER_COUNT});

        updatedCount.jobs +=1;

        const update = await updatedCount.save();

        return res.status(200).json({
            success:"true",
            message:"Job Incremented",
            body:update,
        })

    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
            location:"CountJobs Controller"
        })
    }

}