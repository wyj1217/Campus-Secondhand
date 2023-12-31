var express = require('express');
var router = express.Router();
var { talkroomModel, usersmodel } = require('../model/lyl')

router.get('/getusers', async (req, res, next) => {
  let data = await usersmodel.find()
  res.send({
    code: 200,
    data: data
  })
});

router.get('/getta', async (req, res, next) => {
  let data = await talkroomModel.find()
  res.send({
    code: 200,
    data: data
  })
});


router.get('/gettalk',async (req,res)=>{
  let data=await talkroomModel.find()
  let date=await usersmodel.find()
  let list=[]
  data.forEach(item=>{
    date.forEach(item1=>{
      if(item.username == item1.username){
        list.push({'info':item.info,'username':item.username,'img':item1.img})
      }
    })
  })
  res.send({
    code: 200,
    list
  })
})



router.post('/login', async (req, res, next) => {
  let data = req.body
  let dat = await usersmodel.findOne(data)
  if (dat) {
    res.send({
      code: 200,
      msg: '登录成功'
    })
  } else {
    res.send({
      code: 204,
      msg: '登录失败,用户信息错误'
    })
  }
});

router.post('/getroomlist', async (req, res, next) => {
  data = await talkroomModel.find(req.body)
  res.send({
    msg: '发送成功',
    code: 200,
    data: data
  })
})
module.exports = router;
