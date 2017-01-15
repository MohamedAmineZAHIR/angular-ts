var express = require('express');
var app = express();
var path = require('path');
var collection = [];

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.sendFile(path.join('./index.html'));
});

io.on('connection', function (socket) {
    console.log('connected');
    socket.emit('socket:connected');

    socket.on('collection:get', function () {
        socket.emit('collection', collection);
    });

    socket.on('collection:add', function (item) {
        collection.unshift(item);

        socket.emit('collection', collection);
    });
});

server.listen(3000);