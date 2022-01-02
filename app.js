const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const request = require('request');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/home', function (req, res) {
    request('http://127.0.0.1:5000/', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});