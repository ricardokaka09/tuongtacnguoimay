const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const Cors = require('cors')
const connectDb = require('./config/db')
const app = express()
const socketIo = require('socket.io')

const PORT = process.env.PORT || 1234
connectDb()
// app.use(fileUpload())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(Cors());
app.use(express.json({extended: false}))
app.get('/', (req,res) => res.send('get success'))

// Define Routes
app.use('/api/users' ,require('./routers/api/users'))
app.use('/api/profile' ,require('./routers/api/profile'))
app.use('/api/auth' ,require('./routers/api/auth'))
app.use('/api/product' ,require('./routers/api/product'))
app.use('/api/basket' ,require('./routers/api/basket'))
app.post('/api/posts/postDemo', (req, res) =>{
    const {description,files} = req.body;
    // const files = req.files
    console.log(files.files);
})
const server=app.listen(PORT, () => console.log('connecting.........'))
// const server = http.createServer(app)
const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  });

const socketio = require('./socket/socket_io')(io)
