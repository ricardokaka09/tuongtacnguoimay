const express = require('express');
const { check, validationResult } = require('express-validator');
const config = require('config')
const auth = require('../../middleware/auth');
const router = express.Router()
const User = require('../../models/User')
const Product = require('../../models/Product');
const Basket = require('../../models/Basket');
const path = require('path');
const mongoose = require('mongoose');
const mongURL = config.get('mongoURL')

router.post('/upload',auth,async (req,res)=>{
    // const {name,description,imgName,timestamp} = req.body;
    const user = await User.findById(req.user.id).select('-password')
    // res.send(user)
    const baskets = await Basket.findOne({idProduct: req.body._id});
    if (!baskets) {
        // const basket = baskets.filter(item => item.idProduct == req.body._id)
            const dbBasket = new Basket({
                idUser: req.user.id,
                idProduct: req.body._id,
                name: req.body.name,
                imgName: req.body.imgName,
                price: req.body.price,
                quantity: req.body.soluong,
            })
            console.log(dbBasket)
            // dbPost.append('user',req.user.id)
            Basket.create(dbBasket,(err,data)=>{
                if(err){
                    res.status(500).send(err)
                }else{
                    res.status(201).send(data)
                }
            })
    }else{
        res.status(501).send('da ton tai sp')
    }
        
    // const product = await Product.findById(req.body.idProduct)
    // console.log(req.body.description);
    
})

router.get('/retrieve/basket',auth,async(req,res)=>{
    try {
        const basket = await Basket.find({idUser: req.user.id});
        if (!basket) {
            return res.status(500).json({msg: 'post not found'})
        }
        res.send(basket)
    } catch (error) {
        res.status(501).send({msg: error})
    }
    
    
})

// get all posts
router.get('/retrieve/posts',async(req,res)=>{
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const post = await Post.find().sort({date: -1})
        res.json(post)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg: 'Server Error'})
    }
    // Post.find((err,data)=>{
    //     if(err){
    //         res.status(500).send(err)
    //     }else{
    //         data.sort((a,b)=>{
    //             return b.timestamp - a.timestamp;
    //         })
    //         res.status(201).send(data)
    //     }
    // })
})
router.get('/retrieve/profile/posts/:idUser',async (req,res)=>{
    await Post.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            const posts = data.filter(post=> post.userID === req.params.idUser)
            res.status(201).send(posts)
        }
    })
})
// put like for post
router.put('/quantity/',auth, async(req,res)=>{
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const baskets = await Basket.findOne({idProduct: req.body.idProduct})
        // const product = baskets.filter(basket=>basket.idProduct == req.body.idProduct)
        // const req = await Post.findById(req.params.id)
        if (!baskets) {
            return res.status(500).json({msg: 'post not found'})
        }
        // add like userId vao likes[]
        console.log(baskets.price)
        // console.log(product.quantity)
        baskets.quantity = parseInt(baskets.quantity)+  1;
        // res.send(product.quantity)
        await baskets.save()
        // like number
        res.json(baskets)
    } catch (err) {
        console.log(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(500).json({msg: 'post not found'})
        }
        res.status(500).json({msg: 'Server Error'})
    }
})
router.put('/quantity/remove',auth, async(req,res)=>{
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const baskets = await Basket.findOne({idProduct: req.body.idProduct})
        // const product = baskets.filter(basket=>basket.idProduct == req.body.idProduct)
        // const req = await Post.findById(req.params.id)
        if (!baskets) {
            return res.status(500).json({msg: 'post not found'})
        }
        // add like userId vao likes[]
        console.log(baskets.price)
        // console.log(product.quantity)
        baskets.quantity = parseInt(baskets.quantity)-  1;
        // res.send(product.quantity)
        await baskets.save()
        // like number
        res.json(baskets)
    } catch (err) {
        console.log(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(500).json({msg: 'post not found'})
        }
        res.status(500).json({msg: 'Server Error'})
    }
})
module.exports = router;