const express=require('express');
const router = express.Router();
const Posts = require('../models/posts')
// get back posts
router.get('/posts1', async(req,res)=> {
    try {
        const ourposts = await Posts.find();
        res.json(ourposts);
    }
    catch(err){
        res.json({message :err});
        console.log({message :err});
    }
});
// submit a post
router.post('/', async(req,res)=> {
    const post = new Posts({
        email: req.body.email,
        title: req.body.title,
        description:req.body.description
    });
    try{
        await post.save(post)
        res.json({
            "message" : "post was saved"
        })
    } catch(err){
        res.json({
            "message": "post was not saveed " + err
        })
    }
});
// specific post
router.get('/:postId',async(req,res)=>{
    try{
        const post = await Posts.findById(req.params.postId);
        res.json(post);
    }
    catch(err){
        res.json({message : err});
    }
});
router.get('/postneeded',async(req,res)=>{
    try{
        const post = await Posts.find({email:'hmidi.karim@gmail.com'}).exec();
        res.json(post);
    }
    catch(err){
        res.json({message : err});
    }
});
//delete post
router.delete('/:postId',async (req,res)=>{
    try{
        const removedPosts= await Posts.remove({_id: req.params.postId});
        res.json(removedPosts);
       }catch(err){
        res.json({message: err});
       }
});
//update a post 
router.patch('/:postId', async (req,res)=>{
    try{
        const updatedPost = await Posts.updateOne(
            {id: req.params.postId},
            {$set:{title:req.body.title}}
        );
    } catch (err){
        res.json({message: err});
    }
})
router.patch('/:postId', async (req,res)=>{
    try{
        const updatedPost = await Posts.updateOne(
            {id: req.params.postId},
            {$set:{email:req.body.email}}
        );
    } catch (err){
        res.json({
            "message": "email not updated " + err
        })
    }
})
module.exports = router;