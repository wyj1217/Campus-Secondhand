var express = require('express');
var router = express.Router();
var {baokuModel,tieziModel} = require('../model/shr')
let multiparty = require("multiparty")

router.get('/', function(req, res, next) {
    res.send()
})

router.get('/getbk',async(req,res)=>{
    let data = await baokuModel.find()
    res.send({
        code:200,
        msg:"查询宝库成功",
        data
    })
})

router.post('/addbaoku',async (req,res)=>{
    await baokuModel.create({
        'title':req.body.title,
        'img':req.body.img
    })
    res.send({
        code:200,
        msg:"添加宝库成功",
    })
})

router.get("/gettie",async(req,res)=>{
    let id = req.query.id
    if(id){
        let data = await tieziModel.find({bid:id})
        res.send({
            code:200,
            msg:"查询主题帖成功",
            data
        })
    }else{
        let data = await tieziModel.find()
        res.send({
            code:200,
            msg:"查询主题帖成功",
            data
        })
    }
})

router.post("/addtie",async(req,res)=>{
    let body = req.body
    console.log(body);
    await tieziModel.create(body)
    res.send({
        code:200,
        msg:"添加主题帖成功"
    })
})

router.post("/upload",async(req,res)=>{
    let form = new multiparty.Form()
    form.uploadDir = 'upload'
    form .parse(req,(err,a,urldata)=>{
        res.send({path:urldata.avatar[0].path})
    })
})


module.exports = router;
