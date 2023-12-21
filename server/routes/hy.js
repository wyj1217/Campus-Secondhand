var express = require("express");
var router = express.Router();
let multiparty = require("multiparty");
var { bookModel } = require("../model/hy");
// Yes, you need to import ObjectId from mongoose
const { ObjectId } = require("mongoose").Types;
var { goodsModel } = require("../model/wyj");

const { default: mongoose } = require("mongoose");

router.get("/", function (req, res, next) {
  res.send();
});

//添加图书
router.post("/addbook", async function (req, res, next) {
  // const Book =  goodsModel.children(req.body);
  //   const data = await Book.save()
  //   res.send({
  //     msg: "success",
  //     data: data,
  //   });
  // const data=await goodsModel.find()
  // data.forEach(item=>{
  //   if(item._id=='658036b2c30f0000420005f2'){
  //     item.children.push({price:req.body.price,img:req.body.imageUrl})
  //     console.log(item.children);
  //   }

  // })
  // console.log(data,'添加之后');

  console.log(req.body);

  await goodsModel.updateOne(
    { _id: new ObjectId("658036b2c30f0000420005f2") },
    {
      $push: {
        children: {
          title: req.body.title,
          content: req.body.content,
          price: req.body.price,
          img: req.body.imageUrl,
          headimg: req.body.headimg,
        },
      },
    }
  );

  // const book = new bookModel(req.body);
  // const data = await book.save()
  // res.send({data})
  await bookModel.create({
    title: req.body.title,
    content: req.body.content,
    price: req.body.price,
    img: req.body.imageUrl,
    headimg: req.body.headimg,
  });

  res.send({
    code: 200,
    msg: "发布成功",
  });
});

router.get("/book",async (req,res)=>{
  const data = await bookModel.find()
  res.send(data)
})

router.post('/delbook',async (req,res)=>{
  await bookModel.deleteOne({_id:req.body.id})
  res.send()
})

router.post("/upload", (req, res) => {
  let form = new multiparty.Form();
  form.uploadDir = "upload";
  form.parse(req, function (err, fields, files) {
    console.log(files);
    res.send({ path: "http://localhost:3000/" + files.avatar[0].path });
  });
});

//添加闲置

module.exports = router;
