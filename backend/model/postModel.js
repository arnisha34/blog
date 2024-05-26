const mongoose = require('mongoose')
const { Schema } = mongoose;


const postSchema = new Schema({
    title: String,
    text: String,
    img: String,
    tags: Array,
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Post', postSchema)