const express = require('express')
const connect = require('./db/connect')
require('dotenv').config()
const Book =require('./models/Book')
const app = express()



app.get('/',async(req,res)=>{
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count:books.length,
            data:books
        })
    } catch (error) {
        console.log(error);
    }
})

app.post('/',async(req,res)=>{
    try {
        const book = await Book.create(req.body)
        res.status(201).send({book})
    } catch (error) {
        console.log(error);
    }
})

app.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const singleBook = await Book.findById(id)
        return res.status(200).json({
            count:1,
            data:singleBook
        })
        
    } catch (error) {
        console.log(error);
    }
})

app.delete('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await Book.findByIdAndDelete(id)
        console.log("book deleted");
        res.status(200).send('book was deleted')

    } catch (error) {
        console.log(error);
    }
})

const start = async()=>{
    try {
        await connect(process.env.MongoDB_URL)
        app.listen(3000,()=>{
            console.log('server running on port 3000....');
        })
    } catch (error) {
        
    }
}

start()