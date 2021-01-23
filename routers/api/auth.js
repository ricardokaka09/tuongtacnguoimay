const express = require('express')
const router = express.Router()
const {check,validationResult} =require('express-validator/check')
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const bcrypt =  require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/',auth, async(req,res) => {
    try {
        // get thong tin user tru password
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.log(err.message)
        // res.status(400).json({msg: 'server errors'})
    }
})
router.get('/profile/:id',auth, async(req,res) => {
    try {
        // get thong tin user tru password
        const user = await User.findById(req.params.id).select('-password')
        res.json(user)
    } catch (err) {
        console.log(err.message)
        // res.status(400).json({msg: 'server errors'})
    }
})
router.get('/:search',auth, async(req,res) => {
    try {
        // get thong tin user tru password
        const users = await User.find().select('-password');
        const data = users.filter( item =>{
            return item._id != req.user.id&&item.name.toLowerCase().indexOf(req.params.search.toLowerCase()) !== -1
            
        })
        // console.log(data);
        res.json(data )
    } catch (err) {
        console.log(err.message)
        res.status(400).json({msg: 'server errors'})
    }
})

// PUT api/auth/
router.put('/addFriend/:id',auth, async(req,res) => {
    try {
        // get thong tin user tru password
        const user = await User.findById(req.params.id).select('-password');
        // console.log(user);
        const userReq = await User.findById(req.user.id).select('-password')
        if (!user) {
            return res.status(500).json("user not found");
        }
        user.friends.unshift({user: req.user.id,name: userReq.name})
        userReq.friendsReq.unshift({user: req.params.id,name: user.name})
        await user.save()
        await userReq.save()
        // console.log(data);
        res.json({user: user.friends,userReq: userReq.friendsReq})
        // res.json(user.friends)
    } catch (err) {
        console.log(err.message)
        res.status(400).json({msg: 'server errors'})
    }
})

// PUT api/auth/
router.put('/acceptFriend/:id',auth, async(req,res) => {
    try {
        // get thong tin user tru password
        const user = await User.findById(req.user.id).select('-password');
        // console.log(user);
        const userAccept = await User.findById(req.params.id).select('-password')
        if (!user) {
            return res.status(500).json("user not found");
        }
        user.friendList.unshift({user: req.params.id,name: userAccept.name})
        user.friends.splice(user.friends.user == req.params.id,1);
        userAccept.friendList.unshift({user: req.user.id,name: user.name})
        userAccept.friendsReq.splice(userAccept.friendsReq.user == req.user.id,1);
        await user.save()
        await userAccept.save()
        // console.log(data);
        res.json(user.friendList)
    } catch (err) {
        console.log(err.message)
        res.status(400).json({msg: 'server errors'})
    }
})
// LOGIN api/auth
router.post('/',[
    check('email','Please include is valid Email').isEmail(),
    check('password','Password is required').exists()
], async (req,res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json({err:err.array()})
    }

    const {email,password} = req.body;


    try {
        let user = await User.findOne({email})
        if (!user) {
            res.status(400).json({errors: {mess: 'check email exist'}})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({errors: {mess: 'check pass exist'}})
        }
        const payload ={
            user:{
                id: user.id
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),
                {expiresIn: 360000},
                (err,token) => {
                    if (err) throw err;
                    res.json({token})
                }
            )
        // res.send('User Register')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('server errors')
    }

    
})
module.exports = router;