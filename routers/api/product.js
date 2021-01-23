const express = require('express');
const fileUpload = require('express-fileupload');
const { check, validationResult } = require('express-validator');
const config = require('config')
const auth = require('../../middleware/auth');
const router = express.Router()
const User = require('../../models/User')
// const Profile = require('../../models/Profile');
const Category = require('../../models/Category');
const Product = require('../../models/Product');
const Post = require('../../models/Post');
const bodyParser = require('body-parser')
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const Grid = require('gridfs-stream')
const GridFsStorage = require('multer-gridfs-storage')
const Pusher = require('pusher');
const mongURL = config.get('mongoURL')

const conn = mongoose.createConnection(mongURL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const pusher = new Pusher({
  appId: "1128975",
  key: "b31e1db98c7b766e3f77",
  secret: "51c4390589533f06df7d",
  cluster: "ap1",
  useTLS: true
});
mongoose.connection.once('open',()=>{
    const changeStream = mongoose.connection.collection('posts').watch();
    changeStream.on('change', change =>{
        if(change.operationType === 'insert'){
            console.log('Triggering Pusher');
            pusher.trigger('posts', 'inserted',{
                change: change
            })
        }else{
            console.log('Err triggering Pusher');
        }
    })
})
let gfs
conn.once('open', ()=>{
    gfs = Grid(conn.db,mongoose.mongo)
    gfs.collection('images')
})
const storage  = new GridFsStorage({
    url: mongURL,
    file: (req,file)=>{
        return new Promise((resolve,rejects)=>{
            const filename= `image-${Date.now()}${path.extname(file.originalname)}`
            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            }
            resolve(fileInfo)
        })
    }
})
const upload = multer({storage})
router.get('/upload',auth, (req,res)=>{
    res.status(201).send('dit me may')
})

router.post('/upload/image',upload.single('file'),(req,res)=>{
    res.status(201).send(req.file)
})
router.post('/upload/product',auth,async (req,res)=>{
    // const dbCategory = new Category({
    //     name: req.body.category
    // })
    // Category.create(dbCategory,(data,err)=>{
    //     if(err){
    //         res.status(500).send(err)
    //     }else{
    //         res.status(201).send(data)
    //     }
    // })
    // const {name,description,imgName,timestamp} = req.body;
    const category = await Category.findOne({name: req.body.idCategory})
        if (!category) {
            const dbCategory = new Category({
                    name: req.body.idCategory
                })
                Category.create(dbCategory,(data,err)=>{
                    if(err){
                        res.status(500).send(err)
                    }else{
                        res.status(201).send(data)
                    }
                })
        }else{
        const product = await Product.findOne({name: req.body.name})
        console.log(product);
        if (product) {
            res.send({err: 'sp da ton tai'})
        }else{
            const dbProduct = new Product({
                idCategory: category._id,
                CategoryName: category.name,
                name: req.body.name,
                imgName: req.body.imgName,
                price: req.body.price,
                quantity: req.body.quantity,
                sales: req.body.sales,
                state: req.body.state,
                timestamp: new Date().toString(),
            })
            // dbPost.append('user',req.user.id)
            Product.create(dbProduct,(err,data)=>{
                if(err){
                    res.status(500).send(err)
                }else{
                    res.status(201).send(data)
                }
            })
        }
            
            // res.status(500).send('khong ton tai category')
        }
        
    // res.send(category)
    // console.log(req.body.description);
    
})

router.get('/retrieve/image/single', (req,res)=>{
    gfs.files.findOne({filename: req.query.name}, (err,file)=>{
        if (err) {
            res.status(500).send(err)
        }else{
            if (!file || file.length === 0) {
                res.status(404).json({err: 'file not found'})
            }else{
                const readstream = gfs.createReadStream(file.filename)
                readstream.pipe(res)
            }
        }
    })
})
router.get('/retrieve/category/:id',async(req,res)=>{
    console.log(req.params.id)
    await Category.findById(req.params.id).then((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            // data.sort((b,a)=>{
            //     return a.timestamp - b.timestamp;
            // })
            res.status(201).send(data.name)
        }
    })
})
router.get('/retrieve/product/:id',async(req,res)=>{
    try {   
        console.log(req.params.id)
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(500).json({msg: 'post not found'})
        }
        res.status(201).send(product);
    } catch (error) {
        res.status(501).json({msg: 'loi'})
    }
    
    
})

// get all posts
router.get('/retrieve/products',async(req,res)=>{
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const product = await Product.find().sort({date: -1})
        res.json(product)
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
router.put('/like/:id',auth, async(req,res)=>{
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(500).json({msg: 'post not found'})
        }
        //check user
        if (post.likes.filter(like=> like.user.toString() === req.user.id).length > 0) {
            return res.status(500).json({msg: 'post already Like'})
        }
        // add like userId vao likes[]
        post.likes.unshift({ user: req.user.id})
        await post.save()
        // like number
        res.json(post.likes)
    } catch (err) {
        console.log(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(500).json({msg: 'post not found'})
        }
        res.status(500).json({msg: 'Server Error'})
    }
})
router.put('/comment/:id',auth, async(req,res)=>{
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(500).json({msg: 'post not found'})
        }
        // add like userId vao likes[]
        const user = await User.findById(req.user.id).select('-password')
        console.log(user);
        // console.log(req.user);
        post.comments.push({ user: req.user.id, text: req.body.comment,name: user.name})
        /*
            unshift : add vao fan tu dau cua mang,
            shift: xoa phan tu khoi mang,
            push: add phan tu vao cuoi mang
        */
        await post.save()
        // like number
        res.json(post.comments)
    } catch (err) {
        console.log(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(500).json({msg: 'post not found'})
        }
        res.status(500).json({msg: 'Server Error'})
    }
})
// @route   GET api/post
// @desc    Test route
// @access  Public
router.use(fileUpload());
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())
router.post('/',[auth,[
    check('text','text is require').not().isEmpty()
]], async(req,res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json({error : err.array()})
    }
    try {
        const user = await User.findById(req.user.id).select('-password')
        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            userID: req.user.id
        })
        const post = await newPost.save()
        res.json(post)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg: 'Server Error'})
    }
   
})

//GET /api/posts/:id
router.get('/:id',auth, async(req,res) => {
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(500).json({msg: 'post not found'})
        }
        res.json(post)
    } catch (err) {
        console.log(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(500).json({msg: 'post not found'})
        }
        res.status(500).json({msg: 'Server Error'})
    }
   
})
//DELETE /api/posts/:id
router.delete('/del/:id',auth, async(req,res) => {
    try {
        // const user = await User.findById(req.user.id).select('-password')
        const post = await Post.findById(req.params.id)
        //check user
        if (!post) {
            return res.status(500).json({msg: 'post not found'})
        }
        if (post.userID.toString() !== req.user.id) {
            return res.status(500).json({msg: 'user not authorized'})
        }
        await post.remove()
        res.json({post: 'post Removed'})
    } catch (err) {
        console.log(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(500).json({msg: 'post not found'})
        }
        res.status(500).json({msg: 'Server Error'})
    }
   
})

module.exports = router;