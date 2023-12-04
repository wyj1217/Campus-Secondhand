const mongoose=require('../db/db')

const test=new mongoose.Schema({
    title:String,
})

const testModel=mongoose.model('test',test,'test')


module.exports={testModel}