require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , controller = require('./controller');


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

app.get('/api/shelves/:shelfId', controller.getShelfProducts);

app.get('/api/bins/:shelfId/:binId', controller.getBinId);

app.put('/api/editBin/:id', controller.editBin);

app.post('/api/createBin/:id', controller.createBin);

app.delete('/api/deleteBin/:id', controller.deleteBin);


//SERVER
app.listen(SERVER_PORT, () => {
    console.log(`We are many, You are one on ${SERVER_PORT}`)
});