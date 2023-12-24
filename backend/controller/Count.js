const Count =  require("../modules/Count");

//this will practically never use
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

        const allCount = await Count.findById(process.env.MASTER_COUNT);

        if (!allCount) {
            return res.status(404).json({
                success: false,
                message: "Count document not found",
                location: "GetCount Controller"
            });
        }

        const countData = {
            jobs: allCount.jobs,
        };
        console.log(countData)
        console.log(allCount)
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


exports.decreaseJob = async(req,res)=>{

    try{

        const id = process.env.MASTER_COUNT;

        const count = await Count.findById(id);

        count.jobs -= 1;

        const update = await count.save();

        return res.status(200).json({
            success:"true",
            message:"Deleted Successfully",
            body:update
        })

    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
            location:"decreaseJob"
        })
    }

}

//todo: make  one for all fileds of count model

exports.countCandidate = async(req,res)=>{

    try{

        const id = process.env.MASTER_COUNT;

        const count = await Count.findById(id);

        count.candidates += 1;

        const update = await count.save();

        return res.status(200).json({
            success:"true",
            message:"Updated Successfully",
            body:update
        })
        
    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
            location:"countCandidate Controller"
        })
    }

}

exports.decreaseCandidate = async(req,res)=>{
    try{

        const id = process.env.MASTER_COUNT;

        const count = await Count.findById(id);

        count.candidates -= 1;

        const update = await count.save();

        return res.status(200).json({
            success:"true",
            message:"upated Successfully",
            body:update
        })

    }
    catch(err){
        return res.status(500).json({
            success:"false",
            mssage:err.message,
            location:"DecreaseCandidate controller"
        })
    }
}


exports.countAccepted = async(req,res)=>{

    try{

        const id = process.env.MASTER_COUNT;

        const count = await Count.findById(id);

        count.accepted += 1;

        const update = await count.save();

        return res.status(200).json({
            success:"true",
            message:"Updated Successfully",
            body:update
        })
        
    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
            location:"countaccepted Controller"
        })
    }

}


exports.countHired = async(req,res)=>{

    try{

        const id = process.env.MASTER_COUNT;

        const count = await Count.findById(id);

        count.hired += 1;

        const update = await count.save();

        return res.status(200).json({
            success:"true",
            message:"Updated Successfully",
            body:update
        })
        
    }
    catch(err){
        return res.status(500).json({
            success:"false",
            message:err.message,
            location:"countHired Controller"
        })
    }

}

exports.decreaseHired = async(req,res)=>{
    try{

        const id = process.env.MASTER_COUNT;

        const count = await Count.findById(id);

        count.hired -= 1;

        const update = await count.save();

        return res.status(200).json({
            success:"true",
            message:"upated Successfully",
            body:update
        })

    }
    catch(err){
        return res.status(500).json({
            success:"false",
            mssage:err.message,
            location:"DecreaseHired controller"
        })
    }
}
