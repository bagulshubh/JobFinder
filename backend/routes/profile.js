const express = require("express");
const  router = express.Router();

const {auth} = require('../middlerwares/auth')

const {
    updateProfile,
    getUserDetails,
    deleteProfile,
    updateProfileImage
} = require('../controller/Profile');

router.put("/updateProfile",auth,updateProfile);
router.get("/getUserDetails",auth,getUserDetails);
router.delete("/deleteProfile",auth,deleteProfile);
router.put("/updateImage",auth,updateProfileImage);

module.exports = router




