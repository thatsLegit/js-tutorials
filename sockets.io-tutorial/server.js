const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { formatMessage } = require('./utils/Message');
const { userFind, userJoins, userLeave, getRoomUsers } = require('./utils/User');

//Server initialization
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Static folders
app.use(express.static(path.join(__dirname, 'public')));

//Feels like io is the 'global' sockets server, while socket param is like
//each individual connection to the sockets server.

//Socket connection event
io.on('connection', socket => {

    socket.on('joinRoom', ({ userName, room }) => {
        const user = userJoins(socket.id, userName, room);
        socket.join(user.room);
        socket.emit('message', formatMessage('admin', `${user.userName}, welcome to ChatCord`)); //emits to the one user that connected in the front
        socket.broadcast.to(user.room).emit('message', formatMessage('admin', `${user.userName} has joined the chat`)); //emits to every user except the one that just connected
        //io.emit('message', 'A new user has connected'); //emits to everyone

        //On each socket connection we send the details about the room
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    socket.on('chatMessage', msg => {
        const user = userFind(socket.id);

        if (user) {
            io.to(user.room).emit('message', formatMessage(user.userName, msg));
        }
    });

    socket.on('disconnect', () => {
        const user = userFind(socket.id);

        if (user) {
            userLeave(socket.id);
            socket.broadcast.to(user.room).emit('message', formatMessage('admin', `${user.userName} has left the chat`));

            //On each socket connection we send the details about the room
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }

    });
});

//Listening port
const PORT = 3000 || process.env.PORT
server.listen(PORT, () => console.log('server running on port ' + PORT));