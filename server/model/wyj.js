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

const qun1 = fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/qun1.png'));
const qun1Base64 = qun1.toString('base64');

const qun2=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/qun2.png'));
const qun2Base64 = qun2.toString('base64');

const qun3=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/qun3.png'));
const qun3Base64 = qun3.toString('base64');

const qun4=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/qun4.png'));
const qun4Base64 = qun4.toString('base64');

const user3=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user3.png'));
const user3Base64=user3.toString('base64');

const user4=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user4.png'));
const user4Base64=user4.toString('base64');

const user5=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user5.png'));
const user5Base64=user5.toString('base64');

const user6=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user6.png'));
const user6Base64=user6.toString('base64');

const p1=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/p1.png'));
const p1Base64=p1.toString('base64');

const p2=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/p2.png'));
const p2Base64=p2.toString('base64');

const p3=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/p3.png'));
const p3Base64=p3.toString('base64');

const bg=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/bg.png'));
const bgBase64=bg.toString('base64');

const topicImg=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/topicImg.png'));
const topicImgBase64=topicImg.toString('base64');

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

const seller=new mongoose.Schema({
    name:String,
    children:Array
})

const suggest=new mongoose.Schema({
    username:String,
    headImg:String,
    desc:String,
    img:Array,
    price:Number,
    loveNum:Number,
    likeNum:Number,
    commentNum:Number,
    fansNum:String,
})

const hotTopic=new mongoose.Schema({
    title:String,
    readCount:Number,
})

const topicDetail=new mongoose.Schema({
    topicBg:String,
    topicImg:String,
    title:String,
    desc:String,
    readCount:Number,
    commentNum:Number,
    likeNum:Number,
    shareNum:Number,
    headImg:String,
    username:String,
    comment:Array,
    likeList:Array,
    pid:{
        type:mongoose.Types.ObjectId,
        ref:'hotTopic'
    }
})

const recycleOrder=new mongoose.Schema({
    img:String,
    title:String,
    status:String,
    time:String,
    price:Number,
    address:String,
    name:String,
})

const searchResModel=mongoose.model('searchRes',searchData,'searchRes')
const putModel=mongoose.model('put',put,'put')
const getModel=mongoose.model('get',get,'get')
const goodsModel=mongoose.model('goods',goods,'goods')
const sellerModel=mongoose.model('seller',seller,'seller')
const suggestModel=mongoose.model('suggest',suggest,'suggest')
const hotTopicModel=mongoose.model('hotTopic',hotTopic,'hotTopic')
const topicDetailModel=mongoose.model('topicDetail',topicDetail,'topicDetail')
const recycleOrderModel=mongoose.model('recycleOrder',recycleOrder,'recycleOrder')



module.exports={searchResModel,putModel,getModel,goodsModel,sellerModel,suggestModel,
    hotTopicModel,topicDetailModel}

    // topicDetailModel.create({
    //     topicBg:bgBase64,
    //     topicImg:topicImgBase64,
    //     title:'#要好货，戳这里',
    //     desc:'我这里有好货我这里有好货我这里有好货我这里有好货我这里有好货我这里有好货我这里有好货',
    //     readCount:38642,
    //     commentNum:1234,
    //     likeNum:1234,
    //     shareNum:1234,
    //     headImg:user1Base64,
    //     username:'小王',
    //     comment:[{username:'自由的轮胎',comment:'嗯，不错，值得推荐！！！'}],
    //     likeList:[{username:'大馒头'},{username:'小馒头',}],
    //     pid:'65767e7a46fef5fc8aacb8cc'
    // })

    // hotTopicModel.create({
    //     title:'快来签到了，送礼物！',
    //     readCount:38642,
    // })

// suggestModel.create({
//     username:'专业卖二手的小王',
//     headImg:user2Base64,
//     desc:'我是专卖二手的商家，都来找我买二手哦，我这里价格实惠东西质量又好！！我是专卖二手的商家，都来找我买二手哦，我这里价格实惠东西质量又好！！！我是专卖二手的商家，都来找我买二手哦，我这里价格实惠东西质量又好！！！我是专卖二手的商家，都来找我买二手哦，我这里价格实惠东西质量又好！！！',
//     img:[p1Base64,p2Base64,p3Base64],
//     price:2999,
//     loveNum:999,
//     likeNum:666,
//     fansNum:'12.3w粉丝',
//     commentNum:888,
// })

// sellerModel.create(
//     {
//     name:'认证卖家',
//     children:[
//         {
//             name:'abby^',
//             headImg:user3Base64,
//             desc:'abby^的描述',
//             guanzhu:false,
//             gouru:42,
//             dianzan:229,
//             zhuanru:9082,
//             xinyufen:97,
//             guanzhuNum:8,
//             fans:9221
//         },{
//             name:'虎扑体育',
//             headImg:user4Base64,
//             desc:'虎扑体育的描述',
//             guanzhu:false,
//             gouru:42,
//             dianzan:229,
//             zhuanru:9082,
//             xinyufen:97,
//             guanzhuNum:8,
//             fans:9221
//         },{
//             name:'我是好人',
//             headImg:user5Base64,
//             desc:'我是好人的描述',
//             guanzhu:false,
//             gouru:42,
//             dianzan:229,
//             zhuanru:9082,
//             xinyufen:97,
//             guanzhuNum:8,
//             fans:9221
//         },{
//             name:'宝宝',
//             headImg:user6Base64,
//             desc:'宝宝的描述',
//             guanzhu:false,
//             gouru:42,
//             dianzan:229,
//             zhuanru:9082,
//             xinyufen:97,
//             guanzhuNum:8,
//             fans:9221
//         }
//     ]
//     },
//     {
//         name:'粉丝量',
//         children:[
//             {
//                 img:qun1Base64
//             },{
//                 img:qun2Base64
//             },{
//                 img:qun3Base64
//             },{
//                 img:qun4Base64
//             }
//         ]
//         },
//         {
//             name:'交易数',
//             children:[
//                 {
//                     img:qun1Base64
//                 },{
//                     img:qun2Base64
//                 },{
//                     img:qun3Base64
//                 },{
//                     img:qun4Base64
//                 }
//             ]
//             },
//             {
//                 name:'信誉分',
//                 children:[
//                     {
//                         img:qun1Base64
//                     },{
//                         img:qun2Base64
//                     },{
//                         img:qun3Base64
//                     },{
//                         img:qun4Base64
//                     }
//                 ]
//                 }
// )



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

