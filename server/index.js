require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser');


const app = express();


const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

massive(CONNECTION_STRING).then((db) => {
    console.log('db connected')
    app.set('db', db)
})


app.listen(SERVER_PORT, () => {
    console.log(`We are many, You are one on ${SERVER_PORT}`)
})