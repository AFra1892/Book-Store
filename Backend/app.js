const express = require('express')

const mongoose = require('mongoose')
const app = express()


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
