var express = require('express');
var router = express.Router();
var multiparty=require('multiparty')
var {testModel,searchResModel,putModel,getModel,goodsModel
,sellerModel}=require('../model/wyj')

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

router.get('/putList',async (req,res)=>{
  const data=await putModel.find()
  res.send(data)
})

router.get('/getList',async(req,res)=>{
  const data=await getModel.find()
  res.send(data)
})

router.get('/goods',async (req,res)=>{
  const data=await goodsModel.find()
  res.send(data)
})

router.post('/uploadImg',async (req,res)=>{
  // console.log(req.body);
  let form=new multiparty.Form()
  form.uploadDir='/upload'

  form.parse(req,(err,fields,files)=>{
    console.log(err,);
  })
})

router.get('/seller',async (req,res)=>{
  const data=await sellerModel.find()
  res.send(data)
})

module.exports = router;

