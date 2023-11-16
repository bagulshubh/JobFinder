const express = require('express');
const  app = express();

const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile")
const applicationRoutes = require("./routes/application")
const tagRoutes = require('./routes/tag')
const chatRoutes = require('./routes/chat')
const cookieParser = require("cookie-parser");
const {cloudinaryConnect} = require("./configuration/cloudinary")
const database = require('./configuration/dbConnect');
const  cors = require("cors");
const fileUpload = require("express-fileupload");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

database.connect();


app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"https://jobfindeer.netlify.app/",
 		credentials:true,
    })
)

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

// Connecting to cloudinary
cloudinaryConnect();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/application", applicationRoutes);
app.use('/api/v1/tag',tagRoutes);
app.use('/api/v1/chat',chatRoutes);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})













