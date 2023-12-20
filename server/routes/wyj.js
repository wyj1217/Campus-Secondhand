var express = require('express');
var router = express.Router();
var multiparty=require('multiparty')

var {testModel,searchResModel,putModel,getModel,goodsModel
,sellerModel,suggestModel,hotTopicModel,topicDetailModel,recycleOrderModel}=require('../model/wyj')
var multiparty=require('multiparty')

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

router.get('/suggest',async (req,res)=>{
  const data=await suggestModel.find()
  res.send(data)
})

router.post('/detail',async (req,res)=>{
  const data=await suggestModel.find({_id:req.body.id})
  res.send(data)
})

router.get('/hotTopic',async (req,res)=>{
  const data=await hotTopicModel.find()
  res.send(data)
})

router.post('/topicDetail',async (req,res)=>{
  const data=await topicDetailModel.find({pid:req.body.id})
  data.forEach(item=>{
    item.headImg='data:image/png;base64,'+item.headImg
    item.topicBg='data:image/png;base64,'+item.topicBg
    item.topicImg='data:image/png;base64,'+item.topicImg
  })
  res.send(data)
})

router.post('/upload',async (req,res)=>{
  let form=new multiparty.Form()
  form.uploadDir='upload'
  form.parse(req,(err,fields,files)=>{
    // console.log(files);
    res.send({path:files.avatar[0].path})
  })


  // form.parse(req,(err,formData,imgData)=>{
  //   console.log(imgData);
  //   // res.send({img:'http://localhost:3000/'+imgData.avatar[0].path})
  // })
})

router.post('/addLove',async (req,res)=>{
  console.log(req.body);
  
 
  await topicDetailModel.updateOne({_id:req.body.id},{$inc:{likeNum:1}})
   

  // console.log(data,'uuuuuuuuuuuuu');
  const data=await topicDetailModel.find()
  // console.log(data,'点赞数加一之后');

  // console.log(data);
  // const data=await suggestModel.find()
  // console.log(data);
  res.send(data)
})

router.get('/detail',async (req,res)=>{
  const data=await topicDetailModel.find()
  res.send(data)
})

router.post('/addMyGoods',async (req,res)=>{
  const {data}=req.body
  console.log(data);
  await recycleOrderModel.create({
    img:data.imageUrl,
    title:data.goodsName,
    status:data.status,
    time:data.time,
    address:data.address,
    name:data.username,
  })

  res.send()
})

router.get('/myOrder',async (req,res)=>{
  const data=await recycleOrderModel.find()
  res.send(data)
})

router.post('/delOrder',async (req,res)=>{
  await recycleOrderModel.deleteOne({_id:req.body.id})
  // await goodsModel.create({children:[{title:req.title}]})
  res.send()
})

// router.post('/lookItemDetail',async (req,res)=>{
//   const item=req.body.item
//   // console.log(item);

//   const data=await suggestModel.find()
//   const idx=data.findIndex(item=>item.username==item.who)
//   data.forEach(async item=>{
//     if(idx==-1){
//        await suggestModel.create(
//       {
//         username:item.who,
//         headImg:item.headImg,
//         desc:item.title,
//         price:item.price,
//         img:[item.img],
//         likeNum:item.starNum,
//         commentNum:item.starNum,
//         loveNum:item.starNum,
//       }
//   )
//     }else{
//       return item
//     }
//   })

  
  
//   console.log(data,'data');
//   // // res.send()
// })

module.exports = router;

