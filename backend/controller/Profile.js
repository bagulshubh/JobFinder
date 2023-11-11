const  Profile  = require('../modules/Profile');
const  User = require('../modules/User');
const {uploadImageToCloudinary} = require('../utils/imageUploader');


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

        const userId =  req.header("userId") || req.user.id;

        if(!userId){
            return res.status(404).json({
                success:"False",
                message:"Id not found"
            })
        }

        const userDetails = await User.findById(userId)
        .populate("additionalInfo")
        .populate("applications")
        .populate("saved")
        .populate({
            path:"messages",
            populate:{
                path:"subChat"
            }
        })
        .exec();

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


exports.deleteProfile = async(req,res)=>{

    try{

        const {userId,profileId} = req.body;

        await User.findByIdAndDelete(userId);

        await Profile.findByIdAndDelete(profileId);

        return res.status(200).json({
            success:"True",
            message:"Profile Deleted Successfully",
        })


    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
            location:"In deleteProfile Handler"
        })
    }

}

exports.updateProfileImage = async(req,res)=>{
    try{

        const displayPicture = req.files.displayPicture
        const userId = req.user.id
        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        console.log(image)
        const updatedProfile = await User.findByIdAndUpdate(
            { _id: userId },
            { image: image.secure_url },
            { new: true }
        )
        res.send({
            success: true,
            message: `Image Updated successfully`,
            data: updatedProfile,
        }) 

    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
            location:"Update Profile Image controller"
        })
    }
}










//todo:make  one for uploading resume  also research more  about it