const express = require("express");
const  router = express.Router();



const {createCount,getCount , countJobs , countAccepted , countHired,countCandidate,decreaseCandidate,decreaseHired,decreaseJob } = require("../controller/Count");

router.post("/x12xbvc",createCount);
router.get("/getCount",getCount);
router.post("/countJob",countJobs);
router.post("/countCandidate",countCandidate);
router.post("/countAccepted",countAccepted);
router.post("/countHired",countHired);
router.post("/decreaseJob",decreaseJob);
router.post("/decreaseCandidate",decreaseCandidate);
router.post("/decreaseHired",decreaseHired);


module.exports = router




