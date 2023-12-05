var express = require('express');
var router = express.Router();

var {testModel}=require('../model/wyj')

router.get('/test', async (req,res)=>{
    const data=await testModel.find()
    res.send(data)
})

module.exports = router;

