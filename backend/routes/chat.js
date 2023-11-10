const express = require("express");
const router = express.Router();


const {createChat , sendMessage} = require("../controller/Chat");


router.post("/createChat",createChat);

router.post("/sendMessage",sendMessage)





module.exports = router



