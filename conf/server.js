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

const DB_USER = encodeURIComponent(process.env.DB_USER)
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@api.5k2toho.mongodb.net/?retryWrites=true&w=majority&appName=api`
mongoose.connect(uri)
    .then(() => {
        app.listen(port, () => {
            console.log(`APICognitiva server listening at http://localhost:${port}`);
        });
    })

    .catch(err => console.log(err));


module.exports = app;