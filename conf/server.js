const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongo = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cognitiva.ycduofb.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongo)
    .then(() => {
        app.listen(port, () => {
            console.log(`APICognitiva app listening at http://localhost:${port}`);
        });
    })

    .catch(err => console.log(err));


module.exports = app;