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


//massive connections 
massive(CONNECTION_STRING).then((db) => {
    console.log('db connected')
    app.set('db', db)
})

app.get('/api/view_bins', (req, res, next) => {
    req.app.get('db').view_bins().then(bins => {
        res.status(200).send(bins)
    }).catch(errorMessage => {
        console.log(errorMessage)
    })
})

app.post('api/create_bin', (req, res, next) => {
    req.app.get('db')
        .create_bin([req.body.userInput, req.body.productName, req.body.productPrice])
        .then(repsonse => {
            console.log('success');
            res.status(200).send(response)
        }).catch(errorMessage => {
            console.log(errorMessage)
        })
})





//SERVER
app.listen(SERVER_PORT, () => {
    console.log(`We are many, You are one on ${SERVER_PORT}`)
})