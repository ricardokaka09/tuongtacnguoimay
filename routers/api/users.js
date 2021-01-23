const express = require('express')
const {check,validationResult} =require('express-validator/check')
const gravatar = require('gravatar')
const bcrypt =  require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../../models/User')

const router = express.Router()

// @route   GET api/users
// @desc    Test route
// @access  Public
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include is valid Email').isEmail(),
    check('password','Password is required').isLength({min: 8})
], async (req,res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json({err:err.array()})
    }
    const {name,email,password} = req.body;
    try {
        let user = await User.findOne({email})
        if (user) {
            res.status(400).json({errors: {mess: 'check exist'}})
        }

        // let avatar = gravatar.url(email,{
        //     s: '200',
        //     r: 'pg',
        //     d: 'mn'
        // })
       
       
        user = new User({
            name,email,password
        })
    
        
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password,salt)

        await (await user).save()

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