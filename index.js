const express = require('express');
//const morgan = require('morgan');
//const cors = require('cors');
//const bodyParser = require('body-parser');

const routes = require('./conf/routes');

const server = express();

server.use(express.json());
server.use(routes);
//server.use(morgan('dev'));
//server.use(cors());
//server.use(bodyParser.json());

const emotionJson = require('./json/emocoes.json');
const req = require('express/lib/request');



routes.get('/', (req, res) => {
    return res.json({ message: 'api funcionando' });
});

routes.get('/emocoes', (req, res) => {

    return res.json(emotionJson['Emocoes']);
});

routes.post('/emocoes/add', (req, res) => {
    const emotion = req.body;
    if(!body){
        return res.status(400).end();
    }
    emotionJson['Emocoes'].push(emotion);

});

server.listen(3000, () => {
    console.log('Server is running...');
});
