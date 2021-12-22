const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});