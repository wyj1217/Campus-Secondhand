const mongoose=require('../db/db')

const test=new mongoose.Schema({
    title:String,
})

const testModel=mongoose.model('test',test,'test')
// testModel.create({
//     title:'测试数据'
// })

module.exports={testModel}