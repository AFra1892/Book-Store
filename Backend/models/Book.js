const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
    name:String,
    author:String,
    publishYear:Number
})

module.exports = mongoose.model('Book',BookSchema)