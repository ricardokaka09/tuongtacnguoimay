const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const router = express.Router()

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get('/me',auth, async(req,res) => {
    try {
        const profile  = await Profile.findOne({user: req.user.id}).populate(
            'user',
            ['name','avatar']
        );
        if (!profile) {
            return res.status(401).json({msg: 'no profile for this user'})
        }
        res.json(profile)
    } catch (err) {
        console.log(er.message);
        res.status(401).json({msg: 'server Error'})
    }
    
})

// @route   POST api/profile
// @desc    Test route
// @access  Public
router.post('/',[auth,
        [
            check('status','Status is require').not().isEmpty(),
            check('skills','Skills is require').not().isEmpty()

        ]
    ], async (req,res)=>{
        const err = validationResult(req)
        if (!err.isEmpty()) {
            return res.status(400).json({err: err.array()})
        }
        
        try {
            let profile  = await Profile.findOne({user: req.user.id})
            if (profile) {
                profile = await Profile.findOneAndUpdate(
                    {user: req.user.id},
                );
                await profile.save()
                return res.json(profile)
                
            }
            //create
            profiles = new Profile(profileFields)

            
            await profiles.save()
            res.json(profiles)
            
            res.send('success')
        } catch (err) {
            console.log(err.message)
            res.status(400).json("Server Errors")
        }
        // console.log(profileFields.skills)
        // res.send('success')

})
// GET /api/profile
router.get('/',async(req,res)=>{
    try {
        const profiles = await Profile.find().populate('user',['name','avatar'])
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }
})
// GET /api/profile/user/:userID
router.get('/user/:user_id',async(req,res)=>{
    try {
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user',['name','avatar'])
        if (!profile) {
            return res.status(400).json({msg: 'not found user'})
        }
        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }
})
// DELETE /api/profile/:userID
router.delete('/',auth,async(req,res)=>{
    try {
        await Profile.findOneAndRemove({user: req.user.id})
        await User.findOneAndRemove({_id: req.user.id})
        
        res.json({msg: 'user deleted'})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }
})
module.exports = router;