const mongoose=require('../db/db')

const touxiang = new mongoose.Schema({
    img:String
})
const touxiangModel = mongoose.model("touxiang",touxiang,"touxiang")

module.exports={touxiangModel}