const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = Schema({
        // id: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'users'
        // },
        name:{
            type: String,
            require: true
        },
        
})

module.exports = Category = mongoose.model('category',PostSchema)