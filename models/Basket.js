const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = Schema({
        idUser: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        idProduct: {
            type: Schema.Types.ObjectId,
            ref: 'products'
        },
        
        name:{
            type: String,
            require: true,
        },
        imgName:{
            type: String,
            require: true,
        },
        price:{
            type: String,
            require: true,
        },
        quantity:{
            type: String,
            require: true,
        },
        
})

module.exports = Basket = mongoose.model('basket',PostSchema)