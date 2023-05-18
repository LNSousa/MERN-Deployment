const express = require('express')
const mongoose = require('mongoose')

const dbname = process.env.DB
const username = process.env.USERNAME
const pw = process.env.PASSWORD

const uri = `mongodb+srv://${username}:${pw}@cluster0.hbusxj2.mongodb.net/${dbname}`

mongoose.connect((uri), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Established link to database.'))
.catch((err) => ('Error establishing connection to database:', err))