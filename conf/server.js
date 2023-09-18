const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

mongo = "mongodb+srv://jrvn:P3nt4t0n1x@cognitiva.ycduofb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongo)
    .then(() => {
        app.listen(port, () => {
            console.log(`APICognitiva app listening at http://localhost:${port}`);
        });
    })

    .catch(err => console.log(err));


module.exports = app;