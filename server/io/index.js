/**
 * Module dependencies.
 */
const { Server } = require("socket.io");
var app = require('../app');
var http = require('http');

var { talkroomModel } = require('../model/lyl');

/** 
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
//这是最完整版-------------------------------------------------------------------------------



var io = new Server(server, {
    cors: {
        // origin: ['http://localhost:5173', 'http://192.168.1.17:5173']
        // origin: true
        origin: '*'
    }
});


io.on('connection', (socket) => {
    console.log('接收到客户端连接请求',);


    //聊天功能
    let nowroom = ''
    socket.on('chatMessage', async (msg) => {
        console.log(msg);
        console.log('互相发送信息');
        await talkroomModel.create({ username: msg.username, info: msg.info })
        let smsg = { id: Date.now(), username: msg.username, info: msg.info }
        io.to(msg.roomid).emit('message', { data: smsg })

    });



    //世界临时广播
    socket.on('worldmessage', (data) => {
        console.log('世界临时广播', data);
        io.emit('message', {
            status: 200,
            data: {
                id: Date.now(), username: '世界广播', info: data.worldtext
            },
        });
    })
})

server.listen(port);
module.exports = server;
