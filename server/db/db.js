const mongoose=require('mongoose')

mongoose.connect('mongodb://root:wyj1217qwerTYuiOP..@8.140.193.253:27017/Compus_Second_Hand?authSource=admin')

const conn=mongoose.connection

conn.on('open',()=>{
    console.log('连接成功');
})

module.exports=mongoose