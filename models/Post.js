const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = Schema({
    id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    userID:{
        type: String,
        require: true
    },
    imgName:{
        type: String,
        require: true
    },
    description: {
        type:String,
        require: true
    },
    timestamp:{
        type: String,
    },
    name: {
        type:String
    },
    avatar: {
        type:String,

    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                require: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String,

            },
          
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('post',PostSchema)