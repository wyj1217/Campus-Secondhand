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

const huren = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/huren.png'));
const hurenBase64 = huren.toString('base64');

const pig = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/pig.png'));
const pigBase64 = pig.toString('base64');

const watch = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/watch.png'));
const watchBase64 = watch.toString('base64');

const gui = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/gui.png'));
const guiBase64 = gui.toString('base64');

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

const put=new mongoose.Schema({
    img:String,
    name:String,
    headImg:String,
    state:String,
    price:Number,
    starNum:Number,
    title:String,
    who:String,
})

const get=new mongoose.Schema({
    img:String,
    name:String,
    headImg:String,
    state:String,
    price:Number,
    starNum:Number,
    title:String,
    who:String,
})

const goods=new mongoose.Schema({
    name:String,
    children:Array,
    
})

const searchResModel=mongoose.model('searchRes',searchData,'searchRes')
const putModel=mongoose.model('put',put,'put')
const getModel=mongoose.model('get',get,'get')
const goodsModel=mongoose.model('goods',goods,'goods')


module.exports={searchResModel,putModel,getModel,goodsModel}

// goodsModel.create({
//     name:'电子产品',
//     children:[
//         {
//             img:user1_computerBase64,
//             title:'戴尔笔记本',
//             price:12999,
//             starNum:59,
//             who:'小滴',
//             headImg:user1Base64,
//         },
//         {
//             img:user2_xiangjiBase64,
//             title:'佳能相机',
//             price:16000,
//             starNum:591,
//             who:'小佳',
//             headImg:user1Base64,
//         }
//     ]
// },{
//     name:'服饰',
//     children:[{
//         img:watchBase64,
//         title:'男人必备手表',
//         price:5999,
//         starNum:59,
//         who:'小表',
//         headImg:user1Base64,
//     }]
// },{
//     name:'家具',
//     children:[
//         {
//             img:guiBase64,
//             title:'床头柜',
//             price:588,
//             starNum:17,
//             who:'小柜',
//             headImg:user1Base64,
//         }
//     ]
    
// })

// getModel.create({
//     img:pigBase64,
//     // name:'小虎',
//     headImg:user2Base64,
//     state:'未入柜',
//     price:999,
//     starNum:65,
//     title:'猪年纪念币',
//     who:'小猪'
// })

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

