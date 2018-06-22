require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json())

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env


//massive connections 
massive(CONNECTION_STRING).then((db) => {
    console.log('db connected')
    app.set('db', db)
});

app.get('/api/view_bins', (req, res) => {
    console.log('hit it')
    req.app.get('db').view_bins().then(bins => {
        res.status(200).send(bins)
    }).catch(errorMessage => {
        console.log(errorMessage)
    })
});

app.get('/api/view_bins/:id', (req, res) => {
    console.log('hit')
    req.app.get('db').view_bins().then(bins => {
        console.log('hit')
        res.status(200).send(bins)
    }).catch(errorMessage => {
        console.log(errorMessage)
    })
});

// CRUD for Bins

app.post('/api/create_bin', (req, res) => {
    console.log(req.body)
    req.app.get('db')
        .create_bin([req.body.imageInput, req.body.nameInput, req.body.priceInput, req.body.binId])
        .then(response => {
            console.log('success');
            res.status(200).send(response)
        }).catch(errorMessage => {
            console.log(errorMessage)
        })
});

app.delete('/api/bin/:id', (req, res) => {
    console.log('deleting')
    bin.forEach((bin, index) => {
        if (bin.id === Number(req.params.id)) {
            bin.splice(index, 1)
            console.log('deleted')
        }
    })
    res.status(200).send('Deleted Bin')
});





//SERVER
app.listen(SERVER_PORT, () => {
    console.log(`We are many, You are one on ${SERVER_PORT}`)
});