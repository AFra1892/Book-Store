const express = require('express')

const mongoose = require('mongoose')
const app = express()

const mongoDBURL  = 'mongodb+srv://liverpool1892ynwaaa:Ld9xO61j1ZotB0eP@book-store-mern.gswjzih.mongodb.net/books-collection?retryWrites=true&w=majority'

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('app connected to database');
        app.listen(5000,()=>{
            console.log('server is running on port 5000....');
        })
    })
    .catch((error)=>{
        console.log(error);
    })
