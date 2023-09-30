const express = require("express");
const router = express.Router();

const  {
    createApplication,
    deleteApplication ,
    apply,
    save,
    getAllApplications,
} = require('../controller/Application');

const {
    createTag,
    deleteTag
} = require('../controller/Tag');


const {auth , isEmployeer , isSeeker } = require('../middlerwares/auth');
const { route } = require("./user");

router.post("/createApplication",auth,isEmployeer,createApplication);

router.delete("/deleteApplication",auth,isEmployeer,deleteApplication)

router.post("/apply",auth,isSeeker,apply);

router.post("/save",auth,isSeeker,save);

router.get("/getAllApplications",getAllApplications);


module.exports = router











