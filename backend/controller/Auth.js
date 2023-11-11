const User = require("../modules/User");
//we  need profile  here because we  want to add  all null values to it
const Profile = require('../modules/Profile');
const Otp = require('../modules/Otp');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
require("dotenv").config();



//signup function
exports.signUp = async(req,res)=>{

    try{

        const  {
            fname,
            lname,
            email,
            password,
            confirmpassword,
            role,
            otp,
            tags,
        } = req.body;

        //simple validation
        if(!fname || !lname || !email || !password  || !confirmpassword || !role || !otp ){
            return res.status(402).json({
                success:false,
                message:"All fileds are required",
            })
        }

        //chceking   passwords
        if(password!==confirmpassword){
            return res.status(402).json({
                success:false,
                message:"Confirm  password  does not   match",
            })
        }

        //does user already exits
        const check1 = await  User.findOne({email});
        if(check1){
            return res.status(402).json({
                success:false,
                message:"Email already registerd try to  login",
            })
        }

        const resentOtp = await Otp.find({email}).sort({createdAt:-1}).limit(1);

        if(resentOtp.length === 0){
            return res.status(400).json({
                success:false,
                message:"Otp not found",
            })
        }else if(resentOtp[0].otp!==otp){
            return res.status(400).json({
                success:false,
                message:"Invalid Otp",
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        //think about  some logic in which we can tell account type by just  checking  true or  false (later)

        const  additional  = await Profile.create({
            gender:null,
            dataOfBirth:null,
            mobileNo:null,
            about:null,
            companyName:null,
            collageName:null,
            gYear:null,
            percentage:null,
            resume:null,
        });


        const user = await User.create({
            fname:fname,
            lname:lname,
            email:email,
            password:hashedPassword,
            role:role,
            additionalInfo:additional._id,
            tags:tags,
            image:"",
        });

        return res.status(200).json({
            success:true,
            user,
            message:"User created successfully",
        });
    }
    catch(err){
        return  res.status(500).json({
            success:false,
            message:err.message,
        })
    }


}


exports.login = async(req,res)=>{

    try{

        const {email,password} = req.body;

        if(!email || !password){
            return res.status(402).json({
                success:false,
                message:"All fileds are reqired",
            })
        }

        const user =  await User.findOne({email});

        if(!user){
            return res.status(402).json({
                success:false,
                message:"User does not exit",
            })
        }

        //we  can check passwords  directly using  if else and bcrrytp compare  fuction
        if(await bcrypt.compare(password,user.password) ){

            const token = jwt.sign({
                email:user.email,id:user._id,role:user.role
            },
            process.env.JWT_SECRET, 
            {
                expiresIn: "24h",
            }
            );

            //check here there may be any parsing  error  with object 
            user.toObject();
            user.token  = token;
            user.password = undefined;
            
            const options = {
				expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
			res.cookie("token", token, options).status(200).json({
				success: true,
				token,
				user,
				message: `User Login Success`,
			});

        }
        else{
            return res.status(400).json({
                success:"false",
                message:"Password does not match",
            })
        }

    }
    catch(err){
        return  res.status(500).json({
            success:false,
            message:err.message,
        })
    }


}

exports.sendotp = async (req, res) => {
	try {
		const { email } = req.body;

		
		const checkUserPresent = await User.findOne({ email });
		

		
		if (checkUserPresent) {
			return res.status(401).json({
				success: false,
				message: `User is Already Registered`,
			});
		}

		var otp = otpGenerator.generate(6, {
			upperCaseAlphabets: false,
			lowerCaseAlphabets: false,
			specialChars: false,
		});
		const result = await Otp.findOne({ otp: otp });
		console.log("Result is Generate OTP Func");
		console.log("OTP", otp);
		console.log("Result", result);
		
		const otpPayload = { email, otp };
		const otpBody = await Otp.create(otpPayload);
		console.log("OTP Body", otpBody);
		res.status(200).json({
			success: true,
			message: `OTP Sent Successfully`,
			otp,
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({ success: false, error: error.message });
	}
};





