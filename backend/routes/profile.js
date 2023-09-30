const express = require("express");
const  router = express.Router();

const {auth} = require('../middlerwares/auth')

const {
    updateProfile,
    getUserDetails
} = require('../controller/Profile');

router.put("/updateProfile",auth,updateProfile);
router.get("/getUserDetails",auth,getUserDetails);

module.exports = router




