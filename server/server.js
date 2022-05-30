'use strict';

//Frameworks / misc
const PORT = 3000;
const express = require('express');
const app = express();

//Initialize server
const http = require('http').createServer(app);

//Open socket
const io = require('socket.io')(http);

//Establish server path
const path = require('path');

//Find client files
const clientDirectory = path.resolve(__dirname + '/../client');
const aaaa = path.resolve(__dirname + '/../node_modules/socket.io-client/dist/socket.io.js');

app.use('/', express.static(clientDirectory));
app.use('/', express.static(aaaa));

app.get('/', (req, res) => {
    res.sendFile(clientDirectory + '/' + 'index.html');
});

var cards = [
    {
        "text": "attack for 4",
        "id": "1"
    },
    {
        "text": "block for 2",
        "id": "2"
    }
]

var enemyInfo = {
    "target": "111",
    "card": "1",
    "health": 10,
    "maxHealth": 10
}

var clientInfo = {
    "clientId": "111",
    "health": 50,
    "maxHealth": 50,
    "turn": 1,
    "cards": cards
}

io.on('connection', (socket) => {
    console.log('a user connected');

    io.emit('game message', clientInfo);

    socket.on('log message', (msg) => {
        console.log('message: ' + msg);
        io.emit('log message', msg);
    });

    socket.on('game message', (clientInput) => {
        console.log('got message: ' + clientInput.cardId);
        io.emit('log message', clientInput.cardId);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

http.listen(PORT, () => {
    console.log('server started');
})