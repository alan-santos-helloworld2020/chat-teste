var express = require('express');
var path = require('path');
var router = require('./router/router');
var moment = require('moment');
var http = require('http');
var socketio = require('socket.io');
var porta = process.env.PORT || 3000;



var app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connection', (socket) => {
 
    socket.on('connection', (msg) => {
        msg.mensagem = "Conectado";
        io.emit('online', msg);
        console.log('você está conectado');
    });

    socket.on('online', (msg) => {
        msg.id = socket.id;
        msg.data = moment().format('DD/MM/YYYY');
        msg.hora = moment().format('hh:mm:ss');
        io.emit('online', msg);
        console.log(msg);
    });

});

server.listen(porta, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`http://localhost:${porta}`);

})