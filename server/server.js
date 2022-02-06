const http = require("http");
const express = require("express");
const app = express()
const server = http.createServer(app)
//const io = socketio(server)

const PORT = process.env.PORT || 5000

// io.on("connection", (socket) => {
//     console.log('A Connection has been made')
//     socket.on('disconnect', ()=> {
//         console.log('A disconnection has been made')
//     })
// })

server.listen(PORT, () => console.log(`Server is Quannected to Port ${PORT}`))