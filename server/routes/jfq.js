var express = require('express');
var router = express.Router();
var multiparty=require('multiparty')
var {touxiangModel} = require("../model/jfq")
router.get('/', function(req, res, next) {
    res.send()
})

// router.post('/toux',async (req,res)=>{
//   res.send({})
// })

router.post('/uploadImg', async (req, res) => {
    // 创建multiparty的form表单对象
    let form = new multiparty.Form()
   
    // 为multiparty配置上传的目录
    form.uploadDir = "upload"
   
    // 利用multiparty解析上传的目录
    form.parse(req, (err, formData, imgData) => {
      // formData: 表示除了图片之外的普通表单数据
      // imgData: 表示上传的图片信息
      // 将上传的图片路径传回客户端
      res.send({ code: 200, msg: '图片上传成功', path: 'http://localhost:3000/' + imgData.file[0].path }) 
    })
  });

  // 修改用户头像
router.post('/eduserimg', async (req, res) => {
    let body = req.body
    // 修改用户信息
    await touxiangModel.updateOne({_id:body.id},{img:body.img})
    // 查找当前用户信息
    let newuser = await touxiangModel.find({_id:body.id})
    // 返回新的用户信息
    res.send({code:200,msg:'头像修改成功',newuser:newuser[0]})
  });

  
module.exports = router;
