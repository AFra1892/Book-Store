const express = require('express')
const connect = require('./db/connect')
require('dotenv').config()
const app = express()


app.get('/',(req,res)=>{
    res.send('Home Page')
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