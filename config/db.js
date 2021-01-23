const mongoose  = require('mongoose')
const config = require('config')
const db = config.get('mongoURL')

const connectDB = async () =>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDB connected')
    } catch (err) {
        console.log(err.message)
        //exit precess with failure
        process.exit(1)
    }
    
}

module.exports = connectDB;