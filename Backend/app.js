const express = require('express')
const connect = require('./db/connect')
require('dotenv').config()
const bookRouter = require('./router/Book')
const cors  = require('cors')
const app = express()

app.use('/book',bookRouter)

//midlware for handeling CORS POLICI
app.use(cors());

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