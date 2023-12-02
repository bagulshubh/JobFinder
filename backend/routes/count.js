const express = require("express");
const  router = express.Router();

const {auth} = require('../middlerwares/auth')

const {createCount,getCount , countJobs} = require("../controller/Count");

router.post("/x12xbvc",createCount);
router.get("/getCount",getCount);
router.post("/countJob",countJobs);

module.exports = router




