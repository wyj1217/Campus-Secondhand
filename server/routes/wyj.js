var express = require('express');
var router = express.Router();

var {testModel,searchResModel}=require('../model/wyj')

router.get('/test', async (req,res)=>{
    const data=await testModel.find()
    res.send(data)
})

router.post('/searchRes',async (req,res)=>{
    console.log(req.body);
  const reg=new RegExp(req.body.state)
  const data1=await searchResModel.find({title:reg})
  const data2=await searchResModel.find({name:reg})

  res.send({res:[data1,data2]})




    // const data=awa
})

module.exports = router;

