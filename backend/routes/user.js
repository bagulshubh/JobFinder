const  express = require("express");
const router = express.Router();

const {
    login,
    signUp,
    sendotp
} = require('../controller/Auth');

const {auth}  = require('../middlerwares/auth');

//route for login
router.post("/login",login);
router.post("/signup",signUp);
router.post("/sendotp",sendotp);


module.exports = router




