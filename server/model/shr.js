const mongoose=require('../db/db')

//宝库
const baoku=new mongoose.Schema({
    img:String,
    title:String
})


//主题帖
const tiezi = new mongoose.Schema({
    title:String,
    image:String,
    cont:String,
    bid:{
        type:mongoose.Types.ObjectId,
        ref:'baoku'
    }
})


//回帖
const pinglun = new mongoose.Schema({
    title:String,
    img:Array,
    tid:{
        type:mongoose.Types.ObjectId,
        ref:'tiezi'
    }
})

const baokuModel=mongoose.model('baoku',baoku,'baoku')
const tieziModel=mongoose.model('tiezi',tiezi,'tiezi')



module.exports={baokuModel,tieziModel}

// baokuModel.create({
//     title:"计算机学院"

// })

// tieziModel.create({
//     title:"挂一双科比9鸳鸯，支出幸福小学本校，科比死忠联系我哦"
// })