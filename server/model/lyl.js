var mongoose = require('mongoose');
const fs = require('fs');
const path=require('path')

var talkroomSchema = mongoose.Schema({
    username: String,
    info: String,
});

var usersSchema = mongoose.Schema({
    username: String,
    password: String,
    img:String
});
var talkroomModel = mongoose.model('talkroom', talkroomSchema);
var usersmodel = mongoose.model('liaot', usersSchema);
// const user6=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user6.png'));
// const user6Base64=user6.toString('base64');

// const user4=fs.readFileSync(path.join(__dirname,'../','./wyj-imgs/user4.png'));
// const user4Base64=user4.toString('base64');

// usersmodel.create([
//   { username: 'god', password: '123456',img:user6Base64 },
//   { username: 'admin', password: '123456',img:user4Base64 },
// ])
module.exports = { talkroomModel, usersmodel };