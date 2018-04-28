const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const MessageRouter = require('./controllers/MessageRouter')
const SignupRouter = require('./controllers/SignupRouter')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api/messages', MessageRouter)
app.use('/api/signup', SignupRouter)
app.use(express.static('build'))

const server = http.createServer(app)
const PORT = process.env.PORT || 2000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

server.on('close', () => {
    mongoose.connection.close()
})
