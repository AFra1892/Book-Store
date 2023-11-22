const express = require('express')
const connect = require('./db/connect')
require('dotenv').config()
const bookRouter = require('./router/Book')
const app = express()

app.use('/book',bookRouter)

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