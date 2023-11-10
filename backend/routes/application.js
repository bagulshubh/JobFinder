const express = require("express");
const router = express.Router();

const  {
    createApplication,
    deleteApplication ,
    apply,
    save,
    getAllApplications,
    updateApp,
    withdrawApplication,
    unsave
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

router.put("/updateApplication",auth,isEmployeer,updateApp);

router.put("/withdrawApplication",auth,isSeeker,withdrawApplication);

router.put("/unsave",auth,isSeeker,unsave);


module.exports = router











