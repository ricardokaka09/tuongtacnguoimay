const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = Schema({
        id:{
            type: Schema.Types.ObjectId,
            ref: 'categories'
        },
        idCategory: {
            type: String,
            require: true
        },
        CategoryName: {
            type: String,
            require: true
        },
        name:{
            type: String,
            require: true
        },
        imgName:{
            type: String,
            require: true
        },
        price: {
            type: String,
            require: true
        },
        quantity: {
            type: String,
            require: true
        },
        sales: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        timestamp: {
            type: String,
            require: true
        }
        
})

module.exports = Product = mongoose.model('product',PostSchema)