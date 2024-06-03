const express = require('express');
const app = express()
const Post = require('../model/postModel')
const router = express.Router()

//create a post
router.post('/post', async (req, res) => {
  const data = new Post({
    title: req.body.title,
    text: req.body.text,
    img: req.body.img,
    tags: req.body.tags
  })
  try{
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  }catch(error){
    res.status(400).json({message: error.message})
  }
})

//show all posts
router.get('/posts', async (req, res) => {
  try{
    const data = await Post.find({})
    res.json(data)
  }catch(error){
    res.status(500).json({message: error.message})
  }
})

//show post by id
router.get('/posts/:id', async (req, res) => {
  try{
    const data = await Post.findById(req.params.id)
    res.json(data)
  }catch{
    res.status(500).json({message: error.message})
  }
})

//Update post by id
router.patch('/update/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Post.findByIdAndUpdate(
        id, updatedData, options
    )
    res.send(result)
  }catch{
    res.status(400).json({ message: error.message })
  }
})

//Delete post by id
router.delete('/delete/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const data = await Post.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  }catch{
    res.status(400).json({ message: error.message })
  }
})

module.exports = router;