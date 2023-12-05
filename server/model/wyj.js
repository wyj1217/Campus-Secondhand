const mongoose=require('../db/db')

const fs = require('fs');
const path=require('path')

// console.log(fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user1.png')))

const user1 = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user1.png'));
const user1Base64 = user1.toString('base64');
// console.log(user1Base64);
const user1_computer = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user1-computer.png'));
const user1_computerBase64 = user1_computer.toString('base64');

const user2 = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user2.png'));
const user2Base64 = user2.toString('base64');
// console.log(user1Base64);
const user2_xiangji = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user2_xiangji.png'));
const user2_xiangjiBase64 = user2_xiangji.toString('base64');

const searchData=new mongoose.Schema({
    img:String,
    title:String,
    price:Number,
    starNum:Number,
    state:String,
    seller:String,
    name:String,
    headImg:String,
})

const searchResModel=mongoose.model('searchRes',searchData,'searchRes')

// searchResModel.create({
//     img:user2_xiangjiBase64,
//     title:'佳能超级摄影机',
//     price:11300,
//     starNum:353,
//     state:'未入柜',
//     seller:'小王',
//     name:'小王',
//     headImg:user2Base64
// })

module.exports={searchResModel}