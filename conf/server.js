const express = require('express');
const mongoose = require('mongoose');
const {urlencoded} = require("express");
const app = express();
require('dotenv').config();

const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

const DB_USER = encodeURIComponent(process.env.DB_USER)
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cognitiva.ycduofb.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri)
    .then(() => {
        app.listen(port, () => {
            console.log(`APICognitiva app listening at http://localhost:${port}`);
        });
    })

    .catch(err => console.log(err));


module.exports = app;