const express = require("express")
const socketIO = require("socket.io")
const path = require("path")
const http = require("http")

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

/*
const app = express()

app.use(express.static(publicPath))

app.listen(port, 
	function (){
		console.log('yes ! using port ${port}... ') 
})
*/

const app = express()
app.use(express.static(publicPath))
const server = http.createServer(app)

const io = socketIO(server)
io.on("connection", () => {
	console.log('IO connection') 
})


server.listen(port, 
	function (){
		console.log('yes ! using port ${port}... ') 
})


