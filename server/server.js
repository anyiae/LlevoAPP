const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);

app.use(cors());

const PORT = 8988;

const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:8101']
    }
})

io.on('connection', (socket) => {   

    socket.on('find-driver', ({points}) => {
        console.log('......', points);

        const counter = setInterval(() => {
            const coords = points.shift();
            if (!coords) {
                clearInterval(counter)
            } else {
                socket.emit('position', {coords});
            }
        }, 1000)
    })
})

server.listen(PORT, () => console.log('Todo bien !!'))