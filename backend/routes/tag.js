const express = require("express");
const  router  = express.Router();


const {createTag,getAllTags} = require('../controller/Tag');

//need middlewares
const {auth,isEmployeer} = require('../middlerwares/auth');

router.post('/createTag',auth,isEmployeer,createTag);
router.get('/getAllTags',getAllTags);

module.exports = router