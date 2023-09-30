const  Profile  = require('../modules/Profile');
const  User = require('../modules/User');


//updating the  profile 
exports.updateProfile = async(req,res)=>{

    try{

        //get all req fileds
        const {
            gender="",
            dateOfBirth="",
            mobileNo="",
            about="",
            companyName="",
            collageName="",
            gYear="",
            percentage="",
        } = req.body;

        const id  = req.user.id;

        const userDetails = await  User.findById(id);

        const   profile = await  Profile.findById(userDetails.additionalInfo);

        profile.gender = gender;
        profile.dateOfBirth = dateOfBirth,
        profile.mobileNo = mobileNo;
        profile.about = about;
        profile.companyName = companyName;
        profile.collageName = collageName;
        profile.gYear = gYear;
        profile.percentage = percentage;

        //save the  updated  profile
        await profile.save();

        return res.json({
			success: true,
			message: "Profile updated successfully",
			profile,
		});

    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }


}


//TODO  : make one for getting all information about the user all  its applications  and all

exports.getUserDetails = async(req,res)=>{

    try{

        const userId = req.user.id;

        if(!userId){
            return res.status(404).json({
                success:"False",
                message:"Id not found"
            })
        }

        const userDetails = await User.findById(id);

        return res.status(200).json({
            success:"True",
            message:"Details  fetch successfully",
            body:userDetails,
        })

    }
    catch(err){
        return res.status(500).json({
            succes:"False",
            message:err.message,
        })
    }

}















//todo:make  one for uploading resume  also research more  about it