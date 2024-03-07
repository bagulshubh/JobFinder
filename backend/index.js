const express = require('express');
const  app = express();
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile")
const applicationRoutes = require("./routes/application")
const tagRoutes = require('./routes/tag')
const chatRoutes = require('./routes/chat')
const countRoutes = require("./routes/count")
const cookieParser = require("cookie-parser");
const {cloudinaryConnect} = require("./configuration/cloudinary")
const database = require('./configuration/dbConnect');
const  cors = require("cors");
const fileUpload = require("express-fileupload");
const socket = require('socket.io');
const http = require('http');

require("dotenv").config();

const PORT = process.env.PORT || 4000;

database.connect();

const server = http.createServer(app);
const io = socket(server, {
	cors: {
	  origin: "http://localhost:5173",
	  credentials: true,
	},
  });

global.onlineUsers = new Map();
io.on("connection", (socket) => {
	console.log("User connected:", socket.id);
  
	socket.on("add-user", (userId) => {
	  console.log("User added:", userId);
	  global.onlineUsers.set(userId, socket.id);
	});
  
	socket.on("send-notification", (data) => {
	  const sendUserSocket = global.onlineUsers.get(data.to);
	  console.log(sendUserSocket)
	  if (sendUserSocket) {
		socket.to(sendUserSocket).emit("notification-receive", data.msg);
	  }
	  console.log("Notification send",data.msg)
	});
  
	socket.on("disconnect", () => {
	  global.onlineUsers.delete(socket.id);
	  console.log("User disconnected:", socket.id);
	});
  });
  

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:5173",
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
app.use("/api/v1/count",countRoutes);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});



server.listen(PORT, () => {
	console.log(`App is running at ${PORT}`);
  });










