const followModel = require('../models/follow.models')
const likeModel = require('../models/like.model')
const postModel = require('../models/post.models')
const userModel = require('../models/user.models')


// POST :- api/users/follow/:username

async function followController(req,res) {
    
    let followusername
    let followeeusername
    try {
        
    followusername = req.user.username
    followeeusername = req.params.username

    // console.log(followusername)
    
    
    
    if(followusername===followeeusername){
        return res.status(400).json({
            message:"You cant follow Yourself"
        })}

        const isUserExist = await userModel.findOne({
            username:followeeusername
        })    

    if(!isUserExist){
        return res.status(400).json({
            message:"User Not Found"
        })
    }

    
    const followeRecord = await followModel.create({
        follower:followusername,
        followee:followeeusername
    })
    
    
    res.status(200).json({
        message:`You successfully follow ${followeeusername}`,
        follow:followeRecord
    })
    
} catch (error) {
    if(error.code===11000){
        return res.status(400).json({
            message:`You Already Following ${followeeusername}`
        })
    }}
}

// Unfollow The User
// POST :- api/users/unfollow/:username

async function unfollowController(req,res) {
    
    const followusername = req.user.username
    const followeeusername = req.params.username

    const isFollowingExist = await followModel.findOne({
        follower:followusername,
        followee:followeeusername
    })

    if(!isFollowingExist){
        return res.status(200).json({
            message:`You're not following ${followeeusername} Yet`
        })}

    await followModel.findByIdAndDelete(isFollowingExist._id)

    res.status(200).json({
        message:`You Successfully Unfollow ${followeeusername}`
    })}



// Like The Post
// POST:- api/users/like/:postID

 async function likeController(req,res) {

    const postId = req.params.postId
    let user = req.user._id

    // console.log(postId,user)

    const isPostExist = await postModel.findById(postId)
    
    if(!isPostExist){
        return res.status(404).json({
            message:"Post not Found"
        })}

    const isAlreadyLiked = await likeModel.findOne({
        postId:postId,
        likedBy:user
    })   

    if(isAlreadyLiked){
        return res.status(200).json({
            message:"You Already Liked The Post"
        })
    }

    const like = await likeModel.create({
        postId:postId,
        likedBy:user
     })   

     res.status(201).json({
        message:"Post Liked Succesfully",
        like
     })
    } 

module.exports = {followController,unfollowController,likeController}