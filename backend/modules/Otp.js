const  mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const  otpTemplate = require('../utils/emailTemplate');

const otpSchema  = new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    },


})


async function sendVerificationEmail(email, otp) {

	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email",
			`<h1>Welcome to JobFinder</h1>
			<h2>Your OTP is ${otp}</h2>`
		);
		// console.log("Email sent successfully: ", //mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

otpSchema.pre("save", async function (next) {
	
	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

const OTP = mongoose.model("Otp", otpSchema);

module.exports = OTP;