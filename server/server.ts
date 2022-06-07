'use strict';
import { CHANNEL } from '../constants';
import { GameState } from './game-state'

// Frameworks / misc
const PORT = 3000;
const express = require('express');
const app = express();

// Initialize server
const http = require('http').createServer(app);

// Open socket
// @ts-ignore
const io = require('socket.io')(http);

// Establish server path
const path = require('path');

// Find client files
const clientDirectory = path.resolve(__dirname + '/../client');
const aaaa = path.resolve(__dirname + '/../node_modules/socket.io-client/dist/socket.io.js');

app.use('/', express.static(clientDirectory));
app.use('/', express.static(aaaa));

app.get('/', (req, res) => {
    res.sendFile(clientDirectory + '/' + 'index.html');
});

io.on('connection', (socket) => {
    const gameState = new GameState()
    console.log('a user connected');

    gameState.startGame()
    io.emit('game message', gameState.playerTurnInfo())

    socket.on(CHANNEL.LOG, (msg) => {
        console.log('message: ' + msg);
        io.emit(CHANNEL.LOG, msg);
    });

    socket.on(CHANNEL.GAME, (clientInput) => {
        console.log('got message: ' + clientInput.cardId);
        io.emit(CHANNEL.LOG, clientInput.cardId);
        var players = gameState.getPlayers()
        var enemies = gameState.getEnemies()
        players[0].setChosenCard(clientInput.cardId)
        players[0].setTarget([enemies[0]])
        gameState.endTurn()
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

http.listen(PORT, () => {
    console.log('server started');
})