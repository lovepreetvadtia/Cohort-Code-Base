const followModel = require("../models/follow.model")
const likeModel = require("../models/like.model")
const userModel = require("../models/user.models")



// POST:- api/users/follow/:id

async function followController(req,res) {

    let follower
    let followee

    try {
        
        follower = req.user.username
        followee = req.params.id
 
        if(follower===followee){
            return res.status(409).json({
            message:"You Can't Follow Yourself"
        })}

    const isFolloweeExist = await userModel.findOne({username:followee})
    
    if(!isFolloweeExist){
        res.status(404).json({
            message:"User Not Found"
        })}
    

        let followPair = await followModel.create({
        follower:follower,
        followee:followee
    })
    
    res.json({
        message:`You Followed ${followee} Sucessfully`
    })}

    catch (error) {
     if(error.code===11000){
         return  res.status(400).json({
             message:`You Already Following ${followee}`
            })
        }}}
        

// POST:- api/users/unfollow/:id

async function unfollowController(req,res) {
    let follower = req.user.username
    let followee = req.params.id

    const isFollowingExist = await followModel.findOne({
        follower:follower,
        followee:followee
    })

    console.log(isFollowingExist)

    if(!isFollowingExist){
        return res.status(400).json({
            message:`You Are Not Following ${followee}`
    })}
    
    await followModel.findByIdAndDelete(isFollowingExist._id)
    
    res.status(200).json({
        message:`You Sucessfully Unfollow ${followee}`
    })}    


// POST:- api/users/like/:id

async function likeController(req,res) {

    try {
    
    const post = req.params.id
    const user = req.user._id

    if(!post){
        return res.status(404).json({
            message:"Post Not Found"
    })}
    
    if(!user){
        return res.status(409).json({
            message:"UnAuthorised Access"
    })}

    const likeRecord = await likeModel.create({
        post:post,
        user:user,
        post
    })

    res.status(200).json({
        message:"Post Liked Successfully",post
    })

    console.log(post,user)

} catch (error) {
     if(error.code===11000){
        return res.status(409).json({
            message:"You Already Liked this Post"
    })}}}


// POST: api/users/unlike/:id

async function unlikeController(req,res) {
    
    const post = req.params.id
    const user = req.user

    if(!post){
        return res.status(404).json({
            message:"Post Not Found"
        })}
    
    if(!user){
        return res.status(409).json({
            message:"UnAuthorised Access"
        })}

      await likeModel.findOneAndDelete({
        post:post,
        user:user
    })

      res.status(200).json({
        message:"Post Unlike Sucessfully",post
      })}

module.exports = {followController,unfollowController,likeController,unlikeController}